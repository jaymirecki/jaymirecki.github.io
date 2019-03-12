school = false;
work = false;
projects = false;
skills = false;
activites = false;

$(document).ready(function() {
    $("#schoolHeader").click(function() {
        school = !school;
        if (school)
            $("#school").html("<ul>\
                                    <li>Algorithms (<em>currently enrolled</em>)</li>\
                                    <li>Introduction to Machine Learning (<em>currently enrolled</em>)</li>\
                                    <li>Web Programming (<em>currently enrolled</em>)</li>\
                                    <li>Programming Languages</li>\
                                    <li>Computer System Security</li>\
                                    <li>Machine Structure and Assembly Language Programming</li>\
                                    <li>Data Structures</li>\
                               </ul>");
        else
            $("#school").html("");
    });
    $("#workHeader").click(function() {
        work = !work;
        if (work)
            $("#work").html("<ul>\
                                 <li><em>Teaching Assistant</em>, Tufts Computer Science Department</li>\
                                 <li><em>Operations and Quality Assurance Intern</em>, <a href='https://www.trustedpatientcoach.com/'>Health Helm</a></li>\
                                 <li><em>Sales Coordinator</em>, East Lyme Parks and Recreation Department</li>\
                             </ul>");
        else
            $("#work").html("");
    });
    $("#projectsHeader").click(function() {
        projects = !projects;
        if (projects)
            $("#projects").html("<ul>\
                                     <li><em><a href='https://github.com/jaymirecki/gsws'>GSWS</a></em>: Virtual world simulator, programmed in C#</li>\
                                     <li><em><a href='https://github.com/jaymirecki/grid'>Grid</a></em>: A* search algorithm, implemented in C++</li>\
                                     <li><em><a href='https://jaymirecki.github.io/projects/roguerocket/'>Rogue Rocket Site</a></em>: Example news aggregation website</li>\
                                 </ul>");
        else
            $("#projects").html("");
    });
    $("#skillsHeader").click(function() {
        projects = !projects;
        if (projects)
            $("#skills").html("<ul>\
                                   <li>Languages: C++, C, C#, HTML, CSS, PHP, LUA, Python, JavaScript</li>\
                                   <li>Software: JIRA, Microsoft Visual Studio, Linux, Git</li>\
                                   <li>Tools: Numpy, SciKit</il>\
                               </ul>");
        else
            $("#skills").html("");
    });
    $("#activitesHeader").click(function() {
        projects = !projects;
        if (projects)
            $("#activites").html("<ul>\
                                      <li><em>Counselor</em>, Camp Rising Sun</li>\
                                      <li><em>Founder</em>, Ride for Rising Sun</li>\
                                  </ul>");
        else
            $("#activites").html("");
    });
});