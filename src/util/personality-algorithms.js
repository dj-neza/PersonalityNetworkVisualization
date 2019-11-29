export const personalityGroupColors = {
    Analysts: "#96637d",
    Diplomats: "#72c9a6",
    Sentinels: "#5fbfd8",
    Explorers: "#dfc10c"
};

export const colorBasedOnGroup = group => {
  switch (group) {
    case "Analysts":
      return personalityGroupColors.Analysts;
    case "Diplomats":
        return personalityGroupColors.Diplomats;
    case "Sentinels":
        return personalityGroupColors.Sentinels;
    case "Explorers":
        return personalityGroupColors.Explorers;
    default:
      return "grey";
  }
};



export const sixteenPersonalitiesTaxonomy = {
  Analysts: [
    { abbreviation: "INTJ", nickname: "Architect" },
    { abbreviation: "INTP", nickname: "Logician" },
    { abbreviation: "ENTJ", nickname: "Commander" },
    { abbreviation: "ENTP", nickname: "Debater" }
  ],
  Diplomats: [
    { abbreviation: "INFJ", nickname: "Advocate" },
    { abbreviation: "INFP", nickname: "Mediator" },
    { abbreviation: "ENFJ", nickname: "Protagonist" },
    { abbreviation: "ENFP", nickname: "Campaigner" }
  ],
  Sentinels: [
    { abbreviation: "ISTJ", nickname: "Logistician" },
    { abbreviation: "ISFJ", nickname: "Defender" },
    { abbreviation: "ESTJ", nickname: "Executive" },
    { abbreviation: "ESFJ", nickname: "Consul" }
  ],
  Explorers: [
    { abbreviation: "ISTP", nickname: "Virtuoso" },
    { abbreviation: "ISFP", nickname: "Adventurer" },
    { abbreviation: "ESTP", nickname: "Entrepreneur" },
    { abbreviation: "ESFP", nickname: "Entertainer" }
  ]
};

export const sixteenPersonalityTypes = () => {
  const personalities = [];
  Object.values(sixteenPersonalitiesTaxonomy).forEach(g =>
    g.forEach(e => personalities.push(e))
  );
  return personalities;
};

export const checkAbbreviationForAnalyst = (abbreviation) => (/.(N)(T)./g).test(abbreviation.toUpperCase());
export const checkAbbreviationForDiplomat = (abbreviation) => (/.(N)(F)./g).test(abbreviation.toUpperCase());
export const checkAbbreviationForSentinel = (abbreviation) => (/.(S).(J)/g).test(abbreviation.toUpperCase());
export const checkAbbreviationForExplorer = (abbreviation) => (/.(S).(P)/g).test(abbreviation.toUpperCase());
