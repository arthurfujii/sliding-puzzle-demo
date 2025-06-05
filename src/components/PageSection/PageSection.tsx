import classNames from "classnames";
import { PageSectionProps } from "./types";
import ClassNames from "@/styles/styles";

/**
 * A component to render a page section with optional full width and full spacing.
 *
 * @param props - The component props.
 * @returns - The rendered page section.
 */
const PageSection = ({
  fullWidth = false,
  mobileSpacingX = true,
  children,
}: PageSectionProps) => {
  // These classes will take effect on desktop only.
  const fullWidthSectionClasses = fullWidth
    ? ClassNames.pageSectionFull
    : ClassNames.pageSectionConstrained;

  // Full spacing provides spacing between the container and mobile/tablet viewports.
  const fullSpacingSectionClasses = mobileSpacingX
    ? ClassNames.pageSectionMobilePadding
    : "";

  // Determine the container classes based on fullWidth and fullSpacing props.
  const pageSectionClasses = classNames(
    ClassNames.pageSection,
    fullWidthSectionClasses,
    fullSpacingSectionClasses
  );

  return <div className={pageSectionClasses}>{children}</div>;
};

export default PageSection;
