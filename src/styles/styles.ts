import { css } from "../../styled-system/css";

const resetStyles = css({
  margin: 0,
  padding: 0,
});

const bodyStyles = css({
  backgroundColor: "#fff",
  fontFamily: '"Poppins, sans-serif"',
});

const darkBackground = css({
  backgroundColor: "#000",
});

const deviceDesktopOnly = css({
  display: ["none", "none", "flex"], // Hidden on mobile, shown on desktop
});

const footerCopyright = css({
  color: "#fff",
});

const footerInnerContainer = css({
  padding: "24px 0",
  md: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
});

const footerSocialMediasLinks = css({
  color: "#fff",
});

const originalImageContainer = css({
  display: ["none", "none", "block"], // Hidden on mobile, shown on desktop
  position: "relative",
});

const originalImageOverlay = css({
  backgroundColor: "#ccc",
  height: "100%",
  left: 0,
  opacity: 0.8,
  position: "absolute",
  top: 0,
  width: "100%",
});

const pageSection = css({
  margin: "24px 0",
});

const pageSectionFull = css({
  margin: "0 auto",
  width: "100%",
  padding: 0,
});

const pageSectionConstrained = css({
  maxWidth: "980px",
  margin: "0 auto",
  width: "100%",
  padding: "0 16px",
});

const pageSectionMobilePadding = css({
  padding: "0 16px",
});

const puzzleConfigs = css({
  display: "flex",
  margin: "24px 0",
});

const puzzleConfigsItem = css({
  alignItems: "center",
  display: "flex",
  gap: "16px",
});

const puzzleContainer = css({
  display: "grid",
  gap: "16px",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
});

const puzzleInfoContainer = css({
  margin: "24px 0",
});

const puzzleInnerWrapper = css({
  display: "grid",
  gap: 0,
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
});

const puzzleOuterWrapper = css({
  maxHeight: "auto",
  maxWidth: "100%",
  position: "relative",
  lg: {
    maxHeight: "500px",
    maxWidth: "500px",
  },
});

const puzzleRow = css({
  display: "grid",
});

const puzzleTileContainer = css({
  paddingBottom: "100%",
  position: "relative",
  width: "100%",
});

const puzzleTile = css({
  bottom: 0,
  left: 0,
  overflow: "hidden",
  position: "absolute",
  right: 0,
  top: 0,
});

const switchContainer = css({
  alignItems: "center",
  display: "flex",
  gap: "8px",
});

const switchRoot = css({
  width: "42px",
  height: "25px",
  backgroundColor: "#333",
  borderRadius: "9999px",
  opacity: 0.5,
  position: "relative",
  boxShadow: "0 2px 10px #222",
  WebkitTapHighlightColor: "#333",
  '&[data-state="checked"]': {
    backgroundColor: "#000",
    opacity: 1,
  },
});

const switchThumb = css({
  display: "block",
  width: "21px",
  height: "21px",
  backgroundColor: "white",
  borderRadius: "9999px",
  transition: "transform 100ms",
  transform: "translateX(2px)",
  willChange: "transform",
  '&[data-state="checked"]': {
    transform: "translateX(19px)",
  },
});

const switchLabel = css({
  color: "#000",
  fontSize: "16px",
  lineHeight: 1,
  paddingRight: "16px",
});

const typographyH1 = css({
  fontSize: "36px",
  fontWeight: 700,
});

const typographyBody = css({
  fontSize: "24px",
});

// Media queries
const deviceMobileOnly = css({
  display: ["block", "block", "none"], // Shown on mobile, hidden on desktop
});

const selectTrigger = css({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  background: "#FFF",
  padding: "0 15px",
  borderRadius: "6px",
  height: "35px",
  boxShadow: "0 2px 10px #000",
  _hover: { bg: "lightskyblue" },
});

const selectContent = css({
  background: "#FFF",
  borderRadius: "6px",
  boxShadow: "0px 10px 38px -10px rgba(22, 23, 24, 0.35)",
  zIndex: "1",
});

const selectViewport = css({ padding: "5px" });

const selectItem = css({
  display: "flex",
  alignItems: "center",
  padding: "20px 35px 20px 25px",
  height: "25px",
  position: "relative",
  _hover: { bg: "lightcoral" },
});

const selectItemIndicator = css({
  position: "absolute",
  left: 0,
  width: "25px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const toolbarRoot = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  bg: "#FFF",
  boxShadow: "5px 8px 10px -10px #000",
  padding: "10px",
});

const toolbarButton = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  bg: "#000",
  color: "#DDD",
  padding: "10px 20px",
  borderRadius: "6px",
  _hover: { bg: "#AAA", color: "#000" },
});

export default {
  resetStyles,
  bodyStyles,
  darkBackground,
  deviceDesktopOnly,
  footerCopyright,
  footerInnerContainer,
  footerSocialMediasLinks,
  originalImageContainer,
  originalImageOverlay,
  pageSection,
  pageSectionFull,
  pageSectionConstrained,
  pageSectionMobilePadding,
  puzzleConfigs,
  puzzleConfigsItem,
  puzzleContainer,
  puzzleInfoContainer,
  puzzleInnerWrapper,
  puzzleOuterWrapper,
  puzzleRow,
  puzzleTileContainer,
  puzzleTile,
  switchContainer,
  switchRoot,
  switchThumb,
  switchLabel,
  typographyH1,
  typographyBody,
  deviceMobileOnly,
  selectTrigger,
  selectContent,
  selectViewport,
  selectItem,
  selectItemIndicator,
  toolbarRoot,
  toolbarButton,
};
