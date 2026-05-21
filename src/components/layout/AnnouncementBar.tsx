interface AnnouncementBarProps {
  bgColor?: string;
  textColor?: string;
  mainText?: string;
  subText?: string;
}

export function AnnouncementBar({
  bgColor = "#5C3D2A",
  textColor = "#F2EEE8",
  mainText = "Summer Vitality Sale — Now Live",
  subText = "Use code SUMMER30 · 30% off all bundles",
}: AnnouncementBarProps) {
  return (
    <div
      className="w-full text-center px-5 py-[13px]"
      style={{ background: bgColor }}
    >
      <p
        className="flex items-center justify-center gap-[10px] font-light text-[15px] tracking-[0.12em] uppercase m-0 leading-[1.3]"
        style={{ color: textColor, fontFamily: "'Poppins', sans-serif" }}
      >
        <span
          className="w-1 h-1 rounded-full flex-shrink-0 opacity-50"
          style={{ background: textColor }}
        />
        {mainText}
        <span
          className="w-1 h-1 rounded-full flex-shrink-0 opacity-50"
          style={{ background: textColor }}
        />
      </p>
      <p
        className="text-[12px] tracking-[0.06em] mt-1 mb-0 opacity-[0.82]"
        style={{ color: textColor, fontFamily: "'Inter', sans-serif" }}
      >
        {subText}
      </p>
    </div>
  );
}
