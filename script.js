$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
    });
    // toogle menu script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });
});

// typed animation script
var typed = new Typed(".typing",{
    strings:["Poultry.", "Pigs.", "Piglets.", "and Supply of all animal feeds.", "******."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing2",{
    strings:["Programmer.", "Full Stack Developer.", "Software Developer.", "Designer.", "Freelancer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

function chickfeedFunction(){

    const cumulfeeds =[0,13,30,51,74,101,132,167,206,250,298,352,410,474,542,617,698,785,878,976,1081,1192,1309,1432,1562,1696,1837,1985,2137,2295,2458,2627,2801,2981,3163,3352,3545,3742,3943,4148,4357,4570,4786,5006,5228,5453,5680,5911,6144,6379,6616,6855,7095,7337,7580,7825,8070,8315,8560,8805,9050]

    var day1 = parseInt(document.getElementById('day1').value);
    var daylast = parseInt(document.getElementById('daylast').value);
    var chicks = parseInt(document.getElementById('chicks').value);

    if(day1 == 1){
        onechick = cumulfeeds[daylast]/1000
    }else{
        onechick = (cumulfeeds[daylast]-cumulfeeds[day1-1])/1000
    }


   

    var onechick 
    var totfeeds = (chicks * onechick);
    

    document. getElementById("results").innerHTML = ("For " + chicks+ " Chicks total feed will be " + totfeeds + " Kgs each chick consuming " + onechick + " Kgs" + "<button class=\"btn btn-primary\"> Calculate Concentrate</button>")
}

function broilerfeedFunction(){
    var ageweek= parseInt(document.getElementById('ageweek').value);
    var nochicks= parseInt(document.getElementById('Nochicks').value);
    var nodays= parseInt(document.getElementById('Nodays').value);

    var typeoffeed
    var cumulfeeds
    var onechickb
    
    if ((ageweek >= 1 && ageweek <= 8) && (nodays <= 56)) {
        onechickb = 0.045;
        typeoffeed = "Chick Mash/Starter Crumbs";
        cumulfeeds = onechickb * nochicks * nodays;
        document.getElementById("resultsb").innerHTML = ("For "+ nodays+" days the total feeds for " + nochicks + " chicks is " + cumulfeeds + " Kgs. Each chick consuming " + onechickb + " Kgs."+ " Feed type= "+ typeoffeed);
    } else if ((ageweek >= 9 && ageweek <= 20) && (nodays <= 84)) {
        onechickb = 0.085;
        typeoffeed = "Grower Mash";
        cumulfeeds = onechickb * nochicks * nodays;
        document.getElementById("resultsb").innerHTML = ("For "+ nodays+" days the total feeds for " + nochicks + " chicks is " + cumulfeeds + " Kgs. Each chick consuming " + onechickb + " Kgs."+ " Feed type= "+ typeoffeed);
    } else if ((ageweek > 20 && ageweek <= 76) && (nodays <= 392)) {
        onechickb = 0.135;
        typeoffeed = "Layers Mash";
        cumulfeeds = onechickb * nochicks * nodays;
        document.getElementById("resultsb").innerHTML = ("For "+ nodays+" days the total feeds for " + nochicks + " chicks is " + cumulfeeds + " Kgs. Each chick consuming " + onechickb + " Kgs."+ " Feed type= "+ typeoffeed);
    } else {
        let alertMessage = "ALERT!!!!! ";
        if ((ageweek >= 1 && ageweek <= 8)&& (nodays > 56)) {
            alertMessage += "For CHicks aged 0-8 Weeks, this rate only applies for 56 days. Change the No. of days to stipulated range for best results.";
        } else if ((ageweek >= 9 && ageweek <= 20) && (nodays > 84)) {
            alertMessage += "For Chicks aged 9-20 Weeks, this rate only applies for 84 days. Change the No. of days to stipulated range for best results.";
        } else if ((ageweek > 20 && ageweek <= 76) && (nodays > 392)){
            alertMessage += "For Chicks aged 21-76 Weeks, the recommended number of days should not be more than 392 days for best results.";
        } else {
            alertMessage += "Invalid ageweek value. Please ensure the age in weeks is between 1 and 76.";
        }
        document.getElementById("resultsb").innerHTML = alertMessage;
    }
    }

    function lactatorfeedFunction(){
        var weekstart= parseInt(document.getElementById('pday1').value);
        var weekend= parseInt(document.getElementById('lday1').value);
        var lactatingpigs= parseInt(document.getElementById('lactp').value);
        var piglets= parseInt(document.getElementById('piglets').value);

        var lactatorpig
        var lactatorpiglet
        var subtotalsp
       
        if(weekend>8){
            document.getElementById('presults').innerHTML=("ALERT!!!! For this section youre only allowed to calculate uppto 8 weeks only ")
        }else if(weekend==1){
            lactatorpig=weekend*3.5   
            lactatorpiglet=weekend*0.5
            subtotalsp= lactatorpig+lactatorpiglet  
            document.getElementById('presults').innerHTML=("Feed for " + lactatingpigs+ " pigs, = " +lactatorpig+" Kgs and "+ piglets+ " piglets, = "+lactatorpiglet +" Kgs. The Total feed required at this stage(pigs & piglets) = "+subtotalsp +" Kgs.  EXPECTED ANIMAL WEIGHT = 9-12 Kgs.")     
        }else{
             lactatorpig= ((weekend*3.5)-(weekstart*3.5))+3.5
             lactatorpiglet=((weekend*0.5)-(weekstart*0.5))+0.5
             subtotalsp= lactatorpig+lactatorpiglet
             document.getElementById('presults').innerHTML=("Feed for " + lactatingpigs+ " pigs, = " +lactatorpig+" Kgs and "+ piglets+ " piglets, = "+lactatorpiglet +" Kgs. The Total feed required at this stage(pigs & piglets) = "+subtotalsp +" Kgs.  EXPECTED ANIMAL WEIGHT = 9-12 Kgs.")
        }

        
    }

    function pigletsFunction(){
        var weekbeg= parseInt(document.getElementById('pgday1').value);
        var weeklast= parseInt(document.getElementById('plday1').value);
        var noplets= parseInt(document.getElementById('piglets1').value);

        const pletrate=[0,0.7,1.4,2.4,3.4,5.4,7.4,9.4,11.4,13.9,16.4,19.4,22.4,25.4,28.4,31.4,34.4,37.9,41.4,44.9,48.4]

        var pletsfeed
        var allfeed

        if(weekbeg<9){
            document.getElementById('pletresults').innerHTML=("ALERT!!  For best results start calculating from 9 weeks") 
        }
        else if((weekbeg == 9)&&(weeklast==9) ){
            pletsfeed = pletrate[1]
            allfeed=noplets*pletsfeed
            document.getElementById('pletresults').innerHTML=("Feed for "+ noplets+ " Piglets = "+allfeed+" Kgs")
        }else{
            pletsfeed = pletrate[(weeklast-8)]- pletrate[(weekbeg-8)]
            allfeed=noplets*pletsfeed
            document.getElementById('pletresults').innerHTML=("Feed for "+ noplets+ " Piglets = "+allfeed+" Kgs")
        }


        if(weekbeg>8 && weeklast<=12){
            document.getElementById('expweight').innerHTML=("Feed type => Pig Starter. Expected WEIGHT = 16-20 Kgs")
        }else if(weekbeg>12 && weeklast<=16){
            document.getElementById('expweight').innerHTML=("Feed type => Pig Grower. Expected WEIGHT = 30-40 Kgs")
        }else if(weekbeg>16 && weeklast<=24){
            document.getElementById('expweight').innerHTML=("Feed type => S/Weaner. Expected WEIGHT = 51-85 Kgs")
        }else if(weekbeg>24 && weeklast<=28){
            document.getElementById('expweight').innerHTML=("Feed type => Finisher. Expected WEIGHT = 86-105 Kgs")
        }
        else{
            document.getElementById('expweight').innerHTML=("The range in weeks you've provided in weeks has a mixture in type of feed and expected weight per animal. Not to worry the feed calculations are still correct")
        }
    }

    // function kienyejifeedFunction() {
    //     // Get input values from the form
    //     const startDay = parseInt(document.getElementById("dayage").value);
    //     const endDay = parseInt(document.getElementById("dayagel").value);
    //     const numChicks = parseInt(document.getElementById("Nokienyeji").value);
    //     const resultsDisplay = document.getElementById("resultsk");
    
    //     // Feed data in grams per chick per day (based on the table provided)
    //     const feedData = [
    //         18, // Week 1 (day 0-7)
    //         23, // Week 2
    //         28, // Week 3
    //         33, // Week 4
    //         38, // Week 5
    //         43, // Week 6 (Transition to growers feed)
    //         49, // Week 7
    //         51, // Week 8
    //         68, // Week 9 (Transition to kienyeji mash)
    //         73, // Week 10
    //         78, // Week 11
    //         88, // Week 12
    //         97, // Week 13
    //         106, // Week 14 (Supplement with greens)
    //         115, // Week 15
    //         122, // Week 16
    //         128, // Week 17
    //         130  // Week 18
    //     ];
    
    //     // Calculate total feed in grams
    //     let totalFeed = 0;
    //     for (let day = startDay; day <= endDay; day++) {
    //         const week = Math.floor(day / 7); // Convert day to week
    //         if (week < feedData.length) {
    //             totalFeed += feedData[week]; // Add the daily feed amount for the specific week
    //         }
    //     }
    
    //     // Multiply by the number of chicks
    //     totalFeed *= numChicks;
    
    //     // Convert total feed to kilograms
    //     const totalFeedKg = totalFeed / 1000;
    
    //     // Display the result
    //     resultsDisplay.innerText = `Total feed required from day ${startDay} to day ${endDay} for ${numChicks} chicks is ${totalFeed} grams (${totalFeedKg.toFixed(2)} kg).`;
    // }
    
    function kienyejifeedFunction() {
        // Get input values from the form
        const startDay = parseInt(document.getElementById("dayage").value);
        const endDay = parseInt(document.getElementById("dayagel").value);
        const numChicks = parseInt(document.getElementById("Nokienyeji").value);
        const resultsDisplay = document.getElementById("resultsk");
    
        // Feed data for each week
        const feedData = [
            { grams: 18, type: "CHICK STARTER FEED" }, // Week 1
            { grams: 23, type: "CHICK STARTER FEED" }, // Week 2
            { grams: 28, type: "CHICK STARTER FEED" }, // Week 3
            { grams: 33, type: "CHICK STARTER FEED" }, // Week 4
            { grams: 38, type: "CHICK STARTER FEED" }, // Week 5
            { grams: 43, type: "Gradual transition to growers feed" }, // Week 6
            { grams: 49, type: "GROWERS FEED" }, // Week 7
            { grams: 51, type: "GROWERS FEED" }, // Week 8
            { grams: 68, type: "Gradual transition to kienyeji mash" }, // Week 9
            { grams: 73, type: "KIENYEJI FEED" }, // Week 10
            { grams: 78, type: "KIENYEJI FEED" }, // Week 11
            { grams: 88, type: "KIENYEJI FEED" }, // Week 12
            { grams: 97, type: "KIENYEJI FEED" }, // Week 13
            { grams: 106, type: "KIENYEJI FEED (Supplement with greens)" }, // Week 14
            { grams: 115, type: "KIENYEJI FEED" }, // Week 15
            { grams: 122, type: "KIENYEJI FEED" }, // Week 16
            { grams: 128, type: "KIENYEJI FEED" }, // Week 17
            { grams: 130, type: "KIENYEJI FEED" } // Week 18
        ];
    
        // Calculate total feed, average feed per chick per day, and collect feed types used
        let totalFeed = 0;
        const feedTypes = new Set();
        let daysCounted = 0;
    
        for (let day = startDay; day <= endDay; day++) {
            const week = Math.floor(day / 7); // Convert day to week
            if (week < feedData.length) {
                totalFeed += feedData[week].grams; // Add the daily feed amount for the specific week
                feedTypes.add(feedData[week].type); // Collect unique feed types
                daysCounted++;
            }
        }
    
        // Calculate average feed per chick per day
        const averageFeedPerChick = totalFeed / daysCounted;
        const totalFeedChicks = totalFeed * numChicks;
        const totalFeedKg = totalFeedChicks / 1000;
    
        // Display the result with summary information
        resultsDisplay.innerText = `From day ${startDay} to day ${endDay} for ${numChicks} chicks:
    - Average feed per chick per day: ${averageFeedPerChick.toFixed(2)} grams
    - Total feed required: ${totalFeedChicks} grams (${totalFeedKg.toFixed(2)} kg)
    - Feed types used during this period: ${Array.from(feedTypes).join(", ")}
    `;
    }
        