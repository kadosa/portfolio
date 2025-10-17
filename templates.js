(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["index.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\n\n";
env.getTemplate("layouts/application.njk", true, "index.njk", false, function(t_2,_parentTemplate) {
if(t_2) { cb(t_2); return; }
parentTemplate = _parentTemplate
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n  <div class=\"container\">\n    ";
env.getTemplate("layouts/header.njk", false, "index.njk", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n    <div class=\"page-content\">\n      ";
env.getTemplate("pages/home.njk", false, "index.njk", null, function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
t_9.render(context.getVariables(), frame, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
output += t_10
output += "\n    </div>\n    ";
env.getTemplate("layouts/footer.njk", false, "index.njk", null, function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
t_13.render(context.getVariables(), frame, function(t_16,t_14) {
if(t_16) { cb(t_16); return; }
output += t_14
output += "\n  </div>\n\n";
cb(null, output);
})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["data/global.json"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "{\n  \"title\": \"Kadosa Orosz - Creative Developer\"\n}\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/application.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("macros/helpers.njk", false, "layouts/application.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(t_1.hasOwnProperty("sprite")) {
var t_4 = t_1.sprite;
} else {
cb(new Error("cannot import 'sprite'")); return;
}
context.setVariable("sprite", t_4);
output += "\n<!doctype html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title>";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("title"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "</title>\n    <link rel=\"stylesheet\" href=\"stylesheets/app.css\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    ";
env.getTemplate("shared/app-icons.njk", false, "layouts/application.njk", null, function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
t_7.render(context.getVariables(), frame, function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
output += t_8
output += "\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("head"))(env, context, frame, runtime, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
output += t_11;
output += "\n  </head>\n  <body>\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
output += t_13;
output += "\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("javascript"))(env, context, frame, runtime, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
output += t_15;
output += "\n  </body>\n</html>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_title(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_head(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_javascript(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n      <script src=\"templates.js\"></script>\n      ";
output += "\n    ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_title: b_title,
b_head: b_head,
b_content: b_content,
b_javascript: b_javascript,
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/footer.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<footer class=\"footer\">    \n        <p class=\"footer__text\">© Digital Vagabonds Limited</p>\n</footer>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/header.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<header class=\"header\">\n        ";
output += "\n        <div class=\"banner\">\n            <h1 class=\"banner__title\">Kadosa Orosz</h1>\n            <p class=\"banner__desc\">Creative Developer</p>\n        </div>\n        <div class=\"logo-container\">\n          <img class=\"logo-image\" src=\"images/logo_geometry-a37cca176c.svg\"  height=\"100px\" width=\"100px\"/>\n          <img class=\"logo-lines\" src=\"images/logo_lines-f70e473fbd.svg\"  height=\"105px\" width=\"100px\"/>\n        </div>\n</header>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["macros/helpers.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["id", "viewBox", "classes"], 
[], 
function (l_id, l_viewBox, l_classes, kwargs) {
frame = frame.push(true);
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("id", l_id);
frame.set("viewBox", l_viewBox);
frame.set("classes", l_classes);
var t_2 = "";t_2 += "\n  ";
l_viewBox = l_viewBox || "0 0 1 1";
frame.set("viewBox", l_viewBox, true);
if(frame.topLevel) {
context.setVariable("viewBox", l_viewBox);
}
if(frame.topLevel) {
context.addExport("viewBox", l_viewBox);
}
t_2 += "\n  <span class='sprite -";
t_2 += runtime.suppressValue(l_id, env.opts.autoescape);
t_2 += " ";
t_2 += runtime.suppressValue(l_classes, env.opts.autoescape);
t_2 += "'>\n    <svg viewBox=\"";
t_2 += runtime.suppressValue(l_viewBox, env.opts.autoescape);
t_2 += "\"><use xlink:href='images/icons.svg#";
t_2 += runtime.suppressValue(l_id, env.opts.autoescape);
t_2 += "' /></use></svg>\n  </span>\n";
;
frame = frame.pop();
return new runtime.SafeString(t_2);
});
context.addExport("sprite");
context.setVariable("sprite", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["pages/about.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<h1>About Page</h1>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["pages/contact.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["pages/home.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"text-container\">\n  <p>Hi! My name is Kadosa and I build things for the web. I'm open for contract work remotely, in London, or in any other nice, tropical location.</p>\n  <p>Have a look at my <a href=\"http://kadosa.org/assets/portfolio_2015.pdf\" target=\"_blank\">portfolio</a> or see my <a href=\"http://kadosa.org/assets/Kadosa_Orosz_CV_2016.pdf\" target=\"_blank\">CV</a> for my work experience.</p>\n  <p>If you have any potential projects you'd like to talk about, feel free to send me an <a href=\"mailto:hello@kadosa.org\">email</a>.</p>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["pages/work.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["shared/app-icons.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<!-- Generate using http://realfavicongenerator.net/ -->\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
