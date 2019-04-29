var projects = []

function addProject(title, collaborators, description, link) {
    var newproj = {title:title,
        collaborators:collaborators,
        description:description,
        link:link};
    projects.push(newproj);
}

function initProjects() {
    addProject('RogueRocket', 
        '', 
        '<p>The following is an example of what the website for Rogue Rocket could look like. It is a work in progress. A few notes:\
            <ul><li>Currently only the home page is available</li>\
                <li>The displayed videos update automatically whenever a new video is uploaded to the Youtube channel (and by updated, I mean when you reload the page, it will grab the correct videos).</li>\
                <li>The annoying edges around the photos is a result of the Youtube API. It may be possible to build a work around.</li>\
            </ul>\
        </p>', 
        'http://www.jaymirecki.com/projects/roguerocket');
    // console.log(projects);
    showProjects();
}

function showProjects() {
    var projString = 
        '<tr>\
            <th>Title</th>\
            <th>Collaborators</th>\
            <th>Description</th>\
        </tr>';
    // console.log(projects);
    for (i = 0; i < projects.length; i++) {
        var currProj = projects[i];
        var currString =
            '<tr>\
                <td><a href="' + currProj.link + '">' + 
                    currProj.title + '</a></td>\
                <td>' + currProj.collaborators + '</td>\
                <td class="description">' + currProj.description + '</td>\
            </tr>';
        projString += currString;
        // console.log(projString);
    }
    $('#projects').html(projString);
}

$(document).ready(function() {
    initProjects();
});