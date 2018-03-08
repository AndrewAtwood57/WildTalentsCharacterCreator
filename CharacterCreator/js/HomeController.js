angular.module('WTCharacterCreator').controller('HomeController', function ($scope, DataService) {

    //Making sure the service calls work
    var CharName = "Steve";

    console.log("Getting " + CharName + "'s data from the data service...");
    DataService.GetCharacter(CharName).then(function (data) {
        $scope.newChar = data;
        console.log("Recieved Data:");
        console.log(data);
    });
    ////

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false,
        ShowFloatingPanel: true
    };

    $scope.Char = {
        Name: 'Thomas Brage',
        Description: 'A Hero of some sorts.',
        BaseWill: 12,
        CurrentWill: 12,
        StartingXP: 75,
        EarnedXP: 500,
        SpentXP: 20,
        SpentXP_Characteristics: 0,
        SessionXP: 5,
        Loyalties: [
            { Name: 'Justice', Value: 6 },
            { Name: 'Super Justice', Value: 6}
        ],
        LoyaltyTotal: 12,
        Passions: [
            { Name: 'Fancy Cheeses', Value: 5 },
            { Name: 'Capes', Value: 3 }
        ],
        PassionTotal: 8,
        Body: {
            RegularDice: 2,
            HardDice: 1,
            WiggleDice: 0,
            RegHyperDice: 0,
            HardHyperDice: 0,
            WiggleHyperDice: 0,
            SpentXP: 15
        },
        Coordination: {
            RegularDice: 0,
            HardDice: 0,
            WiggleDice: 1,
            RegHyperDice: 3,
            HardHyperDice: 0,
            WiggleHyperDice: 0,
            SpentXP: 15
        },
        Sense: {
            RegularDice: 0,
            HardDice: 0,
            WiggleDice: 1,
            RegHyperDice: 3,
            HardHyperDice: 0,
            WiggleHyperDice: 0,
            SpentXP: 15
        },
        Mind: {
            RegularDice: 0,
            HardDice: 0,
            WiggleDice: 1,
            RegHyperDice: 3,
            HardHyperDice: 0,
            WiggleHyperDice: 0,
            SpentXP: 15
        },
        Charm: {
            RegularDice: 0,
            HardDice: 0,
            WiggleDice: 1,
            RegHyperDice: 3,
            HardHyperDice: 0,
            WiggleHyperDice: 0,
            SpentXP: 15
        },
        Command: {
            RegularDice: 0,
            HardDice: 0,
            WiggleDice: 1,
            RegHyperDice: 3,
            HardHyperDice: 0,
            WiggleHyperDice: 0,
            SpentXP: 15
        }
    };

    $scope.UpdateLoyalties = function () {
        var total = 0;
        $scope.Char.Loyalties.forEach(function (item) {
            total += item.Value;
        });

        $scope.Char.LoyaltyTotal = total;
    };

    $scope.UpdatePassions = function () {
        var total = 0;
        $scope.Char.Passions.forEach(function (item) {
            total += item.Value;
        });

        $scope.Char.PassionTotal = total;
    };

    $scope.GainWillpower = function(value){
        $scope.Char.CurrentWill += value;
    };

    $scope.LoseWillpower = function (value) {
        $scope.Char.CurrentWill -= value;
    };

    $scope.NewLoyalty = function () {
        $scope.Char.Loyalties.push({ Name: '', Value: 0 });
    };

    $scope.DeleteLoyalty = function (loyalty) {
        $scope.Char.Loyalties = _.without($scope.Char.Loyalties, loyalty);
        $scope.UpdateLoyalties();
    };

    $scope.NewPassion = function () {
        $scope.Char.Passions.push({ Name: '', Value: 0 });
    };

    $scope.DeletePassion = function (passion) {
        $scope.Char.Passions = _.without($scope.Char.Passions, passion);
        $scope.UpdatePassions();
    };

    $scope.UpdateBodyXP = function () {
        var total = 0;
        total += $scope.Char.Body.RegularDice * 5;
        total += $scope.Char.Body.RegHyperDice * 4;
        total += $scope.Char.Body.HardDice * 10;
        total += $scope.Char.Body.HardHyperDice * 8;
        total += $scope.Char.Body.WiggleDice * 20;
        total += $scope.Char.Body.WiggleHyperDice * 16;

        $scope.UpdateTotalSpentXP();

        $scope.Char.Body.SpentXP = total;
    };

    $scope.UpdateCoordinationXP = function () {
        var total = 0;
        total += $scope.Char.Coordination.RegularDice * 5;
        total += $scope.Char.Coordination.RegHyperDice * 4;
        total += $scope.Char.Coordination.HardDice * 10;
        total += $scope.Char.Coordination.HardHyperDice * 8;
        total += $scope.Char.Coordination.WiggleDice * 20;
        total += $scope.Char.Coordination.WiggleHyperDice * 16;

        $scope.UpdateTotalSpentXP();

        $scope.Char.Coordination.SpentXP = total;
    };

    $scope.UpdateSenseXP = function () {
        var total = 0;
        total += $scope.Char.Sense.RegularDice * 5;
        total += $scope.Char.Sense.RegHyperDice * 4;
        total += $scope.Char.Sense.HardDice * 10;
        total += $scope.Char.Sense.HardHyperDice * 8;
        total += $scope.Char.Sense.WiggleDice * 20;
        total += $scope.Char.Sense.WiggleHyperDice * 16;

        $scope.UpdateTotalSpentXP();

        $scope.Char.Sense.SpentXP = total;
    };

    $scope.UpdateMindXP = function () {
        var total = 0;
        total += $scope.Char.Mind.RegularDice * 5;
        total += $scope.Char.Mind.RegHyperDice * 4;
        total += $scope.Char.Mind.HardDice * 10;
        total += $scope.Char.Mind.HardHyperDice * 8;
        total += $scope.Char.Mind.WiggleDice * 20;
        total += $scope.Char.Mind.WiggleHyperDice * 16;

        $scope.UpdateTotalSpentXP();

        $scope.Char.Mind.SpentXP = total;
    };

    $scope.UpdateCharmXP = function () {
        var total = 0;
        total += $scope.Char.Charm.RegularDice * 5;
        total += $scope.Char.Charm.RegHyperDice * 4;
        total += $scope.Char.Charm.HardDice * 10;
        total += $scope.Char.Charm.HardHyperDice * 8;
        total += $scope.Char.Charm.WiggleDice * 20;
        total += $scope.Char.Charm.WiggleHyperDice * 16;

        $scope.UpdateTotalSpentXP();

        $scope.Char.Charm.SpentXP = total;
    };

    $scope.UpdateCommandXP = function () {
        var total = 0;
        total += $scope.Char.Command.RegularDice * 5;
        total += $scope.Char.Command.RegHyperDice * 4;
        total += $scope.Char.Command.HardDice * 10;
        total += $scope.Char.Command.HardHyperDice * 8;
        total += $scope.Char.Command.WiggleDice * 20;
        total += $scope.Char.Command.WiggleHyperDice * 16;

        $scope.UpdateTotalSpentXP();

        $scope.Char.Command.SpentXP = total;
    };

    $scope.UpdateTotalSpentXP = function () {
        $scope.Char.SpentXP = $scope.Char.Body.SpentXP;
        $scope.Char.SpentXP += $scope.Char.Coordination.SpentXP;
        $scope.Char.SpentXP += $scope.Char.Sense.SpentXP;
        $scope.Char.SpentXP += $scope.Char.Mind.SpentXP;
        $scope.Char.SpentXP += $scope.Char.Charm.SpentXP;
        $scope.Char.SpentXP += $scope.Char.Command.SpentXP;

        $scope.Char.SpentXP_Characteristics = $scope.Char.SpentXP;
    };

    $scope.UpdateBodyXP();
    $scope.UpdateCoordinationXP();
    $scope.UpdateSenseXP();
    $scope.UpdateMindXP();
    $scope.UpdateCharmXP();
    $scope.UpdateCommandXP();
    $scope.UpdateTotalSpentXP();

});