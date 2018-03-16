var neSvtFaq = {

    pageLoad: function()
    {
        
        $('.collapse.show').collapse('hide');

        switch(document.location.hash)
        {
            case "#autocross101":
                neSvtFaq.showAutocross101();
                break;
            case "#tech":
                neSvtFaq.showTech();
                break;
            case "#location":
                neSvtFaq.showLocation();
                break;
            case "#join":
                neSvtFaq.showMembership();
                break;
            case "#signup":
                neSvtFaq.showSignup();
                break;
            default: 
                neSvtFaq.showAutocross101();
        }
    },

    registerHashChange: function()
    {
        $(window).on('hashchange', function() {
            neSvtFaq.pageLoad();
        });
    },

    showAutocross101: function()
    {
        $('#collapseAutocross101').collapse("show");
    },

    showTech: function()
    {
        $('#collapseTech').collapse("show");
    },

    showSignup: function()
    {
        $('#collapseJoin').collapse("show");
    },

    showMembership: function()
    {
        $('#collapseMembership').collapse("show");
    },

    showLocation: function()
    {
        $('#collapseLocation').collapse("show");
    }


}



var neSvt = {

    dismissHelmetNotification: function()
    {
        window.localStorage.setItem("helmetDismissed",true);
    },

    setHelmetWindowState: function()
    {
        if(window.localStorage.getItem("helmetDismissed") == null || window.localStorage.getItem("helmetDismissed") == false ) 
        {
            $('#helmetAlert').show();
        }
        else
        {
            $('#helmetAlert').hide();
        }
    },

    resetHelmetNotification: function()
    {
        window.localStorage.clear("helmetDismissed");
    },

    handleErrorState: function()
    {
        var currentQuery = window.location.search;

        if(currentQuery.indexOf("error") >= 0 )
        {
            $('.alert-danger.contact-result').show();
        }   

        if(currentQuery.indexOf("success") >= 0 )
        {
            $('.alert-success.contact-result').show();
        }
    }

}