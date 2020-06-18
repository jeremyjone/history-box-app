const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: "setting",
        component: () => import("pages/Setting.vue")
      }
    ]
  },
  {
    path: "/history",
    component: () => import("layouts/TimelineLayout.vue"),
    children: []
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
