define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_b85b5c43077b4b3cab43dfe826252c9b: function AS_FlexContainer_b85b5c43077b4b3cab43dfe826252c9b(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("FormHome");
        ntf.navigate();
    },
    AS_FlexContainer_e8061fe9310241aea431e864b2d8c7e0: function AS_FlexContainer_e8061fe9310241aea431e864b2d8c7e0(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("FormHistory");
        ntf.navigate();
    },
    AS_FlexContainer_jd66b53bf0aa4d9dabe4b37aee72f06c: function AS_FlexContainer_jd66b53bf0aa4d9dabe4b37aee72f06c(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("FormLeaderboard");
        ntf.navigate();
    },
    AS_FlexContainer_df889814ce45403c800b2dd1a2821af0: function AS_FlexContainer_df889814ce45403c800b2dd1a2821af0(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("FormHelp");
        ntf.navigate();
    },
    AS_FlexContainer_hcabcb10d7874187be8ddf0ad5a625e4: function AS_FlexContainer_hcabcb10d7874187be8ddf0ad5a625e4(eventobject) {
        var self = this;
        self.view.FlexConLine002["isVisible"] = true;
        self.view.FlexContentMain["isVisible"] = true;
        self.view.CopyFlexContentMain0bf6e29a12c924e["isVisible"] = false;
        self.view.CopyFlexConLine0a3bfbbe8ca3c43["isVisible"] = false;
    },
    AS_FlexContainer_ca3441d1fb6f4dc2b858b53ef46c7f6b: function AS_FlexContainer_ca3441d1fb6f4dc2b858b53ef46c7f6b(eventobject) {
        var self = this;
        self.view.FlexContentMain["isVisible"] = false;
        self.view.FlexConLine002["isVisible"] = false;
        self.view.CopyFlexContentMain0bf6e29a12c924e["isVisible"] = true;
        self.view.CopyFlexConLine0a3bfbbe8ca3c43["isVisible"] = true;
    }
});