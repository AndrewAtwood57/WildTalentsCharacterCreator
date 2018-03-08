using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CharacterCreator.Models
{
    public class CharacterSheet
    {
        public string Name { get; set; }
        public string Description { get; set; }

        public int BaseWill { get; set; }
        public int CurrentWill { get; set; }

        public int StartingXP { get; set; }
        public int EarnedXP { get; set; }
        public int SpentXP { get; set; }
        public int SpentXP_Characteristics { get; set; }
        public int SpentXP_Skills { get; set; }
        public int SpentXP_Powers { get; set; }
        public int SessionXP { get; set; }

        public List<Motivation> Loyalties { get; set; }
        public int LoyaltyTotal { get; set; }

        public List<Motivation> Passions { get; set; }
        public int PassionTotal { get; set; }

        public Characteristic Body { get; set; }
        public Characteristic Coordination { get; set; }
        public Characteristic Sense { get; set; }
        public Characteristic Mind { get; set; }
        public Characteristic Charm { get; set; }
        public Characteristic Command { get; set; }

    }

    public class Motivation
    {
        public string Name { get; set; }
        public int Value { get; set; }
    }

    public class Characteristic
    {
        public int RegularDice { get; set; }
        public int HardDice { get; set; }
        public int WiggleDice { get; set; }
        public int RegHyperDice { get; set; }
        public int HardHyperDice { get; set; }
        public int WiggleHyperDice { get; set; }
        public int SpentXP { get; set; }
        public List<Addon> Addons { get; set; }
    }

    public class Addon
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public int Value { get; set; }
        public string Description { get; set; }
    }
}