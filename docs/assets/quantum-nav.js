/* MatSciEd Quantum: the Modules menu and the previous / next links at the end of each page.

   The list of modules lives here and nowhere else in the pages. To add a module, add one entry
   to MODULES, add it to a SERIES if it continues one, and add a line to index.html.

   Each page loads this file with
     <script src="assets/quantum-nav.js" data-page="hs1"></script>
   data-page    id of the current page in MODULES
   data-base    optional prefix for links (the shared artifacts point at the live site)
   data-target  optional link target (the shared artifacts open pages in a new tab)
*/
(function () {
  "use strict";

  var MODULES = [
    { id: "hs1",     file: "HS1_From_a_Bit_to_a_Qubit.html",         title: "From a Bit to a Qubit",         group: "High school" },
    { id: "hs2",     file: "HS2_Finding_an_Answer_with_Waves.html",  title: "Finding an Answer with Waves",  group: "High school" },
    { id: "hs3",     file: "HS3_A_Qubit_as_a_Sensor.html",           title: "A Qubit as a Sensor",           group: "High school" },
    { id: "howmany", file: "How_Many_Bits_Fit_in_a_Qubit.html",      title: "How Many Bits Fit in a Qubit?", group: "Undergraduate" },
    { id: "forgets", file: "Why_a_Qubit_Forgets.html",               title: "Why a Qubit Forgets",           group: "Undergraduate" },
    { id: "bits",    file: "Bits_Qubits_and_Phase.html",             title: "Bits, Qubits, and Phase",       group: "Engineers" }
  ];
  var GROUPS = ["High school", "Undergraduate", "Engineers"];
  /* reading order within each series */
  var SERIES = [["hs1", "hs2", "hs3"], ["howmany", "bits", "forgets"]];
  /* where to go after the last page of a series */
  var FURTHER = { hs3: "howmany" };
  var HOME = { file: "index.html", title: "All Quantum modules" };

  var me = document.currentScript;
  var page = me ? me.getAttribute("data-page") : null;
  var base = (me && me.getAttribute("data-base")) || "";
  var target = me ? me.getAttribute("data-target") : null;

  function byId(id) { for (var i = 0; i < MODULES.length; i++) if (MODULES[i].id === id) return MODULES[i]; return null; }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; }
  function anchor(file, cls) {
    var a = el("a", cls);
    a.href = base + file;
    if (target) { a.target = target; a.rel = "noopener"; }
    return a;
  }

  /* ---------- the Modules menu ---------- */
  var btn = document.querySelector(".qnav-btn");
  var panel = document.getElementById("qnav-panel");
  if (btn && panel) {
    var home = anchor(HOME.file, "qnav-home");
    home.textContent = HOME.title;
    panel.appendChild(home);
    GROUPS.forEach(function (g) {
      panel.appendChild(el("h5", null, g));
      MODULES.forEach(function (m) {
        if (m.group !== g) return;
        var a;
        if (m.id === page) { a = el("a"); a.setAttribute("aria-current", "page"); }
        else { a = anchor(m.file); }
        a.textContent = m.title;
        panel.appendChild(a);
      });
    });

    var setOpen = function (open) {
      panel.hidden = !open;
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    };
    btn.addEventListener("click", function () { setOpen(panel.hidden); });
    document.addEventListener("click", function (e) {
      if (!panel.hidden && !panel.contains(e.target) && !btn.contains(e.target)) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !panel.hidden) { setOpen(false); btn.focus(); }
    });
    panel.addEventListener("click", function (e) { if (e.target.closest("a[href]")) setOpen(false); });
  }

  /* ---------- previous / next at the end of the page ---------- */
  var pager = document.querySelector(".pager");
  if (pager && page) {
    var prev = null, next = null, nextLabel = "Next";
    SERIES.forEach(function (s) {
      var i = s.indexOf(page);
      if (i < 0) return;
      if (i > 0) prev = byId(s[i - 1]);
      if (i < s.length - 1) next = byId(s[i + 1]);
    });
    if (!next && FURTHER[page]) { next = byId(FURTHER[page]); nextLabel = "Going further"; }

    var card = function (m, label, cls) {
      var a = anchor(m.file, cls);
      a.appendChild(el("span", "lab", label));
      a.appendChild(el("span", "t", m.title));
      return a;
    };
    pager.appendChild(prev ? card(prev, "Previous", "prev") : card(HOME, "Back to", "prev"));
    pager.appendChild(next ? card(next, nextLabel, "next") : card(HOME, "Back to", "next"));
  }
})();
