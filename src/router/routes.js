export default [
  {
    path: "/",
    component: () => import("layouts/default"),
    //Critical fact: path elements must correspond precisely to the property names used
    children: [
      { path: "/home", name: "home", component: () => import("pages/Home") },
      {
        path: "/PasswordChange",
        name: "PasswordChange",
        component: () => import("pages/PasswordChange")
      },
      {
        path: "/aboutb",
        name: "aboutb",
        component: () => import("pages/AboutBookmarks")
      },
      {
        path: "/aboutc",
        name: "aboutc",
        component: () => import("pages/AboutConversations")
      },
      {
        path: "/aboutcons",
        name: "aboutcons",
        component: () => import("pages/AboutConnections")
      },
      {
        path: "/aboutt",
        name: "aboutt",
        component: () => import("pages/AboutTags")
      },
      {
        path: "/signin",
        name: "signin",
        component: () => import("pages/SignIn")
      },
      {
        path: "/login",
        name: "login",
        component: () => import("pages/SignIn")
      },
      {
        path: "/register",
        name: "register",
        component: () => import("pages/Register")
      },
      {
        path: "/calendar",
        name: "calendar",
        component: () => import("pages/Calendar")
      },
      {
        path: "/chat",
        name: "chat",
        component: () => import("pages/Chat"),
        meta: { requiresAuth: true }
      },
      { path: "/admin", name: "admin", component: () => import("pages/Admin") },
      {
        path: "/history",
        name: "history",
        component: () => import("pages/History")
      },
      {
        path: "/bookmark/new",
        name: "bookmarknew",
        component: () => import("pages/BookmarkForm")
      },
      {
        path: "/bookmarks",
        name: "bookmarks",
        component: () => import("pages/BookmarkIndex")
      },
      {
        path: "/quests",
        name: "quests",
        component: () => import("pages/Quests")
      },
      {
        path: "/topics",
        name: "topics",
        component: () => import("pages/TopicIndex")
      },
      {
        path: "/tags",
        name: "tags",
        component: () => import("pages/TagIndex")
      },
      {
        path: "/ether",
        name: "ether",
        component: () => import("pages/EtherpadView")
      },
      {
        path: "/questedit",
        name: "questedit",
        component: () => import("pages/QuestForm")
      },
      {
        path: "/topicedit",
        name: "topicedit",
        component: () => import("pages/TopicEdit")
      },
      {
        path: "/topicchild/:id/:type",
        name: "topicchild",
        component: () => import("pages/TopicEdit"),
        props: true
      },
      {
        path: "/bookmarkview/:id",
        name: "bookmarkview",
        component: () => import("pages/NodeView"),
        props: true
      },
      {
        path: "/questview/:id",
        name: "questview",
        component: () => import("pages/NodeView"),
        props: true
      },
      {
        path: "/topicview/:id",
        name: "topicview",
        component: () => import("pages/NodeView"),
        props: true
      },
      {
        path: "/props/:id",
        name: "props",
        component: () => import("pages/PropertyForm"),
        props: true
      },
      {
        path: "/profile/:id",
        name: "profile",
        component: () => import("pages/ProfileForm"),
        props: true
      },
      {
        path: "/search/:q",
        name: "search",
        component: () => import("pages/Search"),
        props: true
      },
      {
        path: "/userview/:id",
        name: "userview",
        component: () => import("pages/UserView"),
        props: true
      },
      {
        path: "/tagview/:id",
        name: "tagview",
        component: () => import("pages/TagView"),
        props: true
      },
      {
        path: "/tagform/:id",
        name: "tagform",
        component: () => import("pages/TagForm"),
        props: true
      },
      {
        path: "/nodeedit/:type/:parentType/:parentId",
        name: "nodeedit",
        component: () => import("pages/NodeForm"),
        props: true
      },
      {
        path: "/nodeupdate/:type/:id",
        name: "nodeupdate",
        component: () => import("pages/NodeForm"),
        props: true
      },
      {
        path: "/connectionform/:id",
        name: "connectionform",
        component: () => import("pages/ConnectionForm"),
        props: true
      },
      {
        path: "/connedit/:id",
        name: "conedit",
        component: () => import("pages/ConnectionForm"),
        props: true
      },
      {
        path: "/token/:type/:hash/:emailb64",
        name: "token",
        component: () => import("pages/Token"),
        props: true
      }
    ]
  },

  {
    // Always leave this as last one
    path: "*",
    component: () => import("pages/404")
  }
];
