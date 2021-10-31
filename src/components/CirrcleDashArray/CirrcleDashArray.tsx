import { SVGAttributes, useMemo } from "react";

type Props = Readonly<{
  color: SVGAttributes<SVGCircleElement>["stroke"];
  r: number;
  strokeWidth: number;
  value: number;
}>;

export const CirrcleDashArray = (props: Props) => {
  const { color, r: outerR, strokeWidth, value } = props;

  /**
   * SVGのwidthとheightとなるサイズ
   */
  const size = useMemo(() => {
    return outerR * 2;
  }, [outerR]);

  /**
   * strokeWidthを考慮した半径
   */
  const r = useMemo(() => {
    return outerR - strokeWidth / 2;
  }, [outerR, strokeWidth]);

  /**
   * 円周
   */
  const circumference = useMemo(() => {
    return 2 * Math.PI * r;
  }, [r]);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        r={r}
        cx={outerR}
        cy={outerR}
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference * (value / 100)} ${circumference}`}
        transform={`rotate(-90 ${outerR} ${outerR})`}
      />
    </svg>
  );
};
