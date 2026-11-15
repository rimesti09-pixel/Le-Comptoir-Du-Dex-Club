// =============================================================
// cards.js — fonctions de DONNÉES du catalogue
// Règles : aucune ligne avec `document` dans ce fichier.
//          On ne modifie jamais le tableau reçu : on renvoie un NOUVEAU tableau ou une valeur.
// Testez chaque fonction dans la console (voir README) ou avec tests/tests.html.
// =============================================================

// -------------------------------------------------------------
// PALIER 1
// -------------------------------------------------------------

/**
 * Renvoie les cartes dont le nom contient `term`.
 * - sans tenir compte des majuscules : "EMBER" trouve "Emberkit"
 * - sans tenir compte des espaces autour : "  kit " trouve "Emberkit" et "Sparkit"
 * - si `term` est vide, renvoie toutes les cartes
 * Exemple : searchCards(cards, "kit") → [Emberkit, Sparkit]
 */
export function searchCards(cards, term) {
  // TODO 1. Nettoyez le terme : trim() puis toLowerCase()
   const cleanTerm=term.toLowerCase().trim()
  // TODO 2. Si le terme est vide, renvoyez une copie de cards
  
  if (cleanTerm===""){

    return[...cards];
  }

  // TODO 3. Sinon, renvoyez cards.filter(...) : le nom en minuscules contient-il le terme ?
  return cards.filter(card => card.name.toLowerCase().includes("kit"));
  
}

/**
 * Renvoie les cartes du type demandé, ou toutes si `type` vaut "Tous".
 * Exemple : filterByType(cards, "Eau") → [Tidalix, Reefling, Aquaphin]
 */
export function filterByType(cards, type) {
  // TODO
  if (type === "Tous"){
    return cards
  }else{
    return cards.filter(card=>card.type===type)
  }
}

/**
 * Combine la recherche et le type.
 * filters = { term: "kit", type: "Feu" }
 * Exemple : getVisibleCards(cards, { term: "kit", type: "Feu" }) → [Emberkit]
 */
export function getVisibleCards(cards, filters) {
  // TODO : appelez filterByType, puis searchCards sur le résultat
  const filteredByType = filterByType(cards,filters.type);
  const searchedCards = searchCards(filteredByType, filters.type)

  return searchedCards;
}
/**
 * Compte les cartes de chaque type.
 * Exemple : countByType(cards) → { Feu: 3, Eau: 3, Plante: 3, Électrik: 3 }
 */
export function countByType(cards) {
  // TODO 1. Créez un objet vide : 
  const counts = {};

  // TODO 2. Pour chaque carte : si counts[carte.type] n'existe pas, mettez 0, puis ajoutez 1
  for (let i=0 ; i<cards.length ;i++){
    const card = cards [i];
    if(counts[card.type]=== undefined){
      counts[card.type]= 0;
    }
      counts[card.type]++;
  
  // TODO 3. Renvoyez counts
}
return counts;
}

// -------------------------------------------------------------
// PALIER 3 (bonus)
// -------------------------------------------------------------

/**
 * Trie une COPIE des cartes.
 * sort vaut "numero" (id croissant), "prix-asc" ou "prix-desc".
 */
export function sortCards(cards, sort) {
  // TODO : 
  if(sort === "numero"){
 return [...cards].sort((a, b) => a.id - b.id);
  }
}

/**
 * Statistiques sur une liste de cartes.
 * Renvoie { valeurStock, plusChere, legendaires, ruptures }
 *   valeurStock : somme de prix × stock (en DH)
 *   plusChere   : la carte (l'objet) au prix le plus haut, ou null si la liste est vide
 *   legendaires : nombre de cartes de rareté "Légendaire"
 *   ruptures    : nombre de cartes dont le stock vaut 0
 */
export function getStats(cards) {
  // TODO : reduce pour la valeur, une boucle ou reduce pour la plus chère, filter(...).length pour compter
  return { valeurStock: 0, plusChere: null, legendaires: 0, ruptures: 0 };
}

/**
 * Vérifie les champs du formulaire « Proposer une carte ».
 * data = { nom: "Glacio", prix: "20", stock: "4" }   (les valeurs arrivent du formulaire, en texte)
 * Renvoie un objet avec un message par champ faux, ou {} si tout est juste :
 *   nom   vide (après trim)                    → "Le nom est obligatoire"
 *   prix  pas un nombre entier plus grand que 0 → "Le prix doit être un nombre plus grand que 0"
 *   stock pas un nombre entier de 0 ou plus     → "Le stock doit être un nombre entier (0 ou plus)"
 */
export function validateCardForm(data) {
  // TODO
  return {};
}

/**
 * Crée la nouvelle carte et renvoie un NOUVEAU tableau qui la contient.
 * id = le plus grand id existant + 1 ; prix et stock convertis en nombres ;
 * image = "images/nouvelle.svg" ; description = "Carte proposée par un membre du club."
 */
export function addCard(cards, data) {
  // TODO
  return cards;
}
