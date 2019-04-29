school = false;
work = false;
projects = false;
skills = false;
activites = false;

$(document).ready(function() {
    $("#schoolHeader").click(function() {
        school = !school;
        if (school)
            $("#school").html(
                   "<ul>\
                        <li>Tufts University, Class of 2020</li>\
                        <li>Computer Science <ul>\
                            <li>Algorithms (<em>currently enrolled</em>)</li>\
                            <li>Introduction to Machine Learning (<em>currently enrolled</em>)</li>\
                            <li>Web Programming (<em>currently enrolled</em>)</li>\
                            <li>Programming Languages</li>\
                            <li>Computer System Security</li>\
                            <li>Machine Structure and Assembly Language Programming</li>\
                            <li>Data Structures</li></ul></li>\
                        <li>Biology <ul>\
                            <li>Principles of Conservation Biology</li>\
                            <li>Intro Research</li>\
                            <li>Cell Biology</li>\
                            <li>Experiments in Cell Biology</li>\
                            <li>General Physiology I</li>\
                            <li>General Genetics</li>\
                            <li>Organisms and Populations</li>\
                            <li>Cells and Organisms</li>\
                    </ul>");
        else
            $("#school").html("");
    });
    $("#workHeader").click(function() {
        work = !work;
        if (work)
            $("#work").html("<ul>\
                                 <li><em>Teaching Assistant</em><br>\
                                     <a href='https://engineering.tufts.edu/cs/'>Tufts Computer Science Department</a><br>\
                                     September 2018-Present</li>\
                                 <li><em>Operations and Quality Assurance Intern</em><br>\
                                     <a href='https://www.trustedpatientcoach.com/'>Health Helm</a><br>\
                                     May 2018-August 2018</li>\
                                 <li><em>Sales Coordinator</em><br>\
                                     <a href='https://eltownhall.com/government/departments/parks-recreation/'>East Lyme Parks and Recreation Department</a><br>\
                                     May 2015-August 2017</li>\
                             </ul>");
        else
            $("#work").html("");
    });
    $("#projectsHeader").click(function() {
        projects = !projects;
        if (projects)
            $("#projects").html("<ul>\
                                     <li><em><a href='https://noodle-news.herokuapp.com'>Noodle News</a></em>: News aggregator built for Tufts Web Programming course</li>\
                                     <li><em><a href='https://github.com/jaymirecki/gsws'>GSWS</a></em>: Virtual world simulator, programmed in C#</li>\
                                     <li><em><a href='https://github.com/jaymirecki/grid'>Grid</a></em>: A* search algorithm, implemented in C++</li>\
                                     <li><em><a href='/projects/roguerocket/'>Rogue Rocket Site</a></em>: Example news aggregation website</li>\
                                 </ul>");
        else
            $("#projects").html("");
    });
    $("#skillsHeader").click(function() {
        projects = !projects;
        if (projects)
            $("#skills").html("<ul>\
                                   <li>Languages: C++, C, C#, HTML, CSS, PHP, LUA, Python, JavaScript</li>\
                                   <li>Software: JIRA, Microsoft Visual Studio, Linux, Git, Heroku</li>\
                                   <li>Tools: Numpy, SciKit, JQuery, NodeJS, .NET Framework</il>\
                               </ul>");
        else
            $("#skills").html("");
    });
    $("#activitesHeader").click(function() {
        projects = !projects;
        if (projects)
            $("#activites").html("<ul>\
                                      <li><em>Counselor</em>, <a href='http://www.camprisingsun.com/'>Camp Rising Sun</a></li>\
                                      <li><em>Founder</em>, Ride for Rising Sun</li>\
                                  </ul>");
        else
            $("#activites").html("");
    });
});