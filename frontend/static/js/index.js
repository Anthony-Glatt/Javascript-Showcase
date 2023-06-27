const router = async () => {
  const routes = [
    { path: '/', view: () => console.log("viewing dashboard")},
    { path: '/posts', view: () => console.log("viewing posts")},
    { path: '/settings', view: () => console.log("viewing settings")},
  ];

  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    }
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  console.log(match);
};

document.addEventListener("DOMContentLoaded", () => {
  router();
});