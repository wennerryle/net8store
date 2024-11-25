import { autoUpdate, computePosition, offset } from "@floating-ui/dom";
import { onHover } from "../customSignals/onHover";
import { computed } from "@preact/signals-core";

export { computePosition, flip, shift, offset, arrow } from "@floating-ui/dom";

const carsPopoverId = "cars-popover";
const aboutUsLinkId = "about_us_link";

export async function initAboutUsPopover() {
  const carsPopover = document.getElementById(carsPopoverId)!;
  const aboutUsLink = document.getElementById(aboutUsLinkId)!;

  async function updatePos() {
    const { x, y } = await computePosition(aboutUsLink, carsPopover, {
      placement: "bottom-start",
      strategy: "fixed",
      middleware: [
        offset(({ rects }) => ({
          mainAxis: 18,
          alignmentAxis: -(rects.floating.width / 2) + rects.reference.width,
        })),
      ],
    });

    Object.assign(carsPopover.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  }

  autoUpdate(carsPopover, aboutUsLink, updatePos);

  const hoverables = [onHover(aboutUsLink, 350), onHover(carsPopover, 350)]

  const isAnyHovered = computed(() =>
    hoverables.some(
      (signal) => signal.value
    )
  );

  isAnyHovered.subscribe((isAnyHovered) => {
    carsPopover.style.display = isAnyHovered ? "block" : "none";
  })
}
