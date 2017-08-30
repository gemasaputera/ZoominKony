define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_b726a6160fac4e8795554a3afe12ace6: function AS_FlexContainer_b726a6160fac4e8795554a3afe12ace6(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("FormHome");
        ntf.navigate();
    },
    AS_FlexContainer_ad50440973b042d5a1c6bdd9034ebb05: function AS_FlexContainer_ad50440973b042d5a1c6bdd9034ebb05(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("FormHistory");
        ntf.navigate();
    },
    AS_FlexContainer_ic46fb2a927547a08aee485c6b407575: function AS_FlexContainer_ic46fb2a927547a08aee485c6b407575(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("FormLeaderboard");
        ntf.navigate();
    },
    AS_FlexContainer_bdf23500993041bd8fd60833dc19c6bd: function AS_FlexContainer_bdf23500993041bd8fd60833dc19c6bd(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("FormHelp");
        ntf.navigate();
    },
    AS_FlexContainer_j60d50a4ef874c94abefae84a02120a5: function AS_FlexContainer_j60d50a4ef874c94abefae84a02120a5(eventobject) {
        var self = this;
        self.view.FlexConHistoryMainComplete["isVisible"] = false;
        self.view.CopyFlexConLine0edd170c141c149["isVisible"] = false;
        self.view.FlexConHistoryMain["isVisible"] = true;
        self.view.FlexConLine001["isVisible"] = true;
    },
    AS_FlexContainer_f1fb6658b050465787f02b8e14c7cd86: function AS_FlexContainer_f1fb6658b050465787f02b8e14c7cd86(eventobject) {
        var self = this;
        self.view.FlexConLine001["isVisible"] = false;
        self.view.FlexConHistoryMain["isVisible"] = false;
        self.view.FlexConHistoryMainComplete["isVisible"] = true;
        self.view.CopyFlexConLine0edd170c141c149["isVisible"] = true;
    }
});