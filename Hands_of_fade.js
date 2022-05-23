var spell = "hand of fate",
    grimoire = Game.Objects["Wizard tower"].minigame;
function autocastSpell() {
  if (grimoire.magic >= grimoire.magicM)
    grimoire.castSpell(grimoire.spells[spell]);
}
setInterval(autocastSpell, 1000);