/**
 * TSV Fortuna Götzingen – Gemeinsames JavaScript
 * - Enthält aktuell nur das Mobile-Menü (Index).
 * - Der Code ist "safe": Wenn Elemente auf einer Seite fehlen, passiert nichts.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile-Menü (Hamburger)
  const btn = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");
  const closedIcon = document.getElementById("menu-icon-closed");
  const openIcon = document.getElementById("menu-icon-open");

  if (btn && menu && closedIcon && openIcon) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
      closedIcon.classList.toggle("hidden");
      openIcon.classList.toggle("hidden");
    });

    // Beim Klick auf einen Menüpunkt wieder schließen
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.add("hidden");
        closedIcon.classList.remove("hidden");
        openIcon.classList.add("hidden");
      });
    });
  }
});
