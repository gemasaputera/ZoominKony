define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_i4843c8f4ee2469a8d46e3a9c72f3a6b: function AS_FlexContainer_i4843c8f4ee2469a8d46e3a9c72f3a6b(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("FormHome");
        ntf.navigate();
    },
    AS_FlexContainer_a2cce62846024a43888a26722d0c1605: function AS_FlexContainer_a2cce62846024a43888a26722d0c1605(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("FormHistory");
        ntf.navigate();
    },
    AS_FlexContainer_g96af8bd06c2488d9c8a40c364385e31: function AS_FlexContainer_g96af8bd06c2488d9c8a40c364385e31(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("FormLeaderboard");
        ntf.navigate();
    },
    AS_FlexContainer_g5bbcf540d674721b5fa059ffede7172: function AS_FlexContainer_g5bbcf540d674721b5fa059ffede7172(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("FormHelp");
        ntf.navigate();
    },
    AS_FlexContainer_cb6c67d566134a65ab5da45c8288abca: function AS_FlexContainer_cb6c67d566134a65ab5da45c8288abca(eventobject) {
        var self = this;

        function MOVE_ACTION____gd38a913ac4542a9881306749c7706fb_Callback() {}
        self.view.FlexConAllQuestMaster["isVisible"] = true;
        self.view.FlexConAllQuestMaster.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0.005,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.35
        }, {
            "animationEnd": MOVE_ACTION____gd38a913ac4542a9881306749c7706fb_Callback
        });
    },
    AS_FlexContainer_f7ed2a4f711b457ca41d764a877ff57d: function AS_FlexContainer_f7ed2a4f711b457ca41d764a877ff57d(eventobject) {
        var self = this;

        function MOVE_ACTION____b3efd78205b8455fb53dde8d2424015b_Callback() {}
        self.view.FlexConAllQuestMaster["isVisible"] = false;
        self.view.FlexConBgHome.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____b3efd78205b8455fb53dde8d2424015b_Callback
        });
    }
});