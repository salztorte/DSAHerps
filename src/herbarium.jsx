"use strict";
import { PLANTS_TYPES , POISON_TYPES , MEANS_TYPES , OTHERS_TYPES } from './constans.jsx';

let herps = [
	{
		"Name"       : "Alraune",
		"Source"     : "ZBA Seite 227",
		"Typ"        : PLANTS_TYPES.Nutzpflanze,
		"Using"      : ["eingelete Alraunwurzel", "Alraunen-Sud"],
		"Occurrence" : [],
		"Effect"     : "Brechreiz",
	},
	{
		"Name"   : 'eingelete Alraunwurzel',
		"Source" : "ZBA Seite 227",
		"Typ"    : PLANTS_TYPES.Nutzpflanze,
		"Effect" : "Brechreiz"
	},
	{
		"Name"         : 'Alraunen-Sud',
		"Typ"          : MEANS_TYPES.Alchimistischesmittel,
		"Effect"       : "",
		"Quelle"       : "",
		"Verarbeitung" : []
	}
];

export default herps;
/*{
 "Typ" : "",
 "Wirkung" : "",
 "Source" : "",
 "Using" : []
 }
 */