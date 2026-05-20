const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN ?? "";
const storefrontToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN ?? "";

const endpoint = `https://${domain}/api/2024-01/graphql.json`;

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontToken,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error(`Shopify API error: ${res.status}`);
  const json = await res.json();
  return json.data as T;
}

export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  priceRange: {
    minVariantPrice: { amount: string; currencyCode: string };
  };
  images: { edges: { node: { url: string; altText: string | null } }[] };
  variants: { edges: { node: { id: string } }[] };
}

const PRODUCTS_QUERY = `
  query getProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          priceRange {
            minVariantPrice { amount currencyCode }
          }
          images(first: 1) {
            edges { node { url altText } }
          }
          variants(first: 1) {
            edges { node { id } }
          }
        }
      }
    }
  }
`;

export async function getProducts(count = 3): Promise<ShopifyProduct[]> {
  if (!domain || !storefrontToken) return [];
  try {
    const data = await shopifyFetch<{
      products: { edges: { node: ShopifyProduct }[] };
    }>(PRODUCTS_QUERY, { first: count });
    return data.products.edges.map((e) => e.node);
  } catch {
    return [];
  }
}

export async function createCart(): Promise<string | null> {
  if (!domain || !storefrontToken) return null;
  const query = `mutation { cartCreate { cart { id checkoutUrl } } }`;
  try {
    const data = await shopifyFetch<{
      cartCreate: { cart: { id: string; checkoutUrl: string } };
    }>(query);
    return data.cartCreate.cart.id;
  } catch {
    return null;
  }
}
