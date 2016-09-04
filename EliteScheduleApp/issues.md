# List of Issues

## Data and Caching: Implementing Caches

### Description
This error is happening in `team-detail-ctrl.js` file. 

### Code
	var team = _.chain(data.teams)
                .map("divisionTeams").flatten()
                .find({"id": vm.teamId})
                .value();

            vm.teamName = team.name;

### Error
ionic.bundle.js:26794 TypeError: Cannot read property 'name' of undefined
    at team-detail-ctrl.js:17
    at processQueue (ionic.bundle.js:29127)
    at ionic.bundle.js:29143
    at Scope.$eval (ionic.bundle.js:30395)
    at Scope.$digest (ionic.bundle.js:30211)
    at Scope.$apply (ionic.bundle.js:30503)
    at done (ionic.bundle.js:24824)
    at completeRequest (ionic.bundle.js:25022)
    at XMLHttpRequest.requestLoaded (ionic.bundle.js:24963)(anonymous function) @ ionic.bundle.js:26794(anonymous function) @ ionic.bundle.js:23507processQueue @ ionic.bundle.js:29135(anonymous function) @ ionic.bundle.js:29143$eval @ ionic.bundle.js:30395$digest @ ionic.bundle.js:30211$apply @ ionic.bundle.js:30503done @ ionic.bundle.js:24824completeRequest @ ionic.bundle.js:25022requestLoaded @ ionic.bundle.js:24963
content.min.js:1 XHR finished loading: GET "chrome-extension://mgijmajocgfcbeboacabfgobmjgjcoja/content.min.css".u @ content.min.js:1y @ content.min.js:1(anonymous function) @ content.min.js:18(anonymous function) @ content.min.js:18

### Resolution

Reached out to the author. 