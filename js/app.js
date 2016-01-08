
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function (e, t) {
    var n, r, i = typeof t, o = e.document, a = e.location, s = e.jQuery, u = e.$, l = {}, c = [], p = "1.9.1", f = c.concat, d = c.push, h = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = p.trim, b = function (e, t) { return new b.fn.init(e, t, r) }, x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^[\],:{}\s]*$/, E = /(?:^|:|,)(?:\s*\[)+/g, S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, j = /^-ms-/, D = /-([\da-z])/gi, L = function (e, t) { return t.toUpperCase() }, H = function (e) { (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready()) }, q = function () { o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H)) }; b.fn = b.prototype = { jquery: p, constructor: b, init: function (e, n, r) { var i, a; if (!e) return this; if ("string" == typeof e) { if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e); if (i[1]) { if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n)) for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]); return this } if (a = o.getElementById(i[2]), a && a.parentNode) { if (a.id !== i[2]) return r.find(e); this.length = 1, this[0] = a } return this.context = o, this.selector = e, this } return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this)) }, selector: "", length: 0, size: function () { return this.length }, toArray: function () { return h.call(this) }, get: function (e) { return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e] }, pushStack: function (e) { var t = b.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t }, each: function (e, t) { return b.each(this, e, t) }, ready: function (e) { return b.ready.promise().done(e), this }, slice: function () { return this.pushStack(h.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (e) { var t = this.length, n = +e + (0 > e ? t : 0); return this.pushStack(n >= 0 && t > n ? [this[n]] : []) }, map: function (e) { return this.pushStack(b.map(this, function (t, n) { return e.call(t, n, t) })) }, end: function () { return this.prevObject || this.constructor(null) }, push: d, sort: [].sort, splice: [].splice }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function () { var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1; for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) if (null != (o = arguments[u])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r)); return s }, b.extend({ noConflict: function (t) { return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b }, isReady: !1, readyWait: 1, holdReady: function (e) { e ? b.readyWait++ : b.ready(!0) }, ready: function (e) { if (e === !0 ? ! --b.readyWait : !b.isReady) { if (!o.body) return setTimeout(b.ready); b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready")) } }, isFunction: function (e) { return "function" === b.type(e) }, isArray: Array.isArray || function (e) { return "array" === b.type(e) }, isWindow: function (e) { return null != e && e == e.window }, isNumeric: function (e) { return !isNaN(parseFloat(e)) && isFinite(e) }, type: function (e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e }, isPlainObject: function (e) { if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1; try { if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) { return !1 } var r; for (r in e); return r === t || y.call(e, r) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, error: function (e) { throw Error(e) }, parseHTML: function (e, t, n) { if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || o; var r = C.exec(e), i = !n && []; return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes)) }, parseJSON: function (n) { return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t) }, parseXML: function (n) { var r, i; if (!n || "string" != typeof n) return null; try { e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n)) } catch (o) { r = t } return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r }, noop: function () { }, globalEval: function (t) { t && b.trim(t) && (e.execScript || function (t) { e.eval.call(e, t) })(t) }, camelCase: function (e) { return e.replace(j, "ms-").replace(D, L) }, nodeName: function (e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function (e, t, n) { var r, i = 0, o = e.length, a = M(e); if (n) { if (a) { for (; o > i; i++) if (r = t.apply(e[i], n), r === !1) break } else for (i in e) if (r = t.apply(e[i], n), r === !1) break } else if (a) { for (; o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break; return e }, trim: v && !v.call("\ufeff\u00a0") ? function (e) { return null == e ? "" : v.call(e) } : function (e) { return null == e ? "" : (e + "").replace(T, "") }, makeArray: function (e, t) { var n = t || []; return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n }, inArray: function (e, t, n) { var r; if (t) { if (g) return g.call(t, e, n); for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n } return -1 }, merge: function (e, n) { var r = n.length, i = e.length, o = 0; if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o]; else while (n[o] !== t) e[i++] = n[o++]; return e.length = i, e }, grep: function (e, t, n) { var r, i = [], o = 0, a = e.length; for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]); return i }, map: function (e, t, n) { var r, i = 0, o = e.length, a = M(e), s = []; if (a) for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r); return f.apply([], s) }, guid: 1, proxy: function (e, n) { var r, i, o; return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function () { return e.apply(n || this, r.concat(h.call(arguments))) }, i.guid = e.guid = e.guid || b.guid++, i) : t }, access: function (e, n, r, i, o, a, s) { var u = 0, l = e.length, c = null == r; if ("object" === b.type(r)) { o = !0; for (u in r) b.access(e, n, u, r[u], !0, a, s) } else if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) { return c.call(b(e), n) })), n)) for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r))); return o ? e : c ? n.call(e) : l ? n(e[0], r) : a }, now: function () { return (new Date).getTime() } }), b.ready.promise = function (t) { if (!n) if (n = b.Deferred(), "complete" === o.readyState) setTimeout(b.ready); else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1); else { o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H); var r = !1; try { r = null == e.frameElement && o.documentElement } catch (i) { } r && r.doScroll && function a() { if (!b.isReady) { try { r.doScroll("left") } catch (e) { return setTimeout(a, 50) } q(), b.ready() } } () } return n.promise(t) }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) { l["[object " + t + "]"] = t.toLowerCase() }); function M(e) { var t = e.length, n = b.type(e); return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e) } r = b(o); var _ = {}; function F(e) { var t = _[e] = {}; return b.each(e.match(w) || [], function (e, n) { t[n] = !0 }), t } b.Callbacks = function (e) { e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e); var n, r, i, o, a, s, u = [], l = !e.once && [], c = function (t) { for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++) if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) { r = !1; break } n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable()) }, p = { add: function () { if (u) { var t = u.length; (function i(t) { b.each(t, function (t, n) { var r = b.type(n); "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n) }) })(arguments), n ? o = u.length : r && (s = t, c(r)) } return this }, remove: function () { return u && b.each(arguments, function (e, t) { var r; while ((r = b.inArray(t, u, r)) > -1) u.splice(r, 1), n && (o >= r && o--, a >= r && a--) }), this }, has: function (e) { return e ? b.inArray(e, u) > -1 : !(!u || !u.length) }, empty: function () { return u = [], this }, disable: function () { return u = l = r = t, this }, disabled: function () { return !u }, lock: function () { return l = t, r || p.disable(), this }, locked: function () { return !l }, fireWith: function (e, t) { return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this }, fire: function () { return p.fireWith(this, arguments), this }, fired: function () { return !!i } }; return p }, b.extend({ Deferred: function (e) { var t = [["resolve", "done", b.Callbacks("once memory"), "resolved"], ["reject", "fail", b.Callbacks("once memory"), "rejected"], ["notify", "progress", b.Callbacks("memory")]], n = "pending", r = { state: function () { return n }, always: function () { return i.done(arguments).fail(arguments), this }, then: function () { var e = arguments; return b.Deferred(function (n) { b.each(t, function (t, o) { var a = o[0], s = b.isFunction(e[t]) && e[t]; i[o[1]](function () { var e = s && s.apply(this, arguments); e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments) }) }), e = null }).promise() }, promise: function (e) { return null != e ? b.extend(e, r) : r } }, i = {}; return r.pipe = r.then, b.each(t, function (e, o) { var a = o[2], s = o[3]; r[o[1]] = a.add, s && a.add(function () { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () { return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith }), r.promise(i), e && e.call(i, i), i }, when: function (e) { var t = 0, n = h.call(arguments), r = n.length, i = 1 !== r || e && b.isFunction(e.promise) ? r : 0, o = 1 === i ? e : b.Deferred(), a = function (e, t, n) { return function (r) { t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n) } }, s, u, l; if (r > 1) for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i; return i || o.resolveWith(l, n), o.promise() } }), b.support = function () { var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div"); if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {}; s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = { getSetAttribute: "t" !== d.className, leadingWhitespace: 3 === d.firstChild.nodeType, tbody: !d.getElementsByTagName("tbody").length, htmlSerialize: !!d.getElementsByTagName("link").length, style: /top/.test(r.getAttribute("style")), hrefNormalized: "/a" === r.getAttribute("href"), opacity: /^0.5/.test(r.style.opacity), cssFloat: !!r.style.cssFloat, checkOn: !!a.value, optSelected: l.selected, enctype: !!o.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === o.compatMode, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled; try { delete d.test } catch (h) { t.deleteExpando = !1 } a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () { t.noCloneEvent = !1 }), d.cloneNode(!0).click()); for (f in { submit: !0, change: !0, focusin: !0 }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1; return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function () { var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", u = o.getElementsByTagName("body")[0]; u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || { width: "4px" }).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null) }), n = s = u = l = r = a = null, t } (); var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, B = /([A-Z])/g; function P(e, n, r, i) { if (b.acceptData(e)) { var o, a, s = b.expando, u = "string" == typeof n, l = e.nodeType, p = l ? b.cache : e, f = l ? e[s] : e[s] && s; if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a } } function R(e, t, n) { if (b.acceptData(e)) { var r, i, o, a = e.nodeType, s = a ? b.cache : e, u = a ? e[b.expando] : b.expando; if (s[u]) { if (t && (o = n ? s[u] : s[u].data)) { b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" ")); for (r = 0, i = t.length; i > r; r++) delete o[t[r]]; if (!(n ? $ : b.isEmptyObject)(o)) return } (n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null) } } } b.extend({ cache: {}, expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function (e) { return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !$(e) }, data: function (e, t, n) { return P(e, t, n) }, removeData: function (e, t) { return R(e, t) }, _data: function (e, t, n) { return P(e, t, n, !0) }, _removeData: function (e, t) { return R(e, t, !0) }, acceptData: function (e) { if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1; var t = e.nodeName && b.noData[e.nodeName.toLowerCase()]; return !t || t !== !0 && e.getAttribute("classid") === t } }), b.fn.extend({ data: function (e, n) { var r, i, o = this[0], a = 0, s = null; if (e === t) { if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) { for (r = o.attributes; r.length > a; a++) i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i])); b._data(o, "parsedAttrs", !0) } return s } return "object" == typeof e ? this.each(function () { b.data(this, e) }) : b.access(this, function (n) { return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function () { b.data(this, e, n) }), t) }, null, n, arguments.length > 1, null, !0) }, removeData: function (e) { return this.each(function () { b.removeData(this, e) }) } }); function W(e, n, r) { if (r === t && 1 === e.nodeType) { var i = "data-" + n.replace(B, "-$1").toLowerCase(); if (r = e.getAttribute(i), "string" == typeof r) { try { r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r } catch (o) { } b.data(e, n, r) } else r = t } return r } function $(e) { var t; for (t in e) if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1; return !0 } b.extend({ queue: function (e, n, r) { var i; return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t }, dequeue: function (e, t) { t = t || "fx"; var n = b.queue(e, t), r = n.length, i = n.shift(), o = b._queueHooks(e, t), a = function () { b.dequeue(e, t) }; "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return b._data(e, n) || b._data(e, n, { empty: b.Callbacks("once memory").add(function () { b._removeData(e, t + "queue"), b._removeData(e, n) }) }) } }), b.fn.extend({ queue: function (e, n) { var r = 2; return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function () { var t = b.queue(this, e, n); b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e) }) }, dequeue: function (e) { return this.each(function () { b.dequeue(this, e) }) }, delay: function (e, t) { return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) { var r = setTimeout(t, e); n.stop = function () { clearTimeout(r) } }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, n) { var r, i = 1, o = b.Deferred(), a = this, s = this.length, u = function () { --i || o.resolveWith(a, [a]) }; "string" != typeof e && (n = e, e = t), e = e || "fx"; while (s--) r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u)); return u(), o.promise(n) } }); var I, z, X = /[\t\r\n]/g, U = /\r/g, V = /^(?:input|select|textarea|button|object)$/i, Y = /^(?:a|area)$/i, J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, G = /^(?:checked|selected)$/i, Q = b.support.getSetAttribute, K = b.support.input; b.fn.extend({ attr: function (e, t) { return b.access(this, b.attr, e, t, arguments.length > 1) }, removeAttr: function (e) { return this.each(function () { b.removeAttr(this, e) }) }, prop: function (e, t) { return b.access(this, b.prop, e, t, arguments.length > 1) }, removeProp: function (e) { return e = b.propFix[e] || e, this.each(function () { try { this[e] = t, delete this[e] } catch (n) { } }) }, addClass: function (e) { var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e; if (b.isFunction(e)) return this.each(function (t) { b(this).addClass(e.call(this, t, this.className)) }); if (u) for (t = (e || "").match(w) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) { o = 0; while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " "); n.className = b.trim(r) } return this }, removeClass: function (e) { var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e; if (b.isFunction(e)) return this.each(function (t) { b(this).removeClass(e.call(this, t, this.className)) }); if (u) for (t = (e || "").match(w) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) { o = 0; while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " "); n.className = e ? b.trim(r) : "" } return this }, toggleClass: function (e, t) { var n = typeof e, r = "boolean" == typeof t; return b.isFunction(e) ? this.each(function (n) { b(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function () { if ("string" === n) { var o, a = 0, s = b(this), u = t, l = e.match(w) || []; while (o = l[a++]) u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o) } else (n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "") }) }, hasClass: function (e) { var t = " " + e + " ", n = 0, r = this.length; for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0; return !1 }, val: function (e) { var n, r, i, o = this[0]; { if (arguments.length) return i = b.isFunction(e), this.each(function (n) { var o, a = b(this); 1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function (e) { return null == e ? "" : e + "" })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o)) }); if (o) return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "" : n) } } }), b.extend({ valHooks: { option: { get: function (e) { var t = e.attributes.value; return !t || t.specified ? e.value : e.text } }, select: { get: function (e) { var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; for (; s > u; u++) if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) { if (t = b(n).val(), o) return t; a.push(t) } return a }, set: function (e, t) { var n = b.makeArray(t); return b(e).find("option").each(function () { this.selected = b.inArray(b(this).val(), n) >= 0 }), n.length || (e.selectedIndex = -1), n } } }, attr: function (e, n, r) { var o, a, s, u = e.nodeType; if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t)) }, removeAttr: function (e, t) { var n, r, i = 0, o = t && t.match(w); if (o && 1 === e.nodeType) while (n = o[i++]) r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(Q ? n : r) }, attrHooks: { type: { set: function (e, t) { if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, prop: function (e, n, r) { var i, o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n] }, propHooks: { tabIndex: { get: function (e) { var n = e.getAttributeNode("tabindex"); return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t } }} }), z = { get: function (e, n) { var r = b.prop(e, n), i = "boolean" == typeof r && e.getAttribute(n), o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n); return o && o.value !== !1 ? n.toLowerCase() : t }, set: function (e, t, n) { return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n } }, K && Q || (b.attrHooks.value = { get: function (e, n) { var r = e.getAttributeNode(n); return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t }, set: function (e, n, r) { return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r) } }), Q || (I = b.valHooks.button = { get: function (e, n) { var r = e.getAttributeNode(n); return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t }, set: function (e, n, r) { var i = e.getAttributeNode(r); return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t } }, b.attrHooks.contenteditable = { get: I.get, set: function (e, t, n) { I.set(e, "" === t ? !1 : t, n) } }, b.each(["width", "height"], function (e, n) { b.attrHooks[n] = b.extend(b.attrHooks[n], { set: function (e, r) { return "" === r ? (e.setAttribute(n, "auto"), r) : t } }) })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function (e, n) { b.attrHooks[n] = b.extend(b.attrHooks[n], { get: function (e) { var r = e.getAttribute(n, 2); return null == r ? t : r } }) }), b.each(["href", "src"], function (e, t) { b.propHooks[t] = { get: function (e) { return e.getAttribute(t, 4) } } })), b.support.style || (b.attrHooks.style = { get: function (e) { return e.style.cssText || t }, set: function (e, t) { return e.style.cssText = t + "" } }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, { get: function (e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function () { b.valHooks[this] = { get: function (e) { return null === e.getAttribute("value") ? "on" : e.value } } }), b.each(["radio", "checkbox"], function () { b.valHooks[this] = b.extend(b.valHooks[this], { set: function (e, n) { return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t } }) }); var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/; function it() { return !0 } function ot() { return !1 } b.event = { global: {}, add: function (e, n, r, o, a) { var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e); if (v) { r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function (e) { return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments) }, f.elem = e), n = (n || "").match(w) || [""], l = n.length; while (l--) s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({ type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && b.expr.match.needsContext.test(a), namespace: m.join(".") }, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = !0; e = null } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e); if (m && (c = m.events)) { t = (t || "").match(w) || [""], l = t.length; while (l--) if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) { p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a)); u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d]) } else for (d in c) b.event.remove(e, d + t[l], n, r, !0); b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events")) } }, trigger: function (n, r, i, a) { var s, u, l, c, p, f, d, h = [i || o], g = y.call(n, "type") ? n.type : n, m = y.call(n, "namespace") ? n.namespace.split(".") : []; if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) { if (!a && !p.noBubble && !b.isWindow(i)) { for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) h.push(l), f = l; f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e) } d = 0; while ((l = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault(); if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) { f = i[u], f && (i[u] = null), b.event.triggered = g; try { i[g]() } catch (v) { } b.event.triggered = t, f && (i[u] = f) } return n.result } }, dispatch: function (e) { e = b.event.fix(e); var n, r, i, o, a, s = [], u = h.call(arguments), l = (b._data(this, "events") || {})[e.type] || [], c = b.event.special[e.type] || {}; if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) { s = b.event.handlers.call(this, e, l), n = 0; while ((o = s[n++]) && !e.isPropagationStopped()) { e.currentTarget = o.elem, a = 0; while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, e), e.result } }, handlers: function (e, n) { var r, i, o, a, s = [], u = n.delegateCount, l = e.target; if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) { for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length), o[r] && o.push(i); o.length && s.push({ elem: l, handlers: o }) } return n.length > u && s.push({ elem: this, handlers: n.slice(u) }), s }, fix: function (e) { if (e[b.expando]) return e; var t, n, r, i = e.type, a = e, s = this.fixHooks[i]; s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length; while (t--) n = r[t], e[n] = a[n]; return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, n) { var r, i, a, s = n.button, u = n.fromElement; return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e } }, special: { load: { noBubble: !0 }, click: { trigger: function () { return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t } }, focus: { trigger: function () { if (this !== o.activeElement && this.focus) try { return this.focus(), !1 } catch (e) { } }, delegateType: "focusin" }, blur: { trigger: function () { return this === o.activeElement && this.blur ? (this.blur(), !1) : t }, delegateType: "focusout" }, beforeunload: { postDispatch: function (e) { e.result !== t && (e.originalEvent.returnValue = e.result) } } }, simulate: function (e, t, n, r) { var i = b.extend(new b.Event, n, { type: e, isSimulated: !0, originalEvent: {} }); r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault() } }, b.removeEvent = o.removeEventListener ? function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function (e, t, n) { var r = "on" + t; e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n)) }, b.Event = function (e, n) { return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n) }, b.Event.prototype = { isDefaultPrevented: ot, isPropagationStopped: ot, isImmediatePropagationStopped: ot, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = it, this.stopPropagation() } }, b.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) {
        b.event.special[e] = { delegateType: t, bindType: t, handle: function (e) {
            var n, r = this, i = e.relatedTarget, o = e.handleObj;
            return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
        } 
        }
    }), b.support.submitBubbles || (b.event.special.submit = { setup: function () { return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function (e) { var n = e.target, r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t; r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function (e) { e._submit_bubble = !0 }), b._data(r, "submitBubbles", !0)) }), t) }, postDispatch: function (e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0)) }, teardown: function () { return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t) } }), b.support.changeBubbles || (b.event.special.change = { setup: function () { return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function (e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), b.event.add(this, "click._change", function (e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0) })), !1) : (b.event.add(this, "beforeactivate._change", function (e) { var t = e.target; Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function (e) { !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0) }), b._data(t, "changeBubbles", !0)) }), t) }, handle: function (e) { var n = e.target; return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t }, teardown: function () { return b.event.remove(this, "._change"), !Z.test(this.nodeName) } }), b.support.focusinBubbles || b.each({ focus: "focusin", blur: "focusout" }, function (e, t) { var n = 0, r = function (e) { b.event.simulate(t, e.target, b.event.fix(e), !0) }; b.event.special[t] = { setup: function () { 0 === n++ && o.addEventListener(e, r, !0) }, teardown: function () { 0 === --n && o.removeEventListener(e, r, !0) } } }), b.fn.extend({ on: function (e, n, r, i, o) { var a, s; if ("object" == typeof e) { "string" != typeof n && (r = r || n, n = t); for (a in e) this.on(a, n, r, e[a], o); return this } if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot; else if (!i) return this; return 1 === o && (s = i, i = function (e) { return b().off(e), s.apply(this, arguments) }, i.guid = s.guid || (s.guid = b.guid++)), this.each(function () { b.event.add(this, e, i, r, n) }) }, one: function (e, t, n, r) { return this.on(e, t, n, r, 1) }, off: function (e, n, r) { var i, o; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (o in e) this.off(o, n, e[o]); return this } return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () { b.event.remove(this, e, r, n) }) }, bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, trigger: function (e, t) { return this.each(function () { b.event.trigger(e, t, this) }) }, triggerHandler: function (e, n) { var r = this[0]; return r ? b.event.trigger(e, n, r, !0) : t } }), function (e, t) { var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date, w = e.document, T = {}, N = 0, C = 0, k = it(), E = it(), S = it(), A = typeof t, j = 1 << 31, D = [], L = D.pop, H = D.push, q = D.slice, M = D.indexOf || function (e) { var t = 0, n = this.length; for (; n > t; t++) if (this[t] === e) return t; return -1 }, _ = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = F.replace("w", "w#"), B = "([*^$|!~]?=)", P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]", R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)", W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"), $ = RegExp("^" + _ + "*," + _ + "*"), I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"), z = RegExp(R), X = RegExp("^" + O + "$"), U = { ID: RegExp("^#(" + F + ")"), CLASS: RegExp("^\\.(" + F + ")"), NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"), TAG: RegExp("^(" + F.replace("w", "w*") + ")"), ATTR: RegExp("^" + P), PSEUDO: RegExp("^" + R), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"), needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i") }, V = /[\x20\t\r\n\f]*[+~]/, Y = /^[^{]+\{\s*\[native code/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, G = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, K = /'|\\/g, Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, tt = function (e, t) { var n = "0x" + t - 65536; return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n) }; try { q.call(w.documentElement.childNodes, 0)[0].nodeType } catch (nt) { q = function (e) { var t, n = []; while (t = this[e++]) n.push(t); return n } } function rt(e) { return Y.test(e + "") } function it() { var e, t = []; return e = function (n, r) { return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r } } function ot(e) { return e[x] = !0, e } function at(e) { var t = p.createElement("div"); try { return e(t) } catch (n) { return !1 } finally { t = null } } function st(e, t, n, r) { var i, o, a, s, u, l, f, g, m, v; if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n; if (1 !== (s = t.nodeType) && 9 !== s) return []; if (!d && !r) { if (i = J.exec(e)) if (a = i[1]) { if (9 === s) { if (o = t.getElementById(a), !o || !o.parentNode) return n; if (o.id === a) return n.push(o), n } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), n } else { if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n; if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n } if (T.qsa && !h.test(e)) { if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) { l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length; while (u--) l[u] = g + dt(l[u]); m = V.test(e) && t.parentNode || t, v = l.join(",") } if (v) try { return H.apply(n, q.call(m.querySelectorAll(v), 0)), n } catch (b) { } finally { f || t.removeAttribute("id") } } } return wt(e.replace(W, "$1"), t, n, r) } a = st.isXML = function (e) { var t = e && (e.ownerDocument || e).documentElement; return t ? "HTML" !== t.nodeName : !1 }, c = st.setDocument = function (e) { var n = e ? e.ownerDocument || e : w; return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function (e) { return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length }), T.attributes = at(function (e) { e.innerHTML = "<select></select>"; var t = typeof e.lastChild.getAttribute("multiple"); return "boolean" !== t && "string" !== t }), T.getByClassName = at(function (e) { return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1 }), T.getByName = at(function (e) { e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild); var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length; return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t }), i.attrHandle = at(function (e) { return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href") }) ? {} : { href: function (e) { return e.getAttribute("href", 2) }, type: function (e) { return e.getAttribute("type") } }, T.getIdNotName ? (i.find.ID = function (e, t) { if (typeof t.getElementById !== A && !d) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, i.filter.ID = function (e) { var t = e.replace(et, tt); return function (e) { return e.getAttribute("id") === t } }) : (i.find.ID = function (e, n) { if (typeof n.getElementById !== A && !d) { var r = n.getElementById(e); return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : [] } }, i.filter.ID = function (e) { var t = e.replace(et, tt); return function (e) { var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id"); return n && n.value === t } }), i.find.TAG = T.tagNameNoComments ? function (e, n) { return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, i.find.NAME = T.getByName && function (e, n) { return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t }, i.find.CLASS = T.getByClassName && function (e, n) { return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e) }, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function (e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked") }), at(function (e) { e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:") })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function (e) { T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R) }), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, v = f.compareDocumentPosition ? function (e, t) { var r; return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1 } : function (e, t) { var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t]; if (e === t) return u = !0, 0; if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0; if (o === a) return ut(e, t); r = e; while (r = r.parentNode) s.unshift(r); r = t; while (r = r.parentNode) l.unshift(r); while (s[i] === l[i]) i++; return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0 }, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p }, st.matches = function (e, t) { return st(e, null, null, t) }, st.matchesSelector = function (e, t) { if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try { var n = m.call(e, t); if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (r) { } return st(t, p, null, [e]).length > 0 }, st.contains = function (e, t) { return (e.ownerDocument || e) !== p && c(e), y(e, t) }, st.attr = function (e, t) { var n; return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null }, st.error = function (e) { throw Error("Syntax error, unrecognized expression: " + e) }, st.uniqueSort = function (e) { var t, n = [], r = 1, i = 0; if (u = !T.detectDuplicates, e.sort(v), u) { for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r)); while (i--) e.splice(n[i], 1) } return e }; function ut(e, t) { var n = t && e, r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j); if (r) return r; if (n) while (n = n.nextSibling) if (n === t) return -1; return e ? 1 : -1 } function lt(e) { return function (t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } } function ct(e) { return function (t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } } function pt(e) { return ot(function (t) { return t = +t, ot(function (n, r) { var i, o = e([], n.length, t), a = o.length; while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) } o = st.getText = function (e) { var t, n = "", r = 0, i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else for (; t = e[r]; r++) n += o(t); return n }, i = st.selectors = { cacheLength: 50, createPseudo: ot, match: U, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling"} }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[5] && e[2]; return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { return "*" === e ? function () { return !0 } : (e = e.replace(et, tt).toLowerCase(), function (t) { return t.nodeName && t.nodeName.toLowerCase() === e }) }, CLASS: function (e) { var t = k[e + " "]; return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function (e) { return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "") }) }, ATTR: function (e, t, n) { return function (r) { var i = st.attr(r, e); return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0 } }, CHILD: function (e, t, n, r, i) { var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t; return 1 === r && 0 === i ? function (e) { return !!e.parentNode } : function (t, n, u) { var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s; if (m) { if (o) { while (g) { p = t; while (p = p[g]) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1; h = g = "only" === e && !h && "nextSibling" } return !0 } if (h = [a ? m.firstChild : m.lastChild], a && v) { c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d]; while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if (1 === p.nodeType && ++f && p === t) { c[e] = [N, d, f]; break } } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) f = l[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0 } } }, PSEUDO: function (e, t) { var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e); return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function (e, n) { var i, o = r(e, t), a = o.length; while (a--) i = M.call(e, o[a]), e[i] = !(n[i] = o[a]) }) : function (e) { return r(e, 0, n) }) : r } }, pseudos: { not: ot(function (e) { var t = [], n = [], r = s(e.replace(W, "$1")); return r[x] ? ot(function (e, t, n, i) { var o, a = r(e, null, i, []), s = e.length; while (s--) (o = a[s]) && (e[s] = !(t[s] = o)) }) : function (e, i, o) { return t[0] = e, r(t, null, o, n), !n.pop() } }), has: ot(function (e) { return function (t) { return st(e, t).length > 0 } }), contains: ot(function (e) { return function (t) { return (t.textContent || t.innerText || o(t)).indexOf(e) > -1 } }), lang: ot(function (e) { return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(), function (t) { var n; do if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function (t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function (e) { return e === f }, focus: function (e) { return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function (e) { return e.disabled === !1 }, disabled: function (e) { return e.disabled === !0 }, checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1; return !0 }, parent: function (e) { return !i.pseudos.empty(e) }, header: function (e) { return Q.test(e.nodeName) }, input: function (e) { return G.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type) }, first: pt(function () { return [0] }), last: pt(function (e, t) { return [t - 1] }), eq: pt(function (e, t, n) { return [0 > n ? n + t : n] }), even: pt(function (e, t) { var n = 0; for (; t > n; n += 2) e.push(n); return e }), odd: pt(function (e, t) { var n = 1; for (; t > n; n += 2) e.push(n); return e }), lt: pt(function (e, t, n) { var r = 0 > n ? n + t : n; for (; --r >= 0; ) e.push(r); return e }), gt: pt(function (e, t, n) { var r = 0 > n ? n + t : n; for (; t > ++r; ) e.push(r); return e })} }; for (n in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) i.pseudos[n] = lt(n); for (n in { submit: !0, reset: !0 }) i.pseudos[n] = ct(n); function ft(e, t) { var n, r, o, a, s, u, l, c = E[e + " "]; if (c) return t ? 0 : c.slice(0); s = e, u = [], l = i.preFilter; while (s) { (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({ value: n, type: r[0].replace(W, " ") }), s = s.slice(n.length)); for (a in i.filter) !(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({ value: n, type: a, matches: r }), s = s.slice(n.length)); if (!n) break } return t ? s.length : s ? st.error(e) : E(e, u).slice(0) } function dt(e) { var t = 0, n = e.length, r = ""; for (; n > t; t++) r += e[t].value; return r } function ht(e, t, n) { var i = t.dir, o = n && "parentNode" === i, a = C++; return t.first ? function (t, n, r) { while (t = t[i]) if (1 === t.nodeType || o) return e(t, n, r) } : function (t, n, s) { var u, l, c, p = N + " " + a; if (s) { while (t = t[i]) if ((1 === t.nodeType || o) && e(t, n, s)) return !0 } else while (t = t[i]) if (1 === t.nodeType || o) if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) { if ((u = l[1]) === !0 || u === r) return u === !0 } else if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) return !0 } } function gt(e) { return e.length > 1 ? function (t, n, r) { var i = e.length; while (i--) if (!e[i](t, n, r)) return !1; return !0 } : e[0] } function mt(e, t, n, r, i) { var o, a = [], s = 0, u = e.length, l = null != t; for (; u > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s)); return a } function yt(e, t, n, r, i, o) { return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function (o, a, s, u) { var l, c, p, f = [], d = [], h = a.length, g = o || xt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : mt(g, f, e, s, u), y = n ? i || (o ? e : h || r) ? [] : a : m; if (n && n(m, y, s, u), r) { l = mt(y, d), r(l, [], s, u), c = l.length; while (c--) (p = l[c]) && (y[d[c]] = !(m[d[c]] = p)) } if (o) { if (i || e) { if (i) { l = [], c = y.length; while (c--) (p = y[c]) && l.push(m[c] = p); i(null, y = [], l, u) } c = y.length; while (c--) (p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p)) } } else y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y) }) } function vt(e) { var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], u = a ? 1 : 0, c = ht(function (e) { return e === t }, s, !0), p = ht(function (e) { return M.call(t, e) > -1 }, s, !0), f = [function (e, n, r) { return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r)) } ]; for (; o > u; u++) if (n = i.relative[e[u].type]) f = [ht(gt(f), n)]; else { if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) { for (r = ++u; o > r; r++) if (i.relative[e[r].type]) break; return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e)) } f.push(n) } return gt(f) } function bt(e, t) { var n = 0, o = t.length > 0, a = e.length > 0, s = function (s, u, c, f, d) { var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, T = l, C = s || a && i.find.TAG("*", d && u.parentNode || u), k = N += null == T ? 1 : Math.random() || .1; for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) { if (a && h) { g = 0; while (m = e[g++]) if (m(h, u, c)) { f.push(h); break } w && (N = k, r = ++n) } o && ((h = !m && h) && v--, s && x.push(h)) } if (v += b, o && b !== v) { g = 0; while (m = t[g++]) m(x, y, u, c); if (s) { if (v > 0) while (b--) x[b] || y[b] || (y[b] = L.call(f)); y = mt(y) } H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f) } return w && (N = k, l = T), x }; return o ? ot(s) : s } s = st.compile = function (e, t) { var n, r = [], i = [], o = S[e + " "]; if (!o) { t || (t = ft(e)), n = t.length; while (n--) o = vt(t[n]), o[x] ? r.push(o) : i.push(o); o = S(e, bt(i, r)) } return o }; function xt(e, t, n) { var r = 0, i = t.length; for (; i > r; r++) st(e, t[r], n); return n } function wt(e, t, n, r) { var o, a, u, l, c, p = ft(e); if (!r && 1 === p.length) { if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) { if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) return n; e = e.slice(a.shift().value.length) } o = U.needsContext.test(e) ? 0 : a.length; while (o--) { if (u = a[o], i.relative[l = u.type]) break; if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) { if (a.splice(o, 1), e = r.length && dt(a), !e) return H.apply(n, q.call(r, 0)), n; break } } } return s(e, p)(r, t, d, n, V.test(e)), n } i.pseudos.nth = i.pseudos.eq; function Tt() { } i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt, c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains } (e); var at = /Until$/, st = /^(?:parents|prev(?:Until|All))/, ut = /^.[^:#\[\.,]*$/, lt = b.expr.match.needsContext, ct = { children: !0, contents: !0, next: !0, prev: !0 }; b.fn.extend({ find: function (e) { var t, n, r, i = this.length; if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function () { for (t = 0; i > t; t++) if (b.contains(r[t], this)) return !0 })); for (n = [], t = 0; i > t; t++) b.find(e, this[t], n); return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n }, has: function (e) { var t, n = b(e, this), r = n.length; return this.filter(function () { for (t = 0; r > t; t++) if (b.contains(this, n[t])) return !0 }) }, not: function (e) { return this.pushStack(ft(this, e, !1)) }, filter: function (e) { return this.pushStack(ft(this, e, !0)) }, is: function (e) { return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0) }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0; for (; i > r; r++) { n = this[r]; while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) { if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) { o.push(n); break } n = n.parentNode } } return this.pushStack(o.length > 1 ? b.unique(o) : o) }, index: function (e) { return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e), r = b.merge(this.get(), n); return this.pushStack(b.unique(r)) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), b.fn.andSelf = b.fn.addBack; function pt(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e } b.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return b.dir(e, "parentNode") }, parentsUntil: function (e, t, n) { return b.dir(e, "parentNode", n) }, next: function (e) { return pt(e, "nextSibling") }, prev: function (e) { return pt(e, "previousSibling") }, nextAll: function (e) { return b.dir(e, "nextSibling") }, prevAll: function (e) { return b.dir(e, "previousSibling") }, nextUntil: function (e, t, n) { return b.dir(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return b.dir(e, "previousSibling", n) }, siblings: function (e) { return b.sibling((e.parentNode || {}).firstChild, e) }, children: function (e) { return b.sibling(e.firstChild) }, contents: function (e) { return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes) } }, function (e, t) { b.fn[e] = function (n, r) { var i = b.map(this, t, n); return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i) } }), b.extend({ filter: function (e, t, n) { return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t) }, dir: function (e, n, r) { var i = [], o = e[n]; while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n]; return i }, sibling: function (e, t) { var n = []; for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n } }); function ft(e, t, n) { if (t = t || 0, b.isFunction(t)) return b.grep(e, function (e, r) { var i = !!t.call(e, r, e); return i === n }); if (t.nodeType) return b.grep(e, function (e) { return e === t === n }); if ("string" == typeof t) { var r = b.grep(e, function (e) { return 1 === e.nodeType }); if (ut.test(t)) return b.filter(t, r, !n); t = b.filter(t, r) } return b.grep(e, function (e) { return b.inArray(e, t) >= 0 === n }) } function dt(e) { var t = ht.split("|"), n = e.createDocumentFragment(); if (n.createElement) while (t.length) n.createElement(t.pop()); return n } var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Nt = /^(?:checkbox|radio)$/i, Ct = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, jt = dt(o), Dt = jt.appendChild(o.createElement("div")); At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({ text: function (e) { return b.access(this, function (e) { return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e)) }, null, e, arguments.length) }, wrapAll: function (e) { if (b.isFunction(e)) return this.each(function (t) { b(this).wrapAll(e.call(this, t)) }); if (this[0]) { var t = b(e, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild; return e }).append(this) } return this }, wrapInner: function (e) { return b.isFunction(e) ? this.each(function (t) { b(this).wrapInner(e.call(this, t)) }) : this.each(function () { var t = b(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function (e) { var t = b.isFunction(e); return this.each(function (n) { b(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function () { return this.parent().each(function () { b.nodeName(this, "body") || b(this).replaceWith(this.childNodes) }).end() }, append: function () { return this.domManip(arguments, !0, function (e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e) }) }, prepend: function () { return this.domManip(arguments, !0, function (e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild) }) }, before: function () { return this.domManip(arguments, !1, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return this.domManip(arguments, !1, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, remove: function (e, t) { var n, r = 0; for (; null != (n = this[r]); r++) (!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n))); return this }, empty: function () { var e, t = 0; for (; null != (e = this[t]); t++) { 1 === e.nodeType && b.cleanData(Ot(e, !1)); while (e.firstChild) e.removeChild(e.firstChild); e.options && b.nodeName(e, "select") && (e.options.length = 0) } return this }, clone: function (e, t) { return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () { return b.clone(this, e, t) }) }, html: function (e) { return b.access(this, function (e) { var n = this[0] || {}, r = 0, i = this.length; if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t; if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) { e = e.replace(vt, "<$1></$2>"); try { for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e); n = 0 } catch (o) { } } n && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function (e) { var t = b.isFunction(e); return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function (e) { var t = this.nextSibling, n = this.parentNode; n && (b(this).remove(), n.insertBefore(e, t)) }) }, detach: function (e) { return this.remove(e, !0) }, domManip: function (e, n, r) { e = f.apply([], e); var i, o, a, s, u, l, c = 0, p = this.length, d = this, h = p - 1, g = e[0], m = b.isFunction(g); if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function (i) { var o = d.eq(i); m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r) }); if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) { for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c); if (a) for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({ url: o.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, ""))); l = i = null } return this } }); function Lt(e, t) { return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t)) } function Ht(e) { var t = e.getAttributeNode("type"); return e.type = (t && t.specified) + "/" + e.type, e } function qt(e) { var t = Et.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e } function Mt(e, t) { var n, r = 0; for (; null != (n = e[r]); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval")) } function _t(e, t) { if (1 === t.nodeType && b.hasData(e)) { var n, r, i, o = b._data(e), a = b._data(t, o), s = o.events; if (s) { delete a.handle, a.events = {}; for (n in s) for (r = 0, i = s[n].length; i > r; r++) b.event.add(t, n, s[n][r]) } a.data && (a.data = b.extend({}, a.data)) } } function Ft(e, t) { var n, r, i; if (1 === t.nodeType) { if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) { i = b._data(t); for (r in i.events) b.removeEvent(t, r, i.handle); t.removeAttribute(b.expando) } "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue) } } b.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) { b.fn[e] = function (e) { var n, r = 0, i = [], o = b(e), a = o.length - 1; for (; a >= r; r++) n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get()); return this.pushStack(i) } }); function Ot(e, n) { var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t; if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n)); return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s } function Bt(e) { Nt.test(e.type) && (e.defaultChecked = e.checked) } b.extend({ clone: function (e, t, n) { var r, i, o, a, s, u = b.contains(e.ownerDocument, e); if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]); ++a) r[a] && Ft(i, r[a]); if (t) if (n) for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) _t(i, r[a]); else _t(e, o); return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o }, buildFragment: function (e, t, n, r) {
        var i, o, a, s, u, l, c, p = e.length, f = dt(t), d = [], h = 0; for (; p > h; h++) if (o = e[h], o || 0 === o) if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) {
            s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0]; while (i--) s = s.lastChild; if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
                o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; while (i--) b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
            } b.merge(d, s.childNodes), s.textContent = ""; while (s.firstChild) s.removeChild(s.firstChild); s = f.lastChild
        } else d.push(t.createTextNode(o)); s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0; while (o = d[h++]) if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) { i = 0; while (o = s[i++]) kt.test(o.type || "") && n.push(o) } return s = null, f
    }, cleanData: function (e, t) { var n, r, o, a, s = 0, u = b.expando, l = b.cache, p = b.support.deleteExpando, f = b.event.special; for (; null != (n = e[s]); s++) if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) { if (a.events) for (r in a.events) f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle); l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o)) } } 
    }); var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + x + ")(.*)$", "i"), Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + x + ")", "i"), Gt = { BODY: "block" }, Qt = { position: "absolute", visibility: "hidden", display: "block" }, Kt = { letterSpacing: 0, fontWeight: 400 }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"]; function tn(e, t) { if (t in e) return t; var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length; while (i--) if (t = en[i] + n, t in e) return t; return r } function nn(e, t) { return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e) } function rn(e, t) { var n, r, i, o = [], a = 0, s = e.length; for (; s > a; a++) r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display")))); for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none")); return e } b.fn.extend({ css: function (e, n) { return b.access(this, function (e, n, r) { var i, o, a = {}, s = 0; if (b.isArray(n)) { for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = b.css(e, n[s], !1, o); return a } return r !== t ? b.style(e, n, r) : b.css(e, n) }, e, n, arguments.length > 1) }, show: function () { return rn(this, !0) }, hide: function () { return rn(this) }, toggle: function (e) { var t = "boolean" == typeof e; return this.each(function () { (t ? e : nn(this)) ? b(this).show() : b(this).hide() }) } }), b.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = Wt(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": b.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function (e, n, r, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var o, a, s, u = b.camelCase(n), l = e.style; if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n]; if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try { l[n] = r } catch (c) { } } }, css: function (e, n, r, i) { var o, a, s, u = b.camelCase(n); return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a }, swap: function (e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; i = n.apply(e, r || []); for (o in t) e.style[o] = a[o]; return i } }), e.getComputedStyle ? (Rt = function (t) { return e.getComputedStyle(t, null) }, Wt = function (e, n, r) { var i, o, a, s = r || Rt(e), u = s ? s.getPropertyValue(n) || s[n] : t, l = e.style; return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u }) : o.documentElement.currentStyle && (Rt = function (e) { return e.currentStyle }, Wt = function (e, n, r) { var i, o, a, s = r || Rt(e), u = s ? s[n] : t, l = e.style; return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u }); function on(e, t, n) { var r = Vt.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t } function an(e, t, n, r, i) { var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; for (; 4 > o; o += 2) "margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i))); return a } function sn(e, t, n) { var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o); if (0 >= i || null == i) { if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i; r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0 } return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px" } function un(e) { var t = o, n = Gt[e]; return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n } function ln(e, t) { var n = b(t.createElement(e)).appendTo(t.body), r = b.css(n[0], "display"); return n.remove(), r } b.each(["height", "width"], function (e, n) { b.cssHooks[n] = { get: function (e, r, i) { return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function () { return sn(e, n, i) }) : sn(e, n, i) : t }, set: function (e, t, r) { var i = r && Rt(e); return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0) } } }), b.support.opacity || (b.cssHooks.opacity = { get: function (e, t) { return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function (e, t) { var n = e.style, r = e.currentStyle, i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || ""; n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i) } }), b(function () { b.support.reliableMarginRight || (b.cssHooks.marginRight = { get: function (e, n) { return n ? b.swap(e, { display: "inline-block" }, Wt, [e, "marginRight"]) : t } }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function (e, n) { b.cssHooks[n] = { get: function (e, r) { return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t } } }) }), b.expr && b.expr.filters && (b.expr.filters.hidden = function (e) { return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display")) }, b.expr.filters.visible = function (e) { return !b.expr.filters.hidden(e) }), b.each({ margin: "", padding: "", border: "Width" }, function (e, t) { b.cssHooks[e + t] = { expand: function (n) { var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, Ut.test(e) || (b.cssHooks[e + t].set = on) }); var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i; b.fn.extend({ serialize: function () { return b.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = b.prop(this, "elements"); return e ? b.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e)) }).map(function (e, t) { var n = b(this).val(); return null == n ? null : b.isArray(n) ? b.map(n, function (e) { return { name: t.name, value: e.replace(fn, "\r\n")} }) : { name: t.name, value: n.replace(fn, "\r\n")} }).get() } }), b.param = function (e, n) { var r, i = [], o = function (e, t) { t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) }; if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function () { o(this.name, this.value) }); else for (r in e) gn(r, e[r], n, o); return i.join("&").replace(cn, "+") }; function gn(e, t, n, r) { var i; if (b.isArray(t)) b.each(t, function (t, i) { n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) }); else if (n || "object" !== b.type(t)) r(e, t); else for (i in t) gn(e + "[" + i + "]", t[i], n, r) } b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) { b.fn[t] = function (e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), b.fn.hover = function (e, t) { return this.mouseenter(e).mouseleave(t || e) }; var mn, yn, vn = b.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Cn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = b.fn.load, An = {}, jn = {}, Dn = "*/".concat("*"); try { yn = a.href } catch (Ln) { yn = o.createElement("a"), yn.href = "", yn = yn.href } mn = En.exec(yn.toLowerCase()) || []; function Hn(e) { return function (t, n) { "string" != typeof t && (n = t, t = "*"); var r, i = 0, o = t.toLowerCase().match(w) || []; if (b.isFunction(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } } function qn(e, n, r, i) { var o = {}, a = e === jn; function s(u) { var l; return o[u] = !0, b.each(e[u] || [], function (e, u) { var c = u(n, r, i); return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), s(c), !1) }), l } return s(n.dataTypes[0]) || !o["*"] && s("*") } function Mn(e, n) { var r, i, o = b.ajaxSettings.flatOptions || {}; for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]); return r && b.extend(!0, e, r), e } b.fn.load = function (e, n, r) { if ("string" != typeof e && Sn) return Sn.apply(this, arguments); var i, o, a, s = this, u = e.indexOf(" "); return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({ url: e, type: a, dataType: "html", data: n }).done(function (e) { o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e) }).complete(r && function (e, t) { s.each(r, o || [e.responseText, t, e]) }), this }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { b.fn[t] = function (e) { return this.on(t, e) } }), b.each(["get", "post"], function (e, n) { b[n] = function (e, r, i, o) { return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({ url: e, type: n, dataType: o, data: r, success: i }) } }), b.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yn, type: "GET", isLocal: Nn.test(mn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": e.String, "text html": !0, "text json": b.parseJSON, "text xml": b.parseXML }, flatOptions: { url: !0, context: !0} }, ajaxSetup: function (e, t) { return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e) }, ajaxPrefilter: Hn(An), ajaxTransport: Hn(jn), ajax: function (e, n) { "object" == typeof e && (n = e, e = t), n = n || {}; var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event, h = b.Deferred(), g = b.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, x = 0, T = "canceled", N = { readyState: 0, getResponseHeader: function (e) { var t; if (2 === x) { if (!c) { c = {}; while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2] } t = c[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function () { return 2 === x ? a : null }, setRequestHeader: function (e, t) { var n = e.toLowerCase(); return x || (e = v[n] = v[n] || e, y[e] = t), this }, overrideMimeType: function (e) { return x || (p.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (2 > x) for (t in e) m[t] = [m[t], e[t]]; else N.always(e[N.status]); return this }, abort: function (e) { var t = e || T; return l && l.abort(t), k(0, t), this } }; if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) return N; u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]); for (i in p.headers) N.setRequestHeader(i, p.headers[i]); if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort(); T = "abort"; for (i in { success: 1, error: 1, complete: 1 }) N[i](p[i]); if (l = qn(jn, p, n, N)) { N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function () { N.abort("timeout") }, p.timeout)); try { x = 1, l.send(y, k) } catch (C) { if (!(2 > x)) throw C; k(-1, C) } } else k(-1, "No Transport"); function k(e, n, r, i) { var c, y, v, w, T, C = n; 2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop"))) } return N }, getScript: function (e, n) { return b.get(e, t, n, "script") }, getJSON: function (e, t, n) { return b.get(e, t, n, "json") } }); function _n(e, n, r) { var i, o, a, s, u = e.contents, l = e.dataTypes, c = e.responseFields; for (s in c) s in r && (n[c[s]] = r[s]); while ("*" === l[0]) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type")); if (o) for (s in u) if (u[s] && u[s].test(o)) { l.unshift(s); break } if (l[0] in r) a = l[0]; else { for (s in r) { if (!l[0] || e.converters[s + " " + l[0]]) { a = s; break } i || (i = s) } a = a || i } return a ? (a !== l[0] && l.unshift(a), r[a]) : t } function Fn(e, t) { var n, r, i, o, a = {}, s = 0, u = e.dataTypes.slice(), l = u[0]; if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) for (i in e.converters) a[i.toLowerCase()] = e.converters[i]; for (; r = u[++s]; ) if ("*" !== r) { if ("*" !== l && l !== r) { if (i = a[l + " " + r] || a["* " + r], !i) for (n in a) if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) { i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r)); break } if (i !== !0) if (i && e["throws"]) t = i(t); else try { t = i(t) } catch (c) { return { state: "parsererror", error: i ? c : "No conversion from " + l + " to " + r} } } l = r } return { state: "success", data: t} } b.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (e) { return b.globalEval(e), e } } }), b.ajaxPrefilter("script", function (e) { e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), b.ajaxTransport("script", function (e) { if (e.crossDomain) { var n, r = o.head || b("head")[0] || o.documentElement; return { send: function (t, i) { n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")) }, r.insertBefore(n, r.firstChild) }, abort: function () { n && n.onload(t, !0) } } } }); var On = [], Bn = /(=)\?(?=&|$)|\?\?/; b.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = On.pop() || b.expando + "_" + vn++; return this[e] = !0, e } }), b.ajaxPrefilter("json jsonp", function (n, r, i) { var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data"); return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () { return s || b.error(o + " was not called"), s[0] }, n.dataTypes[0] = "json", a = e[o], e[o] = function () { s = arguments }, i.always(function () { e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t }), "script") : t }); var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () { var e; for (e in Pn) Pn[e](t, !0) }; function In() { try { return new e.XMLHttpRequest } catch (t) { } } function zn() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) { } } b.ajaxSettings.xhr = e.ActiveXObject ? function () { return !this.isLocal && In() || zn() } : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !!Rn && "withCredentials" in Rn, Rn = b.support.ajax = !!Rn, Rn && b.ajaxTransport(function (n) { if (!n.crossDomain || b.support.cors) { var r; return { send: function (i, o) { var a, s, u = n.xhr(); if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s]; n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"); try { for (s in i) u.setRequestHeader(s, i[s]) } catch (l) { } u.send(n.hasContent && n.data || null), r = function (e, i) { var s, l, c, p; try { if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) 4 !== u.readyState && u.abort(); else { p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText); try { c = u.statusText } catch (f) { c = "" } s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404 } } catch (d) { i || o(-1, d) } p && o(s, c, p, l) }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r() }, abort: function () { r && r(t, !0) } } } }); var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = { "*": [function (e, t) { var n, r, i = this.createTween(e, t), o = Yn.exec(t), a = i.cur(), s = +a || 0, u = 1, l = 20; if (o) { if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) { s = b.css(i.elem, e, !0) || n || 1; do u = u || ".5", s /= u, b.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l) } i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n } return i } ] }; function Kn() { return setTimeout(function () { Xn = t }), Xn = b.now() } function Zn(e, t) { b.each(t, function (t, n) { var r = (Qn[t] || []).concat(Qn["*"]), i = 0, o = r.length; for (; o > i; i++) if (r[i].call(e, t, n)) return }) } function er(e, t, n) { var r, i, o = 0, a = Gn.length, s = b.Deferred().always(function () { delete u.elem }), u = function () { if (i) return !1; var t = Xn || Kn(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; for (; u > a; a++) l.tweens[a].run(o); return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1) }, l = s.promise({ elem: e, props: b.extend({}, t), opts: b.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: Xn || Kn(), duration: n.duration, tweens: [], createTween: function (t, n) { var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r }, stop: function (t) { var n = 0, r = t ? l.tweens.length : 0; if (i) return this; for (i = !0; r > n; n++) l.tweens[n].run(1); return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this } }), c = l.props; for (tr(c, l.opts.specialEasing); a > o; o++) if (r = Gn[o].call(l, e, c, l.opts)) return r; return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always) } function tr(e, t) { var n, r, i, o, a; for (i in e) if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) { n = a.expand(n), delete e[r]; for (i in n) i in e || (e[i] = n[i], t[i] = o) } else t[r] = o } b.Animation = b.extend(er, { tweener: function (e, t) { b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" "); var n, r = 0, i = e.length; for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t) }, prefilter: function (e, t) { t ? Gn.unshift(e) : Gn.push(e) } }); function nr(e, t, n) { var r, i, o, a, s, u, l, c, p, f = this, d = e.style, h = {}, g = [], m = e.nodeType && nn(e); n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function () { c.unqueued || p() }), c.unqueued++, f.always(function () { f.always(function () { c.unqueued--, b.queue(e, "fx").length || c.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function () { d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2] })); for (i in t) if (a = t[i], Vn.exec(a)) { if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue; g.push(i) } if (o = g.length) { s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show() : f.done(function () { b(e).hide() }), f.done(function () { var t; b._removeData(e, "fxshow"); for (t in h) b.style(e, t, h[t]) }); for (i = 0; o > i; i++) r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0)) } } function rr(e, t, n, r, i) { return new rr.prototype.init(e, t, n, r, i) } b.Tween = rr, rr.prototype = { constructor: rr, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px") }, cur: function () { var e = rr.propHooks[this.prop]; return e && e.get ? e.get(this) : rr.propHooks._default.get(this) }, run: function (e) { var t, n = rr.propHooks[this.prop]; return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this } }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = { _default: { get: function (e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function (e) { b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, b.each(["toggle", "show", "hide"], function (e, t) { var n = b.fn[t]; b.fn[t] = function (e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i) } }), b.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(nn).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (e, t, n, r) { var i = b.isEmptyObject(e), o = b.speed(t, n, r), a = function () { var t = er(this, b.extend({}, e), o); a.finish = function () { t.stop(!0) }, (i || b._data(this, "finish")) && t.stop(!0) }; return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a) }, stop: function (e, n, r) { var i = function (e) { var t = e.stop; delete e.stop, t(r) }; return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () { var t = !0, n = null != e && e + "queueHooks", o = b.timers, a = b._data(this); if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]); for (n = o.length; n--; ) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1)); (t || !r) && b.dequeue(this, e) }) }, finish: function (e) { return e !== !1 && (e = e || "fx"), this.each(function () { var t, n = b._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = b.timers, a = r ? r.length : 0; for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this); delete n.finish }) } }); function ir(e, t) { var n, r = { height: e }, i = 0; for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e; return t && (r.opacity = r.width = e), r } b.each({ slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle"} }, function (e, t) { b.fn[e] = function (e, n, r) { return this.animate(t, e, n, r) } }), b.speed = function (e, t, n) { var r = e && "object" == typeof e ? b.extend({}, e) : { complete: n || !n && t || b.isFunction(e) && e, duration: e, easing: n && t || t && !b.isFunction(t) && t }; return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () { b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue) }, r }, b.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 } }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function () { var e, n = b.timers, r = 0; for (Xn = b.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1); n.length || b.fx.stop(), Xn = t }, b.fx.timer = function (e) { e() && b.timers.push(e) && b.fx.start() }, b.fx.interval = 13, b.fx.start = function () { Un || (Un = setInterval(b.fx.tick, b.fx.interval)) }, b.fx.stop = function () { clearInterval(Un), Un = null }, b.fx.speeds = { slow: 600, fast: 200, _default: 400 }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function (e) { return b.grep(b.timers, function (t) { return e === t.elem }).length }), b.fn.offset = function (e) { if (arguments.length) return e === t ? this : this.each(function (t) { b.offset.setOffset(this, e, t) }); var n, r, o = { top: 0, left: 0 }, a = this[0], s = a && a.ownerDocument; if (s) return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), { top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : o }, b.offset = { setOffset: function (e, t, n) { var r = b.css(e, "position"); "static" === r && (e.style.position = "relative"); var i = b(e), o = i.offset(), a = b.css(e, "top"), s = b.css(e, "left"), u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1, l = {}, c = {}, p, f; u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l) } }, b.fn.extend({ position: function () { if (this[0]) { var e, t, n = { top: 0, left: 0 }, r = this[0]; return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - b.css(r, "marginTop", !0), left: t.left - n.left - b.css(r, "marginLeft", !0)} } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent || o.documentElement; while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent; return e || o.documentElement }) } }), b.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, n) { var r = /Y/.test(n); b.fn[e] = function (i) { return b.access(this, function (e, i, o) { var a = or(e); return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, t) }, e, i, arguments.length, null) } }); function or(e) { return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 } b.each({ Height: "height", Width: "width" }, function (e, n) { b.each({ padding: "inner" + e, content: n, "": "outer" + e }, function (r, i) { b.fn[i] = function (i, o) { var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border"); return b.access(this, function (n, r, i) { var o; return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s) }, n, a ? i : t, a, null) } }) }), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () { return b })
})(window);

(function($) {

    $('#header__icon').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('with--sidebar');
    });

    $('#site-cache').click(function (e) {
        $('body').removeClass('with--sidebar');
    })

    // $('#sos').click(function(e){
    // 	 e.preventDefault();
    //      $( '#ra' ).toggleClass( "visible" );

    // });

    $('#sos').click(function (e) {
        e.preventDefault();
        $('#ra').toggleClass("visible");


        if ($('#ra').hasClass('visible')) {
            $('.peloton').addClass("blur");
            $('.miniartistes').addClass("blur");

        } else {

            $('.peloton').removeClass("blur");
            $('.miniartistes').removeClass("blur");

        }


        var slideoutMenu = $('.slideout-menu');
        var slideoutMenuWidth = $('.slideout-menu').width();

        slideoutMenu.animate({
            left: -slideoutMenuWidth
        }, 250);

    });


    $('#sva').click(function (e) {
        e.preventDefault();
        $("#search_sub").toggleClass("visible");
    });

    // $('#ar').click(function(e){
    //         $( "#aaa" ).hide();
    //      $( "#bbb" ).show();
    // });

    $(':checkbox').change(function () {

        if ((!$('#art ').is(':checked') && !$('#oeu ').is(':checked') && !$('#eve ').is(':checked')) || ($('#art ').is(':checked') && $('#oeu ').is(':checked') && $('#eve ').is(':checked'))) {
            $('#aaa ').show();
            $('#bbb ').hide();
            $('#ccc ').hide();
            $('#eee ').hide();
            $('#fff ').hide();
        }
        else {
            if ($('#eve ').is(':checked') && !$('#art ').is(':checked') && !$('#oeu ').is(':checked')) {
                $('#aaa ').hide();
                $('#bbb ').hide();
                $('#ccc ').show();
                $('#eee ').hide();
                $('#fff ').hide();
            } else {
                if (($('#art ').is(':checked') && $('#oeu ').is(':checked')) && !$('#eve ').is(':checked')) {
                    $('#aaa ').hide();
                    $('#bbb ').show();
                    $('#ccc ').hide();
                    $('#eee ').hide();
                    $('#fff ').hide();
                }
                else {
                    if (($('#art ').is(':checked') && !$('#oeu ').is(':checked')) && !$('#eve ').is(':checked')) {
                        $('#aaa ').hide();
                        $('#bbb ').hide();
                        $('#ccc ').hide();
                        $('#eee ').show();
                        $('#fff ').hide();
                    }
                    else {
                        if ((!$('#art ').is(':checked') && $('#oeu ').is(':checked')) && !$('#eve ').is(':checked')) {
                            $('#aaa ').hide();
                            $('#bbb ').hide();
                            $('#ccc ').hide();
                            $('#eee ').hide();
                            $('#fff ').show();
                        }
                    }
                }


            }
        }
    });


    $(':checkbox').change(function () {

        if ((!$('#miniart ').is(':checked') && !$('#minioeu ').is(':checked') && !$('#minieve ').is(':checked')) || ($('#miniart ').is(':checked') && $('#minioeu ').is(':checked') && $('#minieve ').is(':checked'))) {
            $('#kkk ').show();
            $('#hhh ').hide();
            $('#ddd ').hide();
        } else {
            if ($('#minieve ').is(':checked') && !$('#miniart ').is(':checked') && !$('#minioeu ').is(':checked')) {
                $('#kkk ').hide();
                $('#hhh ').hide();
                $('#ddd ').show();
            } else {
                if (($('#miniart ').is(':checked') || $('#minioeu ').is(':checked')) && !$('#minieve ').is(':checked')) {
                    $('#kkk ').hide();
                    $('#hhh ').show();
                    $('#ddd ').hide();
                } else {
                    $('#kkk ').show();
                    $('#hhh ').hide();
                    $('#ddd ').hide();
                }
            }
        }


    });


})(jQuery);

(function ( $ ) {
	
	$.fn.niceselect = function()
	{
		
		return this.each(function(index,value)
		{
			/*SET VARIABLES
			============================*/
			var name = $(this).attr('name')
			var select = $(this);
			var num = index;
			var multi = false;
			var multix = '';
			var type= 'radio';
			var required = '';
			var classes = '';
			var selected = '';
			var placeholder = 'Select';
			
			if(select.attr('multiple') !== undefined)
			{
				multi = true;
				multix = '[]';
				type= 'checkbox';
			}		
			
			if($(this).attr('class') !== undefined)
			{
				var classes = $(this).attr('class');
			}
			
			if(select.find('[value="placeholder"]').length > 0)
			{
				placeholder = select.find('[value="placeholder"]').html();
			}
			
			if(typeof( select.attr('required') ) != 'undefined')
			{
				required = 'required';
			}
			
			/*WRAP SELECT IN DIV
			-------------------------*/
			select.wrap('<div class="select_style '+classes+'"/>');
			$('<span class="selectcon">&nbsp;</span>').insertBefore(select);
			
			
			/*CREATE PLACEHOLDER + OPTION BOX
			--------------------------------------------*/
			$('<div class="niceselect '+name+'" data-multi="'+multi+'"><p class="top">'+placeholder+'</p><div class="value_wrapper"></div></div>').insertBefore(this)			
			
			
			/*CREATE OPTGROUP BOXES
			--------------------------------------------*/
			
			if(select.find('optgroup').length > 0)
			{
				select.find('optgroup').each(function(key, opt){
					select.siblings('.niceselect').children('.value_wrapper').append('<div class="opt opt'+key+'"><span class="optTitle">'+$(opt).attr('label')+'</span></div>')
					
						$(opt).find('option').each(function(index,value){
							
							
							var val;
							if($(this).val() == '')
							{ 
								
								 val = $(this).html();
							}
							else
							{
								 val = $(this).val();
							}
							
							var txt = $(this).html();
							
							
							selected = '';
							if(typeof( $(this).attr('selected') ) != 'undefined')
							{
								selected = 'checked';
								select.siblings('.niceselect').find('p.top').html(txt)
							}
							
							
							select.siblings('.niceselect').find('.opt'+key).append('<div class="values"><input type="'+type+'"  '+required+' '+selected+' style=" pointer-events: none;" name="'+name+multix+'" value="'+val+'" data-text="'+txt+'" id="'+index+name+index+'" /> <label class="nice_label" >'+txt+'</label></div>')

						})
					})
				
				
			}
			/*CREATE GENERAL OPTION FIELDS*/
			else
			{
				select.find('option').each(function(index,value){
							
						var $this = $(this);
						var val;
						if($(this).val() == '')
						{ 
							
							 val = $(this).html();
						}
						else
						{
							 val = $(this).val();
						}
						
						var txt = $(this).html();
						selected = '';
						if(typeof( $(this).attr('selected') ) != 'undefined')
						{
							selected = 'checked';
							select.siblings('.niceselect').find('p.top').html(txt)
						}
						
						
						select.siblings('.niceselect').children('.value_wrapper').append('<div class="values"><input type="'+type+'" '+required+' '+selected+' style=" pointer-events: none;" name="'+name+multix+'" value="'+val+'" data-text="'+txt+'" id="'+index+name+index+'" /> <label class="nice_label" >'+txt+'</label></div>')
						
					})

			}
			
			select.remove()
			select.attr('name','blobla')
			
			
			
			/*BIND CLICK FUNCTIONS (hide / show menu)
			===========================================*/
			$('body').on('click',function()
			{
				$('.niceselect .value_wrapper').hide();
				
				$('.select_style').removeClass('active')
			})
			
			$('body').on('click','.niceselect',function(e)
			{
				e.stopImmediatePropagation();
				if($(this).parent().hasClass('active'))
				{
					$(this).find('.value_wrapper').hide();
					$(this).parent().removeClass('active');
					console.log('here')
				}
				else
				{
					//$('.niceselect .value_wrapper').hide();
					$(this).children('.value_wrapper').show()
					$(this).parent().addClass('active')
				}
			})
			
			
			/*BIND CLICK FUNCTIONS (check values / update visual)
			=====================================================*/			
			
			$('body').on('click','.niceselect .value_wrapper .values',function(e){
				e.stopImmediatePropagation();
				var checkBoxes = $(this).find('input');
				 
				var par = $(this).parent().parent();
				if(par.attr('data-multi') == 'true')
				{
					
					 
					 if($(this).hasClass('active'))
					 {
					 	$(this).removeClass('active');
					 }
					 else
					 {
					 	$(this).addClass('active');
					 }
					
					 
				}
				else
				{
					 $(this).parent().parent().find('input[checked]').removeAttr('checked')
					 $(this).parent().parent().find('.active').removeClass('active');
					 
					 if($(this).hasClass('active'))
					 {
					 	$(this).removeClass('active');
					 }
					 else
					 {
					 	$(this).addClass('active');
					 }
					 
					 $('.niceselect .value_wrapper').hide();
					 $('.select_style').removeClass('active')
					 
				}
				 
				 
				 checkBoxes.prop("checked", !checkBoxes.prop("checked"));
				 
				 checkBoxes.trigger('change')
			})
			$('body').on('click','.niceselect .value_wrapper .values label',function(e){e.preventDefault()})
			$('body').on('change','.niceselect .values input',function(e){
				
				var par = $(this).closest('.niceselect')
				if(par.attr('data-multi') == 'true')
				{
					var number = par.find('input:checked').length;

					par.find('p.top').html(number + ' Selected')				
				}
				else
				{
					par.find('p.top').html($(this).attr('data-text'))
				}
			})

			
			
			
			/*SEARCH OPTIONS IN SELECT BOX
			----------------------------------------*/
		
		
		var string = '';
		$('body').on('keypress',function(e){
			
			if($('.value_wrapper').is(':visible'))
			{
				var clearString;
				$('.value_wrapper .highlight').removeClass('highlight')
				
				clearInterval(clearString)
				string = string+String.fromCharCode(e.which);
				
				if(string.length == 1)
				{
					string = string.toUpperCase();
				}			
				
				var thing = $('.value_wrapper:visible').find('label:contains('+string+')').first();
				
				
				$(thing).parent().addClass('highlight')
				if($('.value_wrapper:visible').find('.highlight').length > 0)
				{
					$('.value_wrapper:visible').stop().scrollTop($('.value_wrapper:visible').scrollTop() + $('.highlight').position().top)
				}
				clearString = setTimeout(function(){string = ''},500);
			}
			
			
			
		})

			
			
			
		})			
	}
	
}( jQuery ));

/* =========================================================
 * bootstrap-datepicker.js 
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
 
!function( $ ) {
	
	// Picker object
	
	var Datepicker = function(element, options){
		this.element = $(element);
		this.format = DPGlobal.parseFormat(options.format||this.element.data('date-format')||'dd/mm/yyyy');
		this.picker = $(DPGlobal.template)
							.appendTo('body')
							.on({
								click: $.proxy(this.click, this)//,
								//mousedown: $.proxy(this.mousedown, this)
							});
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on') : false;
		
		if (this.isInput) {
			this.element.on({
				focus: $.proxy(this.show, this),
				//blur: $.proxy(this.hide, this),
				keyup: $.proxy(this.update, this)
			});
		} else {
			if (this.component){
				this.component.on('click', $.proxy(this.show, this));
			} else {
				this.element.on('click', $.proxy(this.show, this));
			}
		}
	
		this.minViewMode = options.minViewMode||this.element.data('date-minviewmode')||0;
		if (typeof this.minViewMode === 'string') {
			switch (this.minViewMode) {
				case 'months':
					this.minViewMode = 1;
					break;
				case 'years':
					this.minViewMode = 2;
					break;
				default:
					this.minViewMode = 0;
					break;
			}
		}
		this.viewMode = options.viewMode||this.element.data('date-viewmode')||0;
		if (typeof this.viewMode === 'string') {
			switch (this.viewMode) {
				case 'months':
					this.viewMode = 1;
					break;
				case 'years':
					this.viewMode = 2;
					break;
				default:
					this.viewMode = 0;
					break;
			}
		}
		this.startViewMode = this.viewMode;
		this.weekStart = options.weekStart||this.element.data('date-weekstart')||0;
		this.weekEnd = this.weekStart === 0 ? 6 : this.weekStart - 1;
		this.onRender = options.onRender;
		this.fillDow();
		this.fillMonths();
		this.update();
		this.showMode();
	};
	
	Datepicker.prototype = {
		constructor: Datepicker,
		
		show: function(e) {
			this.picker.show();
			this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
			this.place();
			$(window).on('resize', $.proxy(this.place, this));
			if (e ) {
				e.stopPropagation();
				e.preventDefault();
			}
			if (!this.isInput) {
			}
			var that = this;
			$(document).on('mousedown', function(ev){
				if ($(ev.target).closest('.datepicker').length == 0) {
					that.hide();
				}
			});
			this.element.trigger({
				type: 'show',
				date: this.date
			});
		},
		
		hide: function(){
			this.picker.hide();
			$(window).off('resize', this.place);
			this.viewMode = this.startViewMode;
			this.showMode();
			if (!this.isInput) {
				$(document).off('mousedown', this.hide);
			}
			//this.set();
			this.element.trigger({
				type: 'hide',
				date: this.date
			});
		},
		
		set: function() {
			var formated = DPGlobal.formatDate(this.date, this.format);
			if (!this.isInput) {
				if (this.component){
					this.element.find('input').prop('value', formated);
				}
				this.element.data('date', formated);
			} else {
				this.element.prop('value', formated);
			}
		},
		
		setValue: function(newDate) {
			if (typeof newDate === 'string') {
				this.date = DPGlobal.parseDate(newDate, this.format);
			} else {
				this.date = new Date(newDate);
			}
			this.set();
			this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
			this.fill();
		},
		
		place: function(){
			var offset = this.component ? this.component.offset() : this.element.offset();
			this.picker.css({
				top: offset.top + this.height,
				left: offset.left
			});
		},
		
		update: function(newDate){
			this.date = DPGlobal.parseDate(
				typeof newDate === 'string' ? newDate : (this.isInput ? this.element.prop('value') : this.element.data('date')),
				this.format
			);
			this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
			this.fill();
		},
		
		fillDow: function(){
			var dowCnt = this.weekStart;
			var html = '<tr>';
			while (dowCnt < this.weekStart + 7) {
				html += '<th class="dow">'+DPGlobal.dates.daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},
		
		fillMonths: function(){
			var html = '';
			var i = 0
			while (i < 12) {
				html += '<span class="month">'+DPGlobal.dates.monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').append(html);
		},
		
		fill: function() {
			var d = new Date(this.viewDate),
				year = d.getFullYear(),
				month = d.getMonth(),
				currentDate = this.date.valueOf();
			this.picker.find('.datepicker-days th:eq(1)')
						.text(DPGlobal.dates.months[month]+' '+year);
			var prevMonth = new Date(year, month-1, 28,0,0,0,0),
				day = DPGlobal.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());
			prevMonth.setDate(day);
			prevMonth.setDate(day - (prevMonth.getDay() - this.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setDate(nextMonth.getDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName,
				prevY,
				prevM;
			while(prevMonth.valueOf() < nextMonth) {
				if (prevMonth.getDay() === this.weekStart) {
					html.push('<tr>');
				}
				clsName = this.onRender(prevMonth);
				prevY = prevMonth.getFullYear();
				prevM = prevMonth.getMonth();
				if ((prevM < month &&  prevY === year) ||  prevY < year) {
					clsName += ' old';
				} else if ((prevM > month && prevY === year) || prevY > year) {
					clsName += ' new';
				}
				if (prevMonth.valueOf() === currentDate) {
					clsName += ' active';
				}
				html.push('<td class="day '+clsName+'">'+prevMonth.getDate() + '</td>');
				if (prevMonth.getDay() === this.weekEnd) {
					html.push('</tr>');
				}
				prevMonth.setDate(prevMonth.getDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
			var currentYear = this.date.getFullYear();
			
			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');
			if (currentYear === year) {
				months.eq(this.date.getMonth()).addClass('active');
			}
			
			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			for (var i = -1; i < 11; i++) {
				html += '<span class="year'+(i === -1 || i === 10 ? ' old' : '')+(currentYear === year ? ' active' : '')+'">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},
		
		click: function(e) {
			e.stopPropagation();
			e.preventDefault();
			var target = $(e.target).closest('span, td, th');
			if (target.length === 1) {
				switch(target[0].nodeName.toLowerCase()) {
					case 'th':
						switch(target[0].className) {
							case 'switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								this.viewDate['set'+DPGlobal.modes[this.viewMode].navFnc].call(
									this.viewDate,
									this.viewDate['get'+DPGlobal.modes[this.viewMode].navFnc].call(this.viewDate) + 
									DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1)
								);
								this.fill();
								this.set();
								break;
						}
						break;
					case 'span':
						if (target.is('.month')) {
							var month = target.parent().find('span').index(target);
							this.viewDate.setMonth(month);
						} else {
							var year = parseInt(target.text(), 10)||0;
							this.viewDate.setFullYear(year);
						}
						if (this.viewMode !== 0) {
							this.date = new Date(this.viewDate);
							this.element.trigger({
								type: 'changeDate',
								date: this.date,
								viewMode: DPGlobal.modes[this.viewMode].clsName
							});
						}
						this.showMode(-1);
						this.fill();
						this.set();
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')){
							var day = parseInt(target.text(), 10)||1;
							var month = this.viewDate.getMonth();
							if (target.is('.old')) {
								month -= 1;
							} else if (target.is('.new')) {
								month += 1;
							}
							var year = this.viewDate.getFullYear();
							this.date = new Date(year, month, day,0,0,0,0);
							this.viewDate = new Date(year, month, Math.min(28, day),0,0,0,0);
							this.fill();
							this.set();
							this.element.trigger({
								type: 'changeDate',
								date: this.date,
								viewMode: DPGlobal.modes[this.viewMode].clsName
							});
						}
						break;
				}
			}
		},
		
		mousedown: function(e){
			e.stopPropagation();
			e.preventDefault();
		},
		
		showMode: function(dir) {
			if (dir) {
				this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + dir));
			}
			this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
		}
	};
	
	$.fn.datepicker = function ( option, val ) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data) {
				$this.data('datepicker', (data = new Datepicker(this, $.extend({}, $.fn.datepicker.defaults,options))));
			}
			if (typeof option === 'string') data[option](val);
		});
	};

	$.fn.datepicker.defaults = {
		onRender: function(date) {
			return '';
		}
	};
	$.fn.datepicker.Constructor = Datepicker;
	
	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		dates:{
			days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
			daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
			daysMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"],
			months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
			monthsShort: ["Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Juil", "Aoû", "Sep", "Oct", "Nov", "Dec"]
		},
		isLeapYear: function (year) {
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
		},
		getDaysInMonth: function (year, month) {
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
		},
		parseFormat: function(format){
			var separator = format.match(/[.\/\-\s].*?/),
				parts = format.split(/\W+/);
			if (!separator || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separator: separator, parts: parts};
		},
		parseDate: function(date, format) {
			var parts = date.split(format.separator),
				date = new Date(),
				val;
			date.setHours(0);
			date.setMinutes(0);
			date.setSeconds(0);
			date.setMilliseconds(0);
			if (parts.length === format.parts.length) {
				var year = date.getFullYear(), day = date.getDate(), month = date.getMonth();
				for (var i=0, cnt = format.parts.length; i < cnt; i++) {
					val = parseInt(parts[i], 10)||1;
					switch(format.parts[i]) {
						case 'dd':
						case 'd':
							day = val;
							date.setDate(val);
							break;
						case 'mm':
						case 'm':
							month = val - 1;
							date.setMonth(val - 1);
							break;
						case 'yy':
							year = 2000 + val;
							date.setFullYear(2000 + val);
							break;
						case 'yyyy':
							year = val;
							date.setFullYear(val);
							break;
					}
				}
				date = new Date(year, month, day, 0 ,0 ,0);
			}
			return date;
		},
		formatDate: function(date, format){
			var val = {
				d: date.getDate(),
				m: date.getMonth() + 1,
				yy: date.getFullYear().toString().substring(2),
				yyyy: date.getFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			var date = [];
			for (var i=0, cnt = format.parts.length; i < cnt; i++) {
				date.push(val[format.parts[i]]);
			}
			return date.join(format.separator);
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev">&lsaquo;</th>'+
								'<th colspan="5" class="switch"></th>'+
								'<th class="next">&rsaquo;</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
	};
	DPGlobal.template = '<div class="datepicker dropdown-menu">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
								'</table>'+
							'</div>'+
						'</div>';

}( window.jQuery );


/*!
 * Waterwheel Carousel
 * Version 2.3.0
 * http://www.bkosborne.com
 *
 * Copyright 2011-2013 Brian Osborne
 * Dual licensed under GPLv3 or MIT
 * Copies of the licenses have been distributed
 * with this plugin.
 *
 * Plugin written by Brian Osborne
 * for use with the jQuery JavaScript Framework
 * http://www.jquery.com
 */
;(function ($) {
  'use strict';

  $.fn.waterwheelCarousel = function (startingOptions) {

    // Adds support for intializing multiple carousels from the same selector group
    if (this.length > 1) {
      this.each(function() {
        $(this).waterwheelCarousel(startingOptions);
      });
      return this; // allow chaining
    }

    var carousel = this;
    var options = {};
    var data = {};

    function initializeCarouselData() {
      data = {
        itemsContainer:         $(carousel),
        totalItems:             $(carousel).find('img').length,
        containerWidth:         $(carousel).width(),
        containerHeight:        $(carousel).height(),
        currentCenterItem:      null,
        previousCenterItem:     null,
        items:                  [],
        calculations:           [],
        carouselRotationsLeft:  0,
        currentlyMoving:        false,
        itemsAnimating:         0,
        currentSpeed:           options.speed,
        intervalTimer:          null,
        currentDirection:       'forward',
        leftItemsCount:         0,
        rightItemsCount:        0,
        performingSetup:        true
      };
      data.itemsContainer.find('img').removeClass(options.activeClassName);
    }

    /**
     * This function will set the autoplay for the carousel to
     * automatically rotate it given the time in the options
     * Can clear the autoplay by passing in true
     */
    function autoPlay(stop) {
      // clear timer
      clearTimeout(data.autoPlayTimer);
      // as long as no stop command, and autoplay isn't zeroed...
      if (!stop && options.autoPlay !== 0) {
        // set timer...
        data.autoPlayTimer = setTimeout(function () {
          // to move the carousl in either direction...
          if (options.autoPlay > 0) {
            moveOnce('forward');
          } else {
            moveOnce('backward');
          }
        }, Math.abs(options.autoPlay));
      }
    }

    /**
     * This function will preload all the images in the carousel before
     * calling the passed in callback function. This is only used so we can
     * properly determine the width and height of the items. This is not needed
     * if a user instead manually specifies that information.
     */
    function preload(callback) {
      if (options.preloadImages === false) {
        callback();
        return;
      }

      var $imageElements = data.itemsContainer.find('img'), loadedImages = 0, totalImages = $imageElements.length;

      $imageElements.each(function () {
        $(this).bind('load', function () {
          // Add to number of images loaded and see if they are all done yet
          loadedImages += 1;
          if (loadedImages === totalImages) {
            // All done, perform callback
            callback();
            return;
          }
        });
        // May need to manually reset the src to get the load event to fire
        // http://stackoverflow.com/questions/7137737/ie9-problems-with-jquery-load-event-not-firing
        $(this).attr('src', $(this).attr('src'));

        // If browser has cached the images, it may not call trigger a load. Detect this and do it ourselves
        if (this.complete) {
          $(this).trigger('load');
        }
      });
    }

    /**
     * Makes a record of the original width and height of all the items in the carousel.
     * If we re-intialize the carousel, these values can be used to re-establish their
     * original dimensions.
     */
    function setOriginalItemDimensions() {
      data.itemsContainer.find('img').each(function () {
        if ($(this).data('original_width') == undefined || options.forcedImageWidth > 0) {
          $(this).data('original_width', $(this).width());
        }
        if ($(this).data('original_height') == undefined || options.forcedImageHeight > 0) {
          $(this).data('original_height', $(this).height());
        }
      });
    }

    /**
     * Users can pass in a specific width and height that should be applied to every image.
     * While this option can be used in conjunction with the image preloader, the intended
     * use case is for when the preloader is turned off and the images don't have defined
     * dimensions in CSS. The carousel needs dimensions one way or another to work properly.
     */
    function forceImageDimensionsIfEnabled() {
      if (options.forcedImageWidth && options.forcedImageHeight) {
        data.itemsContainer.find('img').each(function () {
          $(this).width(options.forcedImageWidth);
          $(this).height(options.forcedImageHeight);
        });
      }
    }

    /**
     * For each "visible" item slot (# of flanking items plus the middle),
     * we pre-calculate all of the properties that the item should possess while
     * occupying that slot. This saves us some time during the actual animation.
     */
    function preCalculatePositionProperties() {
      // The 0 index is the center item in the carousel
      var $firstItem = data.itemsContainer.find('img:first');

      data.calculations[0] = {
        distance: 0,
        offset:   0,
        opacity:  1
      }

      // Then, for each number of flanking items (plus one more, see below), we
      // perform the calcations based on our user options
      var horizonOffset = options.horizonOffset;
      var separation = options.separation;
      for (var i = 1; i <= options.flankingItems + 2; i++) {
        if (i > 1) {
          horizonOffset *= options.horizonOffsetMultiplier;
          separation *= options.separationMultiplier;
        }
        data.calculations[i] = {
          distance: data.calculations[i-1].distance + separation,
          offset:   data.calculations[i-1].offset + horizonOffset,
          opacity:  data.calculations[i-1].opacity * options.opacityMultiplier
        }
      }
      // We performed 1 extra set of calculations above so that the items that
      // are moving out of sight (based on # of flanking items) gracefully animate there
      // However, we need them to animate to hidden, so we set the opacity to 0 for
      // that last item
      if (options.edgeFadeEnabled) {
        data.calculations[options.flankingItems+1].opacity = 0;
      } else {
        data.calculations[options.flankingItems+1] = {
          distance: 0,
          offset: 0,
          opacity: 0
        }
      }
    }

    /**
     * Here we prep the carousel and its items, like setting default CSS
     * attributes. All items start in the middle position by default
     * and will "fan out" from there during the first animation
     */
    function setupCarousel() {
      // Fill in a data array with jQuery objects of all the images
      data.items = data.itemsContainer.find('img');
      for (var i = 0; i < data.totalItems; i++) {
        data.items[i] = $(data.items[i]);
      }

      // May need to set the horizon if it was set to auto
      if (options.horizon === 0) {
        if (options.orientation === 'horizontal') {
          options.horizon = data.containerHeight / 2;
        } else {
          options.horizon = data.containerWidth / 2;
        }
      }

      // Default all the items to the center position
      data.itemsContainer
        .css('position','relative')
        .find('img')
          .each(function () {
            // Figure out where the top and left positions for center should be
            var centerPosLeft, centerPosTop;
            if (options.orientation === 'horizontal') {
              centerPosLeft = (data.containerWidth / 2) - ($(this).data('original_width') / 2);
              centerPosTop = options.horizon - ($(this).data('original_height') / 2);
            } else {
              centerPosLeft = options.horizon - ($(this).data('original_width') / 2);
              centerPosTop = (data.containerHeight / 2) - ($(this).data('original_height') / 2);
            }
            $(this)
              // Apply positioning and layering to the images
              .css({
                'left': centerPosLeft,
                'top': centerPosTop,
                'visibility': 'visible',
                'position': 'absolute',
                'z-index': 0,
                'opacity': 0
              })
              // Give each image a data object so it remembers specific data about
              // it's original form
              .data({
                top:             centerPosTop,
                left:            centerPosLeft,
                oldPosition:     0,
                currentPosition: 0,
                depth:           0,
                opacity:         0
              })
              // The image has been setup... Now we can show it
              .show();
          });
    }

    /**
     * All the items to the left and right of the center item need to be
     * animated to their starting positions. This function will
     * figure out what items go where and will animate them there
     */
    function setupStarterRotation() {
      options.startingItem = (options.startingItem === 0) ? Math.round(data.totalItems / 2) : options.startingItem;

      data.rightItemsCount = Math.ceil((data.totalItems-1) / 2);
      data.leftItemsCount = Math.floor((data.totalItems-1) / 2);

      // We are in effect rotating the carousel, so we need to set that
      data.carouselRotationsLeft = 1;

      // Center item
      moveItem(data.items[options.startingItem-1], 0);
      data.items[options.startingItem-1].css('opacity', 1);

      // All the items to the right of center
      var itemIndex = options.startingItem - 1;
      for (var pos = 1; pos <= data.rightItemsCount; pos++) {
        (itemIndex < data.totalItems - 1) ? itemIndex += 1 : itemIndex = 0;

        data.items[itemIndex].css('opacity', 1);
        moveItem(data.items[itemIndex], pos);
      }

      // All items to left of center
      var itemIndex = options.startingItem - 1;
      for (var pos = -1; pos >= data.leftItemsCount*-1; pos--) {
        (itemIndex > 0) ? itemIndex -= 1 : itemIndex = data.totalItems - 1;

        data.items[itemIndex].css('opacity', 1);
        moveItem(data.items[itemIndex], pos);
      }
    }

    /**
     * Given the item and position, this function will calculate the new data
     * for the item. One the calculations are done, it will store that data in
     * the items data object
     */
    function performCalculations($item, newPosition) {
      var newDistanceFromCenter = Math.abs(newPosition);

      // Distance to the center
      if (newDistanceFromCenter < options.flankingItems + 1) {
        var calculations = data.calculations[newDistanceFromCenter];
      } else {
        var calculations = data.calculations[options.flankingItems + 1];
      }

      var distanceFactor = Math.pow(options.sizeMultiplier, newDistanceFromCenter)
      var newWidth = distanceFactor * $item.data('original_width');
      var newHeight = distanceFactor * $item.data('original_height');
      var widthDifference = Math.abs($item.width() - newWidth);
      var heightDifference = Math.abs($item.height() - newHeight);

      var newOffset = calculations.offset
      var newDistance = calculations.distance;
      if (newPosition < 0) {
        newDistance *= -1;
      }

      if (options.orientation == 'horizontal') {
        var center = data.containerWidth / 2;
        var newLeft = center + newDistance - (newWidth / 2);
        var newTop = options.horizon - newOffset - (newHeight / 2);
      } else {
        var center = data.containerHeight / 2;
        var newLeft = options.horizon - newOffset - (newWidth / 2);
        var newTop = center + newDistance - (newHeight / 2);
      }

      var newOpacity;
      if (newPosition === 0) {
        newOpacity = 1;
      } else {
        newOpacity = calculations.opacity;
      }

      // Depth will be reverse distance from center
      var newDepth = options.flankingItems + 2 - newDistanceFromCenter;

      $item.data('width',newWidth);
      $item.data('height',newHeight);
      $item.data('top',newTop);
      $item.data('left',newLeft);
      $item.data('oldPosition',$item.data('currentPosition'));
      $item.data('depth',newDepth);
      $item.data('opacity',newOpacity);
    }

    function moveItem($item, newPosition) {
      // Only want to physically move the item if it is within the boundaries
      // or in the first position just outside either boundary
      if (Math.abs(newPosition) <= options.flankingItems + 1) {
        performCalculations($item, newPosition);

        data.itemsAnimating++;

        $item
          .css('z-index',$item.data().depth)
          // Animate the items to their new position values
          .animate({
            left:    $item.data().left,
            width:   $item.data().width,
            height:  $item.data().height,
            top:     $item.data().top,
            opacity: $item.data().opacity
          }, data.currentSpeed, options.animationEasing, function () {
            // Animation for the item has completed, call method
            itemAnimationComplete($item, newPosition);
          });

      } else {
        $item.data('currentPosition', newPosition)
        // Move the item to the 'hidden' position if hasn't been moved yet
        // This is for the intitial setup
        if ($item.data('oldPosition') === 0) {
          $item.css({
            'left':    $item.data().left,
            'width':   $item.data().width,
            'height':  $item.data().height,
            'top':     $item.data().top,
            'opacity': $item.data().opacity,
            'z-index': $item.data().depth
          });
        }
      }

    }

    /**
     * This function is called once an item has finished animating to its
     * given position. Several different statements are executed here, such as
     * dealing with the animation queue
     */
    function itemAnimationComplete($item, newPosition) {
      data.itemsAnimating--;

      $item.data('currentPosition', newPosition);

      // Keep track of what items came and left the center position,
      // so we can fire callbacks when all the rotations are completed
      if (newPosition === 0) {
        data.currentCenterItem = $item;
      }

      // all items have finished their rotation, lets clean up
      if (data.itemsAnimating === 0) {
        data.carouselRotationsLeft -= 1;
        data.currentlyMoving = false;

        // If there are still rotations left in the queue, rotate the carousel again
        // we pass in zero because we don't want to add any additional rotations
        if (data.carouselRotationsLeft > 0) {
          rotateCarousel(0);
        // Otherwise there are no more rotations and...
        } else {
          // Reset the speed of the carousel to original
          data.currentSpeed = options.speed;

          data.currentCenterItem.addClass(options.activeClassName);

          if (data.performingSetup === false) {
            options.movedToCenter(data.currentCenterItem);
            options.movedFromCenter(data.previousCenterItem);
          }

          data.performingSetup = false;
          // reset & initate the autoPlay
          autoPlay();
        }
      }
    }

    /**
     * Function called to rotate the carousel the given number of rotations
     * in the given direciton. Will check to make sure the carousel should
     * be able to move, and then adjust speed and move items
     */
    function rotateCarousel(rotations) {
      // Check to see that a rotation is allowed
      if (data.currentlyMoving === false) {

        // Remove active class from the center item while we rotate
        data.currentCenterItem.removeClass(options.activeClassName);

        data.currentlyMoving = true;
        data.itemsAnimating = 0;
        data.carouselRotationsLeft += rotations;
        
        if (options.quickerForFurther === true) {
          // Figure out how fast the carousel should rotate
          if (rotations > 1) {
            data.currentSpeed = options.speed / rotations;
          }
          // Assure the speed is above the minimum to avoid weird results
          data.currentSpeed = (data.currentSpeed < 100) ? 100 : data.currentSpeed;
        }

        // Iterate thru each item and move it
        for (var i = 0; i < data.totalItems; i++) {
          var $item = $(data.items[i]);
          var currentPosition = $item.data('currentPosition');

          var newPosition;
          if (data.currentDirection == 'forward') {
            newPosition = currentPosition - 1;
          } else {
            newPosition = currentPosition + 1;
          }
          // We keep both sides as even as possible to allow circular rotation to work.
          // We will "wrap" the item arround to the other side by negating its current position
          var flankingAllowance = (newPosition > 0) ? data.rightItemsCount : data.leftItemsCount;
          if (Math.abs(newPosition) > flankingAllowance) {
            newPosition = currentPosition * -1;
            // If there's an uneven number of "flanking" items, we need to compenstate for that
            // when we have an item switch sides. The right side will always have 1 more in that case
            if (data.totalItems % 2 == 0) {
              newPosition += 1;
            } 
          }

          moveItem($item, newPosition);
        }
      }
    }

    /**
     * The event handler when an image within the carousel is clicked
     * This function will rotate the carousel the correct number of rotations
     * to get the clicked item to the center, or will fire the custom event
     * the user passed in if the center item is clicked
     */
    $(this).find('img').bind("click", function () {
      var itemPosition = $(this).data().currentPosition;

      if (options.imageNav == false) {
        return;
      }
      // Don't allow hidden items to be clicked
      if (Math.abs(itemPosition) >= options.flankingItems + 1) {
        return;
      }
      // Do nothing if the carousel is already moving
      if (data.currentlyMoving) {
        return;
      }

      data.previousCenterItem = data.currentCenterItem;

      // Remove autoplay
      autoPlay(true);
      options.autoPlay = 0;
      
      var rotations = Math.abs(itemPosition);
      if (itemPosition == 0) {
        options.clickedCenter($(this));
      } else {
        // Fire the 'moving' callbacks
        options.movingFromCenter(data.currentCenterItem);
        options.movingToCenter($(this));
        if (itemPosition < 0) {
          data.currentDirection = 'backward';
          rotateCarousel(rotations);
        } else if (itemPosition > 0) {
          data.currentDirection = 'forward';
          rotateCarousel(rotations);
        }
      }
    });


    /**
     * The user may choose to wrap the images is link tags. If they do this, we need to
     * make sure that they aren't active for certain situations
     */
    $(this).find('a').bind("click", function (event) {
      var isCenter = $(this).find('img').data('currentPosition') == 0;
      // should we disable the links?
      if (options.linkHandling === 1 || // turn off all links
          (options.linkHandling === 2 && !isCenter)) // turn off all links except center
      {
        event.preventDefault();
        return false;
      }
    });

    function nextItemFromCenter() {
      var $next = data.currentCenterItem.next();
      if ($next.length <= 0) {
        $next = data.currentCenterItem.parent().children().first();
      }
      return $next;
    }

    function prevItemFromCenter() {
      var $prev = data.currentCenterItem.prev();
      if ($prev.length <= 0) {
        $prev = data.currentCenterItem.parent().children().last();
      }
      return $prev;
    }

    /**
     * Intiate a move of the carousel in either direction. Takes care of firing
     * the 'moving' callbacks
     */
    function moveOnce(direction) {
      if (data.currentlyMoving === false) {
        data.previousCenterItem = data.currentCenterItem;

        options.movingFromCenter(data.currentCenterItem);
        if (direction == 'backward') {
          options.movingToCenter(prevItemFromCenter());
          data.currentDirection = 'backward';
        } else if (direction == 'forward') {
          options.movingToCenter(nextItemFromCenter());
          data.currentDirection = 'forward';
        }
      }

      rotateCarousel(1);
    }
    
    /**
     * Navigation with arrow keys
     */
    $(document).keydown(function(e) {
      if (options.keyboardNav) {
        // arrow left or up
        if ((e.which === 37 && options.orientation == 'horizontal') || (e.which === 38 && options.orientation == 'vertical')) {
          autoPlay(true);
          options.autoPlay = 0;
          moveOnce('backward');
        // arrow right or down
        } else if ((e.which === 39 && options.orientation == 'horizontal') || (e.which === 40 && options.orientation == 'vertical')) {
          autoPlay(true);
          options.autoPlay = 0;
          moveOnce('forward');
        }
        // should we override the normal functionality for the arrow keys?
        if (options.keyboardNavOverride && (
            (options.orientation == 'horizontal' && (e.which === 37 || e.which === 39)) ||
            (options.orientation == 'vertical' && (e.which === 38 || e.which === 40))
          )) {
          e.preventDefault();
          return false;
        }
      }
    });

    /**
     * Public API methods
     */
    this.reload = function (newOptions) {
      if (typeof newOptions === "object") {
        var combineDefaultWith = newOptions;
      } else {
        var combineDefaultWith = {};
      }
      options = $.extend({}, $.fn.waterwheelCarousel.defaults, newOptions);

      initializeCarouselData();
      data.itemsContainer.find('img').hide();
      forceImageDimensionsIfEnabled();

      preload(function () {
        setOriginalItemDimensions();
        preCalculatePositionProperties();
        setupCarousel();
        setupStarterRotation();
      });
    }
    
    this.next = function() {
      autoPlay(true);
      options.autoPlay = 0;

      moveOnce('forward');
    }
    this.prev = function () {
      autoPlay(true);
      options.autoPlay = 0;

      moveOnce('backward');
    }

    this.reload(startingOptions);

    return this;
  };

  $.fn.waterwheelCarousel.defaults = {
    // number tweeks to change apperance
    startingItem:               1,   // item to place in the center of the carousel. Set to 0 for auto
    separation:                 175, // distance between items in carousel
    separationMultiplier:       0.6, // multipled by separation distance to increase/decrease distance for each additional item
    horizonOffset:              0,   // offset each item from the "horizon" by this amount (causes arching)
    horizonOffsetMultiplier:    1,   // multipled by horizon offset to increase/decrease offset for each additional item
    sizeMultiplier:             0.7, // determines how drastically the size of each item changes
    opacityMultiplier:          0.8, // determines how drastically the opacity of each item changes
    horizon:                    0,   // how "far in" the horizontal/vertical horizon should be set from the container wall. 0 for auto
    flankingItems:              3,   // the number of items visible on either side of the center                  

	
    // animation
    speed:                      900,      // speed in milliseconds it will take to rotate from one to the next
    animationEasing:            'linear', // the easing effect to use when animating
    quickerForFurther:          true,     // set to true to make animations faster when clicking an item that is far away from the center
    edgeFadeEnabled:            false,    // when true, items fade off into nothingness when reaching the edge. false to have them move behind the center image
    
    // misc
    linkHandling:               2,                 // 1 to disable all (used for facebox), 2 to disable all but center (to link images out)
    autoPlay:                   0,                 // indicate the speed in milliseconds to wait before autorotating. 0 to turn off. Can be negative
    orientation:                'horizontal',      // indicate if the carousel should be 'horizontal' or 'vertical'
    activeClassName:            'carousel-center', // the name of the class given to the current item in the center
    keyboardNav:                false,             // set to true to move the carousel with the arrow keys
    keyboardNavOverride:        true,              // set to true to override the normal functionality of the arrow keys (prevents scrolling)
    imageNav:                   true,              // clicking a non-center image will rotate that image to the center

    // preloader
    preloadImages:              true,  // disable/enable the image preloader. 
    forcedImageWidth:           0,     // specify width of all images; otherwise the carousel tries to calculate it
    forcedImageHeight:          0,     // specify height of all images; otherwise the carousel tries to calculate it

    // callback functions
    movingToCenter:             $.noop, // fired when an item is about to move to the center position
    movedToCenter:              $.noop, // fired when an item has finished moving to the center
    clickedCenter:              $.noop, // fired when the center item has been clicked
    movingFromCenter:           $.noop, // fired when an item is about to leave the center position
    movedFromCenter:            $.noop  // fired when an item has finished moving from the center
  };

})(jQuery);

/*!
 * Modernizr v2.7.1
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */

window.Modernizr = (function( window, document, undefined ) {

    var version = '2.7.1',

    Modernizr = {},

    /*>>cssclasses*/
    // option for enabling the HTML classes to be added
    enableClasses = true,
    /*>>cssclasses*/

    docElement = document.documentElement,

    /**
     * Create our "modernizr" element that we do most feature tests on.
     */
    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    /**
     * Create the input element for various Web Forms feature tests.
     */
    inputElem /*>>inputelem*/ = document.createElement('input') /*>>inputelem*/ ,

    /*>>smile*/
    smile = ':)',
    /*>>smile*/

    toString = {}.toString,

    // TODO :: make the prefixes more granular
    /*>>prefixes*/
    // List of property values to set for css tests. See ticket #21
    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
    /*>>prefixes*/

    /*>>domprefixes*/
    // Following spec is to expose vendor-specific style properties as:
    //   elem.style.WebkitBorderRadius
    // and the following would be incorrect:
    //   elem.style.webkitBorderRadius

    // Webkit ghosts their properties in lowercase but Opera & Moz do not.
    // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
    //   erik.eae.net/archives/2008/03/10/21.48.10/

    // More here: github.com/Modernizr/Modernizr/issues/issue/21
    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),
    /*>>domprefixes*/

    /*>>ns*/
    ns = {'svg': 'http://www.w3.org/2000/svg'},
    /*>>ns*/

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, // used in testing loop


    /*>>teststyles*/
    // Inject element with style element and some CSS rules
    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
          // After page load injecting a fake body doesn't work so check if body exists
          body = document.body,
          // IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
          fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
          // In order not to give false positives we create a node for each test
          // This also allows the method to scale for unspecified uses
          while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

      // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
      // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
      // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
      // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
      // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
      style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
      // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
      // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
      (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
          //avoid crashing IE8, if background image is used
          fakeBody.style.background = '';
          //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
          fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
      // If this is done after page load we don't want to remove the body so check if body exists
      if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },
    /*>>teststyles*/

    /*>>mq*/
    // adapted from matchMedia polyfill
    // by Scott Jehl and Paul Irish
    // gist.github.com/786768
    testMediaQuery = function( mq ) {

      var matchMedia = window.matchMedia || window.msMatchMedia;
      if ( matchMedia ) {
        return matchMedia(mq).matches;
      }

      var bool;

      injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function( node ) {
        bool = (window.getComputedStyle ?
                  getComputedStyle(node, null) :
                  node.currentStyle)['position'] == 'absolute';
      });

      return bool;

     },
     /*>>mq*/


    /*>>hasevent*/
    //
    // isEventSupported determines if a given element supports the given event
    // kangax.github.com/iseventsupported/
    //
    // The following results are known incorrects:
    //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
    //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
    //   ...
    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
      };

      function isEventSupported( eventName, element ) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

        // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
        var isSupported = eventName in element;

        if ( !isSupported ) {
          // If it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
          if ( !element.setAttribute ) {
            element = document.createElement('div');
          }
          if ( element.setAttribute && element.removeAttribute ) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

            // If property was created, "remove it" (by setting value to `undefined`)
            if ( !is(element[eventName], 'undefined') ) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),
    /*>>hasevent*/

    // TODO :: Add flag for hasownprop ? didn't last time

    // hasOwnProperty shim by kangax needed for Safari 2.0 support
    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }

    // Adapted from ES5-shim https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
    // es5.github.com/#x15.3.4.5

    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    /**
     * setCss applies given styles to the Modernizr DOM node.
     */
    function setCss( str ) {
        mStyle.cssText = str;
    }

    /**
     * setCssAll extrapolates all vendor-specific css strings.
     */
    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    /**
     * is returns a boolean for if typeof obj is exactly type.
     */
    function is( obj, type ) {
        return typeof obj === type;
    }

    /**
     * contains returns a boolean for if substr is found within str.
     */
    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    /*>>testprop*/

    // testProps is a generic CSS / DOM property test.

    // In testing support for a given CSS property, it's legit to test:
    //    `elem.style[styleName] !== undefined`
    // If the property is supported it will return an empty string,
    // if unsupported it will return undefined.

    // We'll take advantage of this quick test and skip setting a style
    // on our modernizr element, but instead just testing undefined vs
    // empty string.

    // Because the testing of the CSS property names (with "-", as
    // opposed to the camelCase DOM properties) is non-portable and
    // non-standard but works in WebKit and IE (but not Gecko or Opera),
    // we explicitly reject properties with dashes so that authors
    // developing in WebKit or IE first don't end up with
    // browser-specific content by accident.

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }
    /*>>testprop*/

    // TODO :: add testDOMProps
    /**
     * testDOMProps is a generic DOM property test; if a browser supports
     *   a certain property, it won't return undefined for it.
     */
    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                // return the property name as a string
                if (elem === false) return props[i];

                // let's bind a function
                if (is(item, 'function')){
                  // default to autobind unless override
                  return item.bind(elem || obj);
                }

                // return the unbound function or obj or value
                return item;
            }
        }
        return false;
    }

    /*>>testallprops*/
    /**
     * testPropsAll tests a list of DOM properties we want to check against.
     *   We specify literally ALL possible (known and/or likely) properties on
     *   the element including the non-vendor prefixed one, for forward-
     *   compatibility.
     */
    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

        // did they call .prefixed('boxSizing') or are we just testing a prop?
        if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

        // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
        } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }
    /*>>testallprops*/


    /**
     * Tests
     * -----
     */

    // The *new* flexbox
    // dev.w3.org/csswg/css3-flexbox

    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };

    // The *old* flexbox
    // www.w3.org/TR/2009/WD-css3-flexbox-20090723/

    tests['flexboxlegacy'] = function() {
        return testPropsAll('boxDirection');
    };

    // On the S60 and BB Storm, getContext exists, but always returns undefined
    // so we actually have to call getContext() to verify
    // github.com/Modernizr/Modernizr/issues/issue/97/

    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };

    // webk.it/70117 is tracking a legit WebGL feature detect proposal

    // We do a soft detect which may false positive in order to avoid
    // an expensive context creation: bugzil.la/732441

    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };

    /*
     * The Modernizr.touch test only indicates if the browser supports
     *    touch events, which does not necessarily reflect a touchscreen
     *    device, as evidenced by tablets running Windows 7 or, alas,
     *    the Palm Pre / WebOS (touch) phones.
     *
     * Additionally, Chrome (desktop) used to lie about its support on this,
     *    but that has since been rectified: crbug.com/36415
     *
     * We also test for Firefox 4 Multitouch Support.
     *
     * For more info, see: modernizr.github.com/Modernizr/touch.html
     */

    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };


    // geolocation is often considered a trivial feature detect...
    // Turns out, it's quite tricky to get right:
    //
    // Using !!navigator.geolocation does two things we don't want. It:
    //   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513
    //   2. Disables page caching in WebKit: webk.it/43956
    //
    // Meanwhile, in Firefox < 8, an about:config setting could expose
    // a false positive that would throw an exception: bugzil.la/688158

    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function() {
      return !!window.postMessage;
    };


    // Chrome incognito mode used to throw an exception when using openDatabase
    // It doesn't anymore.
    tests['websqldatabase'] = function() {
      return !!window.openDatabase;
    };

    // Vendors had inconsistent prefixing with the experimental Indexed DB:
    // - Webkit's implementation is accessible through webkitIndexedDB
    // - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB
    // For speed, we don't test the legacy (and beta-only) indexedDB
    tests['indexedDB'] = function() {
      return !!testPropsAll("indexedDB", window);
    };

    // documentMode logic from YUI to filter out IE8 Compat Mode
    //   which false positives.
    tests['hashchange'] = function() {
      return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    // Per 1.6:
    // This used to be Modernizr.historymanagement but the longer
    // name has been deprecated in favor of a shorter and property-matching one.
    // The old API is still available in 1.6, but as of 2.0 will throw a warning,
    // and in the first release thereafter disappear entirely.
    tests['history'] = function() {
      return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    // FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
    // will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
    // FF10 still uses prefixes, so check for it until then.
    // for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/
    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    // css-tricks.com/rgba-browser-support/
    tests['rgba'] = function() {
        // Set an rgba() color and check the returned value

        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
        // Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
        //   except IE9 who retains it as hsla

        setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
        // Setting multiple images AND a color on the background shorthand property
        //  and then querying the style.background property value for the number of
        //  occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

        setCss('background:url(https://),url(https://),red url(https://)');

        // If the UA supports multiple backgrounds, there should be three occurrences
        //   of the string "url(" in the return value for elemStyle.background

        return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };



    // this will false positive in Opera Mini
    //   github.com/Modernizr/Modernizr/issues/396

    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };


    // Super comprehensive table about all the unique implementations of
    // border-radius: muddledramblings.com/table-of-css3-border-radius-compliance

    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    // WebOS unfortunately false positives on this test.
    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    // FF3.0 will false positive on this test
    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
        // Browsers that actually have CSS Opacity implemented have done so
        //  according to spec, which means their return values are within the
        //  range of [0.0,1.0] - including the leading zero.

        setCssAll('opacity:.55');

        // The non-literal . in this regex is intentional:
        //   German Chrome returns this value as 0,55
        // github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632
        return (/^0.55$/).test(mStyle.opacity);
    };


    // Note, Android < 4 will pass this test, but can only animate
    //   a single property at a time
    //   daneden.me/2011/12/putting-up-with-androids-bullshit/
    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        /**
         * For CSS Gradients syntax, please see:
         * webkit.org/blog/175/introducing-css-gradients/
         * developer.mozilla.org/en/CSS/-moz-linear-gradient
         * developer.mozilla.org/en/CSS/-moz-radial-gradient
         * dev.w3.org/csswg/css3-images/#gradients-
         */

        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
             // legacy webkit syntax (FIXME: remove when syntax not in use anymore)
              (str1 + '-webkit- '.split(' ').join(str2 + str1) +
             // standard syntax             // trailing 'background-image:'
              prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

        // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
        //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
        //   some conditions. As a result, Webkit typically recognizes the syntax but
        //   will sometimes throw a false positive, thus we must do a more thorough check:
        if ( ret && 'webkitPerspective' in docElement.style ) {

          // Webkit allows this media query to succeed only if the feature is enabled.
          // `@media (transform-3d),(-webkit-transform-3d){ ... }`
          injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };


    /*>>fontface*/
    // @font-face detection routine by Diego Perini
    // javascript.nwbox.com/CSSSupport/

    // false positives:
    //   WebOS github.com/Modernizr/Modernizr/issues/342
    //   WP7   github.com/Modernizr/Modernizr/issues/538
    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };
    /*>>fontface*/

    // CSS generated content detection
    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
          bool = node.offsetHeight >= 3;
        });

        return bool;
    };



    // These tests evaluate support of the video/audio elements, as well as
    // testing what types of content they support.
    //
    // We're using the Boolean constructor here, so that we can extend the value
    // e.g.  Modernizr.video     // true
    //       Modernizr.video.ogg // 'probably'
    //
    // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845
    //                     thx to NielsLeenheer and zcorpan

    // Note: in some older browsers, "no" was a return value instead of empty string.
    //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2
    //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5

    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

        // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
                bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

                // Mimetypes accepted:
                //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
                //   bit.ly/iphoneoscodecs
                bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                              elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
            }
        } catch(e) { }

        return bool;
    };


    // In FF4, if disabled, window.localStorage should === null.

    // Normally, we could not test that directly and need to do a
    //   `('localStorage' in window) && ` test first because otherwise Firefox will
    //   throw bugzil.la/365772 if cookies are disabled

    // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
    // will throw the exception:
    //   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
    // Peculiarly, getItem and removeItem calls do not throw.

    // Because we are forced to try/catch this, we'll go aggressive.

    // Just FWIW: IE8 Compat mode supports these features completely:
    //   www.quirksmode.org/dom/html5.html
    // But IE8 doesn't support either with local files

    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };


    tests['webworkers'] = function() {
        return !!window.Worker;
    };


    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };


    // Thanks to Erik Dahlstrom
    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    // specifically for SVG inline in HTML, not within XHTML
    // test page: paulirish.com/demo/inline-svg
    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    // SVG SMIL animation
    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };

    // This test is only for clip paths in SVG proper, not clip paths on HTML content
    // demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg

    // However read the comments to dig into applying SVG clippaths to HTML content here:
    //   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491
    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    /*>>webforms*/
    // input features and input types go directly onto the ret object, bypassing the tests loop.
    // Hold this guy to execute in a moment.
    function webforms() {
        /*>>input*/
        // Run through HTML5's new input attributes to see if the UA understands any.
        // We're using f which is the <input> element created early on
        // Mike Taylr has created a comprehensive resource for testing these attributes
        //   when applied to all input types:
        //   miketaylr.com/code/input-type-attr.html
        // spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary

        // Only input placeholder is tested while textarea's placeholder is not.
        // Currently Safari 4 and Opera 11 have support only for the input placeholder
        // Both tests are available in feature-detects/forms-placeholder.js
        Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
              // safari false positive's on datalist: webk.it/74252
              // see also github.com/Modernizr/Modernizr/issues/146
              attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
        /*>>input*/

        /*>>inputtypes*/
        // Run through HTML5's new input types to see if the UA understands any.
        //   This is put behind the tests runloop because it doesn't return a
        //   true/false like all the other tests; instead, it returns an object
        //   containing each input type with its corresponding true/false value

        // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
        Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                // We first check to see if the type we give it sticks..
                // If the type does, we feed it a textual value, which shouldn't be valid.
                // If the value doesn't stick, we know there's input sanitization which infers a custom UI
                if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                      // Safari 2-4 allows the smiley as a value, despite making a slider
                      bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                              // Mobile android web browser has false positive, so must
                              // check the height to see if the widget is actually there.
                              (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                      // Spec doesn't define any special parsing or detectable UI
                      //   behaviors so we pass these through as true

                      // Interestingly, opera fails the earlier test, so it doesn't
                      //  even make it here.

                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                      // Real url and email support comes with prebaked validation.
                      bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                      // If the upgraded input compontent rejects the :) text, we got a winner
                      bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        /*>>inputtypes*/
    }
    /*>>webforms*/


    // End of test definitions
    // -----------------------



    // Run through all tests and detect their support in the current UA.
    // todo: hypothetically we could be doing an array of tests and use a basic loop here.
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
            // run the test, throw the return value into the Modernizr,
            //   then based on that boolean, define an appropriate className
            //   and push it into an array of classes we'll join later.
            featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    /*>>webforms*/
    // input tests need to run.
    Modernizr.input || webforms();
    /*>>webforms*/


    /**
     * addTest allows the user to define their own feature tests
     * the result will be added onto the Modernizr object,
     * as well as an appropriate className set on the html element
     *
     * @param feature - String naming the feature
     * @param test - Function returning true if feature is supported, false if not
     */
     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
           // we're going to quit if you're trying to overwrite an existing test
           // if we were to allow it, we'd do this:
           //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
           //   docElement.className = docElement.className.replace( re, '' );
           // but, no rly, stuff 'em.
           return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; // allow chaining.
     };


    // Reset modElem.cssText to nothing to reduce memory footprint.
    setCss('');
    modElem = inputElem = null;

    /*>>shiv*/
    /**
     * @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
     */
    ;(function(window, document) {
        /*jshint evil:true */
        /** version */
        var version = '3.7.0';

        /** Preset options */
        var options = window.html5 || {};

        /** Used to skip problem elements */
        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

        /** Not all elements can be cloned in IE **/
        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

        /** Detect whether the browser supports default html5 styles */
        var supportsHtml5Styles;

        /** Name of the expando, to work with multiple documents or to re-shiv one document */
        var expando = '_html5shiv';

        /** The id for the the documents expando */
        var expanID = 0;

        /** Cached data for each document */
        var expandoData = {};

        /** Detect whether the browser supports unknown elements */
        var supportsUnknownElements;

        (function() {
          try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
            //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
            supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
              // assign a false positive if unable to shiv
              (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
          } catch(e) {
            // assign a false positive if detection fails => unable to shiv
            supportsHtml5Styles = true;
            supportsUnknownElements = true;
          }

        }());

        /*--------------------------------------------------------------------------*/

        /**
         * Creates a style sheet with the given CSS text and adds it to the document.
         * @private
         * @param {Document} ownerDocument The document.
         * @param {String} cssText The CSS text.
         * @returns {StyleSheet} The style element.
         */
        function addStyleSheet(ownerDocument, cssText) {
          var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

          p.innerHTML = 'x<style>' + cssText + '</style>';
          return parent.insertBefore(p.lastChild, parent.firstChild);
        }

        /**
         * Returns the value of `html5.elements` as an array.
         * @private
         * @returns {Array} An array of shived element node names.
         */
        function getElements() {
          var elements = html5.elements;
          return typeof elements == 'string' ? elements.split(' ') : elements;
        }

        /**
         * Returns the data associated to the given document
         * @private
         * @param {Document} ownerDocument The document.
         * @returns {Object} An object of data.
         */
        function getExpandoData(ownerDocument) {
          var data = expandoData[ownerDocument[expando]];
          if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
          }
          return data;
        }

        /**
         * returns a shived element for the given nodeName and document
         * @memberOf html5
         * @param {String} nodeName name of the element
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived element.
         */
        function createElement(nodeName, ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
          }
          if (!data) {
            data = getExpandoData(ownerDocument);
          }
          var node;

          if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
          } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
          } else {
            node = data.createElem(nodeName);
          }

          // Avoid adding some elements to fragments in IE < 9 because
          // * Attributes like `name` or `type` cannot be set/changed once an element
          //   is inserted into a document/fragment
          // * Link elements with `src` attributes that are inaccessible, as with
          //   a 403 response, will cause the tab/window to crash
          // * Script elements appended to fragments will execute when their `src`
          //   or `text` property is set
          return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
        }

        /**
         * returns a shived DocumentFragment for the given document
         * @memberOf html5
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived DocumentFragment.
         */
        function createDocumentFragment(ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
          }
          data = data || getExpandoData(ownerDocument);
          var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;
          for(;i<l;i++){
            clone.createElement(elems[i]);
          }
          return clone;
        }

        /**
         * Shivs the `createElement` and `createDocumentFragment` methods of the document.
         * @private
         * @param {Document|DocumentFragment} ownerDocument The document.
         * @param {Object} data of the document.
         */
        function shivMethods(ownerDocument, data) {
          if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
          }


          ownerDocument.createElement = function(nodeName) {
            //abort shiv
            if (!html5.shivMethods) {
              return data.createElem(nodeName);
            }
            return createElement(nodeName, ownerDocument, data);
          };

          ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                                                          'var n=f.cloneNode(),c=n.createElement;' +
                                                          'h.shivMethods&&(' +
                                                          // unroll the `createElement` calls
                                                          getElements().join().replace(/[\w\-]+/g, function(nodeName) {
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return 'c("' + nodeName + '")';
          }) +
            ');return n}'
                                                         )(html5, data.frag);
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Shivs the given document.
         * @memberOf html5
         * @param {Document} ownerDocument The document to shiv.
         * @returns {Document} The shived document.
         */
        function shivDocument(ownerDocument) {
          if (!ownerDocument) {
            ownerDocument = document;
          }
          var data = getExpandoData(ownerDocument);

          if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument,
                                          // corrects block display not defined in IE6/7/8/9
                                          'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                                            // adds styling not present in IE6/7/8/9
                                            'mark{background:#FF0;color:#000}' +
                                            // hides non-rendered elements
                                            'template{display:none}'
                                         );
          }
          if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data);
          }
          return ownerDocument;
        }

        /*--------------------------------------------------------------------------*/

        /**
         * The `html5` object is exposed so that more elements can be shived and
         * existing shiving can be detected on iframes.
         * @type Object
         * @example
         *
         * // options can be changed before the script is included
         * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
         */
        var html5 = {

          /**
           * An array or space separated string of node names of the elements to shiv.
           * @memberOf html5
           * @type Array|String
           */
          'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

          /**
           * current version of html5shiv
           */
          'version': version,

          /**
           * A flag to indicate that the HTML5 style sheet should be inserted.
           * @memberOf html5
           * @type Boolean
           */
          'shivCSS': (options.shivCSS !== false),

          /**
           * Is equal to true if a browser supports creating unknown/HTML5 elements
           * @memberOf html5
           * @type boolean
           */
          'supportsUnknownElements': supportsUnknownElements,

          /**
           * A flag to indicate that the document's `createElement` and `createDocumentFragment`
           * methods should be overwritten.
           * @memberOf html5
           * @type Boolean
           */
          'shivMethods': (options.shivMethods !== false),

          /**
           * A string to describe the type of `html5` object ("default" or "default print").
           * @memberOf html5
           * @type String
           */
          'type': 'default',

          // shivs the document according to the specified `html5` object options
          'shivDocument': shivDocument,

          //creates a shived element
          createElement: createElement,

          //creates a shived documentFragment
          createDocumentFragment: createDocumentFragment
        };

        /*--------------------------------------------------------------------------*/

        // expose html5
        window.html5 = html5;

        // shiv the document
        shivDocument(document);

    }(this, document));
    /*>>shiv*/

    // Assign private properties to the return object with prefix
    Modernizr._version      = version;

    // expose these for the plugin API. Look in the source for how to join() them against your input
    /*>>prefixes*/
    Modernizr._prefixes     = prefixes;
    /*>>prefixes*/
    /*>>domprefixes*/
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;
    /*>>domprefixes*/

    /*>>mq*/
    // Modernizr.mq tests a given media query, live against the current state of the window
    // A few important notes:
    //   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
    //   * A max-width or orientation query will be evaluated against the current state, which may change later.
    //   * You must specify values. Eg. If you are testing support for the min-width media query use:
    //       Modernizr.mq('(min-width:0)')
    // usage:
    // Modernizr.mq('only screen and (max-width:768)')
    Modernizr.mq            = testMediaQuery;
    /*>>mq*/

    /*>>hasevent*/
    // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
    // Modernizr.hasEvent('gesturestart', elem)
    Modernizr.hasEvent      = isEventSupported;
    /*>>hasevent*/

    /*>>testprop*/
    // Modernizr.testProp() investigates whether a given style property is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testProp('pointerEvents')
    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };
    /*>>testprop*/

    /*>>testallprops*/
    // Modernizr.testAllProps() investigates whether a given style property,
    //   or any of its vendor-prefixed variants, is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testAllProps('boxSizing')
    Modernizr.testAllProps  = testPropsAll;
    /*>>testallprops*/


    /*>>teststyles*/
    // Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
    // Modernizr.testStyles('#modernizr { position:absolute }', function(elem, rule){ ... })
    Modernizr.testStyles    = injectElementWithStyles;
    /*>>teststyles*/


    /*>>prefixed*/
    // Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input
    // Modernizr.prefixed('boxSizing') // 'MozBoxSizing'

    // Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
    // Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
    //
    //     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

    // If you're trying to ascertain which transition end event to bind to, you might do something like...
    //
    //     var transEndEventNames = {
    //       'WebkitTransition' : 'webkitTransitionEnd',
    //       'MozTransition'    : 'transitionend',
    //       'OTransition'      : 'oTransitionEnd',
    //       'msTransition'     : 'MSTransitionEnd',
    //       'transition'       : 'transitionend'
    //     },
    //     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

    Modernizr.prefixed      = function(prop, obj, elem){
      if(!obj) {
        return testPropsAll(prop, 'pfx');
      } else {
        // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
        return testPropsAll(prop, obj, elem);
      }
    };
    /*>>prefixed*/


    /*>>cssclasses*/
    // Remove "no-js" class from <html> element, if it exists:
    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                            // Add the new classes to the <html> element.
                            (enableClasses ? ' js ' + classes.join(' ') : '');
    /*>>cssclasses*/

    return Modernizr;

})(this, this.document);


/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.4.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

/* global window, document, define, jQuery, setInterval, clearInterval */

(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this,
                dataSettings, responsiveSettings, breakpoint;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return '<button type="button" data-role="none">' + (i + 1) + '</button>';
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rtl: false,
                slide: '',
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                variableWidth: false,
                vertical: false,
                waitForAnimate: true
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.hidden = "hidden";
            _.paused = false;
            _.positionProp = null;
            _.respondTo = null;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = "visibilitychange";
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, dataSettings, settings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;
            responsiveSettings = _.options.responsive || null;

            if (responsiveSettings && responsiveSettings.length > -1) {
                _.respondTo = _.options.respondTo || "window";
                for (breakpoint in responsiveSettings) {
                    if (responsiveSettings.hasOwnProperty(breakpoint)) {
                        _.breakpoints.push(responsiveSettings[
                            breakpoint].breakpoint);
                        _.breakpointSettings[responsiveSettings[
                            breakpoint].breakpoint] =
                            responsiveSettings[breakpoint].settings;
                    }
                }
                _.breakpoints.sort(function(a, b) {
                    if(_.options.mobileFirst === true) {
                        return a - b;
                    } else {
                        return b - a;
                    }
                });
            }

            if (typeof document.mozHidden !== "undefined") {
                _.hidden = "mozHidden";
                _.visibilityChange = "mozvisibilitychange";
            } else if (typeof document.msHidden !== "undefined") {
                _.hidden = "msHidden";
                _.visibilityChange = "msvisibilitychange";
            } else if (typeof document.webkitHidden !== "undefined") {
                _.hidden = "webkitHidden";
                _.visibilityChange = "webkitvisibilitychange";
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

            _.init();

            _.checkResponsive(true);

        }

        return Slick;

    }());

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr("data-slick-index",index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function(){
        var _ = this;
        if(_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({height: targetHeight},_.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {}, _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.asNavFor = function(index) {
        var _ = this, asNavFor = _.options.asNavFor !== null ? $(_.options.asNavFor).slick('getSlick') : null;
        if(asNavFor !== null) asNavFor.slideHandler(index, true);
    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

        if (_.slideCount > _.options.slidesToShow && _.paused !== true) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator,
                _.options.autoplaySpeed);
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this;

        if (_.options.infinite === false) {

            if (_.direction === 1) {

                if ((_.currentSlide + 1) === _.slideCount -
                    1) {
                    _.direction = 0;
                }

                _.slideHandler(_.currentSlide + _.options.slidesToScroll);

            } else {

                if ((_.currentSlide - 1 === 0)) {

                    _.direction = 1;

                }

                _.slideHandler(_.currentSlide - _.options.slidesToScroll);

            }

        } else {

            _.slideHandler(_.currentSlide + _.options.slidesToScroll);

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow = $(_.options.prevArrow);
            _.$nextArrow = $(_.options.nextArrow);

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.appendTo(_.options.appendArrows);
            }

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.appendTo(_.options.appendArrows);
            }

            if (_.options.infinite !== true) {
                _.$prevArrow.addClass('slick-disabled');
            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dotString;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            dotString = '<ul class="' + _.options.dotsClass + '">';

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dotString += '<li>' + _.options.customPaging.call(this, _, i) + '</li>';
            }

            dotString += '</ul>';

            _.$dots = $(dotString).appendTo(
                _.options.appendDots);

            _.$dots.find('li').first().addClass(
                'slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides = _.$slider.children(_.options.slide +
            ':not(.slick-cloned)').addClass(
            'slick-slide');
        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element).attr("data-slick-index",index);
        });

        _.$slidesCache = _.$slides;

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();

        if (_.options.accessibility === true) {
            _.$list.prop('tabIndex', 0);
        }

        _.setSlideClasses(typeof this.currentSlide === 'number' ? this.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.checkResponsive = function(initial) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();
        if (_.respondTo === "window") {
          respondToWidth = windowWidth;
        } else if (_.respondTo === "slider") {
          respondToWidth = sliderWidth;
        } else if (_.respondTo === "min") {
          respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if (_.originalSettings.responsive && _.originalSettings
            .responsive.length > -1 && _.originalSettings.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if(_.breakpointSettings[targetBreakpoint] === "unslick") {
                            _.unslick();
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if(initial === true)
                                _.currentSlide = _.options.initialSlide;
                            _.refresh();
                        }
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if(_.breakpointSettings[targetBreakpoint] === "unslick") {
                        _.unslick();
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if(initial === true)
                            _.currentSlide = _.options.initialSlide;
                        _.refresh();
                    }
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if(initial === true)
                        _.currentSlide = _.options.initialSlide;
                    _.refresh();
                }
            }

        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.target),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        $target.is('a') && event.preventDefault();

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide  - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $(event.target).parent().index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this, navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if(index > navigables[navigables.length -1]){
            index = navigables[navigables.length -1];
        } else {
            for(var n in navigables) {
                if(index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if(_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function() {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        $('.slick-cloned', _.$slider).remove();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow && (typeof _.options.prevArrow !== 'object')) {
            _.$prevArrow.remove();
        }
        if (_.$nextArrow && (typeof _.options.nextArrow !== 'object')) {
            _.$nextArrow.remove();
        }

        _.$slides.removeClass(
            'slick-slide slick-active slick-center slick-visible')
            .removeAttr('data-slick-index')
            .css({
                position: '',
                left: '',
                top: '',
                zIndex: '',
                opacity: '',
                width: ''
            });

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');

        _.$list.off('.slick');
        $(window).off('.slick-' + _.instanceUid);
        $(document).off('.slick-' + _.instanceUid);

        _.$slider.html(_.$slides);

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = "";

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: 1000
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: 1000
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if(_.options.infinite === true) {
            pagerQty = Math.ceil(_.slideCount / _.options.slidesToScroll);
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else {
            while (breakPoint < _.slideCount){
                ++pagerQty;
                breakPoint = counter + _.options.slidesToShow;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll  : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight();

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if(slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if(slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow){
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;

            if (_.options.centerMode === true) {
                if(_.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this, breakPoint = 0, counter = 0, indexes = [], max;

        if(_.options.infinite === false) {
            max = _.slideCount - _.options.slidesToShow + 1;
            if (_.options.centerMode === true) max = _.slideCount;
        } else {
            breakPoint = _.slideCount * -1;
            counter = _.slideCount * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max){
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll  : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this, slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if(_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide){
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function() {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
        }

        _.$slider.trigger("init", [ _ ]);

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.on('click.slick', {
                message: 'next'
            }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.options.autoplay === true) {
            $('li', _.$dots)
                .on('mouseenter.slick', function(){
                    _.paused = true;
                    _.autoPlayClear();
                })
                .on('mouseleave.slick', function(){
                    _.paused = false;
                    _.autoPlay();
                });
        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        if (_.options.autoplay === true) {

            $(document).on(_.visibilityChange, function(){
                _.visibility();
            });

            if( _.options.pauseOnHover === true ) {

                _.$list.on('mouseenter.slick', function(){
                    _.paused = true;
                    _.autoPlayClear();
                });
                _.$list.on('mouseleave.slick', function(){
                    _.paused = false;
                    _.autoPlay();
                });

            }

        }

        if(_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if(_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, function() {
            _.checkResponsive();
            _.setPosition();
        });

        $(window).on('resize.slick.slick-' + _.instanceUid, function() {
            if ($(window).width() !== _.windowWidth) {
                clearTimeout(_.windowDelay);
                _.windowDelay = window.setTimeout(function() {
                    _.windowWidth = $(window).width();
                    _.checkResponsive();
                    _.setPosition();
                }, 50);
            }
        });

        $('*[draggable!=true]', _.$slideTrack).on('dragstart', function(e){ e.preventDefault(); });

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

        if (_.options.autoplay === true) {

            _.autoPlay();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;

        if (event.keyCode === 37 && _.options.accessibility === true) {
            _.changeSlide({
                data: {
                    message: 'previous'
                }
            });
        } else if (event.keyCode === 39 && _.options.accessibility === true) {
            _.changeSlide({
                data: {
                    message: 'next'
                }
            });
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {
            $('img[data-lazy]', imagesScope).each(function() {
                var image = $(this),
                    imageSource = $(this).attr('data-lazy');

                image
                  .load(function() { image.animate({ opacity: 1 }, 200); })
                  .css({ opacity: 0 })
                  .attr('src', imageSource)
                  .removeAttr('data-lazy')
                  .removeClass('slick-loading');
            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow/2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow/2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow/2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = rangeStart + _.options.slidesToShow;
            if (_.options.fade === true ) {
                if(rangeStart > 0) rangeStart--;
                if(rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

          if (_.slideCount <= _.options.slidesToShow){
              cloneRange = _.$slider.find('.slick-slide');
              loadImages(cloneRange);
          }else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.paused = false;
        _.autoPlay();

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        _.$slider.trigger("afterChange", [ _, index]);

        _.animating = false;

        _.setPosition();

        _.swipeLeft = null;

        if (_.options.autoplay === true && _.paused === false) {
            _.autoPlay();
        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.progressiveLazyLoad = function() {

        var _ = this,
            imgCount, targetImage;

        imgCount = $('img[data-lazy]', _.$slider).length;

        if (imgCount > 0) {
            targetImage = $('img[data-lazy]', _.$slider).first();
            targetImage.attr('src', targetImage.attr('data-lazy')).removeClass('slick-loading').load(function() {
                targetImage.removeAttr('data-lazy');
                _.progressiveLazyLoad();
            })
         .error(function () {
          targetImage.removeAttr('data-lazy');
          _.progressiveLazyLoad();
         });
        }

    };

    Slick.prototype.refresh = function() {

        var _ = this,
            currentSlide = _.currentSlide;

        _.destroy();

        $.extend(_, _.initials);

        _.init();

        _.changeSlide({
            data: {
                message: 'index',
                index: currentSlide
            }
        }, true);

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides = _.$slideTrack.children(_.options.slide).addClass(
            'slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.setProps();

        _.setupInfinite();

        _.buildArrows();

        _.updateArrows();

        _.initArrowEvents();

        _.buildDots();

        _.updateDots();

        _.initDotEvents();

        if(_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(0);

        _.setPosition();

        _.$slider.trigger("reInit", [ _ ]);

    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if(removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {}, x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if(_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            var trackWidth = 0;
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.children('.slick-slide').each(function(){
                trackWidth += _.listWidth;
            });
            _.$slideTrack.width(Math.ceil(trackWidth) + 1);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: 900,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if(_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function(option, value, refresh) {

        var _ = this;
        _.options[option] = value;

        if (refresh === true) {
            _.unload();
            _.reinit();
        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger("setPosition", [ _ ]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if(_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = "-o-transform";
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = "-moz-transform";
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = "-webkit-transform";
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = "-ms-transform";
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = "transform";
            _.transitionType = 'transition';
        }
        _.transformsEnabled = (_.animType !== null && _.animType !== false);

    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        _.$slider.find('.slick-slide').removeClass('slick-active').removeClass('slick-center');
        allSlides = _.$slider.find('.slick-slide');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if(_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active');
                } else {
                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active');
                }

                if (index === 0) {
                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                } else if (index === _.slideCount - 1) {
                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                }

            }

            _.$slides.eq(index).addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active');
            } else if ( allSlides.length <= _.options.slidesToShow ) {
                allSlides.addClass('slick-active');
            } else {
                remainder = _.slideCount%_.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
                if(_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
                    allSlides.slice(indexOffset-(_.options.slidesToShow-remainder), indexOffset + remainder).addClass('slick-active');
                } else {
                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active');
                }
            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                    infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex-_.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex+_.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;
        var index = parseInt($(event.target).parents('.slick-slide').attr("data-slick-index"));
        if(!index) index = 0;

        if(_.slideCount <= _.options.slidesToShow){
            _.$slider.find('.slick-slide').removeClass('slick-active');
            _.$slides.eq(index).addClass('slick-active');
            if(_.options.centerMode === true) {
                _.$slider.find('.slick-slide').removeClass('slick-center');
                _.$slides.eq(index).addClass('slick-center');
            }
            _.asNavFor(index);
            return;
        }
        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index,sync,dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if(_.options.fade === false) {
                targetSlide = _.currentSlide;
                if(dontAnimate!==true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if(_.options.fade === false) {
                targetSlide = _.currentSlide;
                if(dontAnimate!==true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay === true) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger("beforeChange", [ _ , _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if(dontAnimate!==true) {
                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if(dontAnimate!==true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this, slideCount;

        _.dragging = false;

        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger("edge", [  _, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            switch (_.swipeDirection()) {
                case 'left':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 0;
                    _.touchObject = {};
                    _.$slider.trigger("swipe", [ _, "left"]);
                    break;

                case 'right':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 1;
                    _.touchObject = {};
                    _.$slider.trigger("swipe", [ _, "right"]);
                    break;
            }
        } else {
            if(_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
           return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
           return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === "right") || (_.currentSlide >= _.getDotCount() && swipeDirection === "left")) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow && (typeof _.options.prevArrow !== 'object')) {
            _.$prevArrow.remove();
        }
        if (_.$nextArrow && (typeof _.options.nextArrow !== 'object')) {
            _.$nextArrow.remove();
        }
        _.$slides.removeClass(
            'slick-slide slick-active slick-visible').css('width', '');

    };

    Slick.prototype.unslick = function() {

        var _ = this;
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this, centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.arrows === true && _.options.infinite !==
            true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.removeClass('slick-disabled');
            _.$nextArrow.removeClass('slick-disabled');
            if (_.currentSlide === 0) {
                _.$prevArrow.addClass('slick-disabled');
                _.$nextArrow.removeClass('slick-disabled');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
                _.$nextArrow.addClass('slick-disabled');
                _.$prevArrow.removeClass('slick-disabled');
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
                _.$nextArrow.addClass('slick-disabled');
                _.$prevArrow.removeClass('slick-disabled');
            }
        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots.find('li').removeClass('slick-active');
            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if( document[ _.hidden ] ) {
            _.paused = true;
            _.autoPlayClear();
        } else {
            _.paused = false;
            _.autoPlay();
        }

    };

    $.fn.slick = function() {
        var _ = this, opt = arguments[0], args = Array.prototype.slice.call(arguments,1), l = _.length, i = 0, ret;
        for(i; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick =  new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
                if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

    $(function(){
        $('[data-slick]').slick();
    });

}));

$(document).ready(function() {
    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.multiple-items').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
    $('.one-time').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.uneven').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    });
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.center').slick({
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 3,
        speed: 500,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });
    $('.lazy').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500
    });
    $('.autoplay').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slide: 'div',
        cssEase: 'linear'
    });

    $('.add-remove').slick({
        dots: true,
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 3
    });
    var slideIndex = 1;
    $('.js-add-slide').on('click', function() {
        slideIndex++;
        $('.add-remove').slick('slickAdd','<div><h3>' + slideIndex + '</h3></div>');
    });

    $('.js-remove-slide').on('click', function() {
        $('.add-remove').slick('slickRemove',slideIndex - 1);
        if (slideIndex !== 0){
            slideIndex--;
        }
    });

    $('.filtering').slick({
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    });
    var filtered = false;
    $('.js-filter').on('click', function() {
        if (filtered === false) {
            $('.filtering').slick('slickFilter',':even');
            $(this).text('Unfilter Slides');
            filtered = true;
        } else {
            $('.filtering').slick('slickUnfilter');
            $(this).text('Filter Slides');
            filtered = false;
        }
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        slide: 'div'
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 166) {
            $('.fixed-header').show();
        } else {
            $('.fixed-header').hide();
        }
    });

    $('ul.nav a').on('click', function(event) {
        event.preventDefault();
        var targetID = $(this).attr('href');
        var targetST = $(targetID).offset().top - 48;
        $('body, html').animate({
            scrollTop: targetST + 'px'
        }, 300);
    });

    $('.single-item-rtl').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true
    });
    $('.multiple-items-rtl').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 3,
        rtl: true
    });

});


var scr=document.getElementsByTagName('script');
var zoombox_path = scr[scr.length-1].getAttribute("src").replace('zoombox.js','');

(function($){

var options = {
    theme       : 'zoombox',      //available themes : zoombox,lightbox, prettyphoto, darkprettyphoto, simple
    opacity     : 0.8,                  // Black overlay opacity
    duration    : 800,                // Animation duration
    animation   : true,             // Do we have to animate the box ?
    width       : 600,                  // Default width
    height      : 400,                  // Default height
    gallery     : true,                 // Allow gallery thumb view
    autoplay : false,                // Autoplay for video
    overflow  : false               // Allow images bigger than screen ?
}
var images;         // Gallery Array [gallery name][link]
var elem;           // HTML element currently used to display box
var isOpen = false; // Zoombox already opened ?
var link;           // Shortcut for the link
var width;
var height;
var timer;          // Timing for img loading
var i = 0;          // iteration variable
var content;        // The content of the box
var type = 'multimedia'; // Content type
var position = false;
var imageset = false;
var state = 'closed';

/**
* You can edit the html code generated by zoombox for specific reasons.
* */
var html = '<div id="zoombox"> \
            <div class="zoombox_mask"></div>\
            <div class="zoombox_container">\
                <div class="zoombox_content"></div>\
                <a class="zoombox_title"></a>\
                <div class="zoombox_next"></div>\
                <div class="zoombox_prev"></div>\
                <div class="zoombox_close"></div>\
            </div>\
            <div class="zoombox_gallery"></div>\
        </div>';
// Regular expressions needed for the content
var filtreImg=                  /(\.jpg)|(\.jpeg)|(\.bmp)|(\.gif)|(\.png)/i;
var filtreMP3=			/(\.mp3)/i;
var filtreFLV=			/(\.flv)/i;
var filtreSWF=			/(\.swf)/i;
var filtreQuicktime=	/(\.mov)|(\.mp4)/i;
var filtreWMV=			/(\.wmv)|(\.avi)/i;
var filtreDailymotion=	/(http:\/\/www.dailymotion)|(http:\/\/dailymotion)/i;
var filtreVimeo=		/(http:\/\/www.vimeo)|(http:\/\/vimeo)/i;
var filtreYoutube=		/(youtube\.)/i;
var filtreKoreus=		/(http:\/\/www\.koreus)|(http:\/\/koreus)/i;
var galleryLoaded = 0;

$.zoombox = function(el,options) {

}
$.zoombox.options = options;
$.zoombox.close = function() {
    close();
}
$.zoombox.open = function(tmplink,opts){
    elem = null;
    link = tmplink;
    //alert("teste");
    options = $.extend({},$.zoombox.options,opts);
    load();
}
$.zoombox.html = function(cont,opts){
    content = cont;
    options = $.extend({},$.zoombox.options,opts);
    width = options.width;
    height = options.height;
    elem = null;
    open();
}
$.fn.zoombox = function(opts){

    images = new Array(); // allow multiple call on one page, for content loaded from ajax

    /**
     * Bind the behaviour on every Elements
     */
    return this.each(function(){
        // No zoombox for IE6
        if($.browser && $.browser.msie && $.browser.version < 7 && !window.XMLHttpRequest){
            return false;
        }
        var obj = this;
        var galleryRegExp =  /zgallery([0-9]+)/;
        var skipRegExp =  /zskip/;
        var gallery = galleryRegExp.exec($(this).attr("class"));
        var skip = skipRegExp.exec($(this).attr("class"));
        var tmpimageset = false;
        if(gallery != null){
            if(!images[gallery[1]]){
                images[gallery[1]]=new Array();
            }
            if (skip == null) {
                images[gallery[1]].push($(this));
            }
            var pos = images[gallery[1]].length-1;
            tmpimageset = images[gallery[1]];
        }
        $(this).unbind('click').click(function(){
            options = $.extend({},$.zoombox.options,opts);
            if(state!='closed') return false;
            if (skip != null) {
                if (pos < images[gallery[1]].length-1) {
                    elem = images[gallery[1]][pos+1];
                }
            } else {   
                elem = $(obj);
            }
            imageset = tmpimageset;
            link = elem.attr('href');
            position = pos;
            load();
            return false;
        });
    });
}

/**
 * Load the content (with or without loader) and call open()
 * */
function load(){
    if(state=='closed') isOpen = false;
    state = 'load';
    setDim();
    if(filtreImg.test(link)){
        img=new Image();
        img.src=link;
        $("body").append('<div id="zoombox_loader"></div>');
        $("#zoombox_loader").css("marginTop",scrollY());
        timer = window.setInterval(function(){loadImg(img);},100);
    }else{
        setContent();
        open();
    }
}

/**
 * Build the HTML Structure of the box
 * */
function build(){
    // We add the HTML Code on our page
    $('body').append(html);
    $(window).keydown(function(event){
        shortcut(event.which);
    });
    $(window).resize(function(){
        resize();
    });
    $('#zoombox .zoombox_mask').hide();
    // We add a specific class to define the box theme
    $('#zoombox').addClass(options.theme);
    // We bind the close behaviour (click on the mask / click on the close button)
    $('#zoombox .zoombox_mask,.zoombox_close').click(function(){
        close();
        return false;
    });
    // Next/Prev button
    if(imageset == false){
        $('#zoombox .zoombox_next,#zoombox .zoombox_prev').remove();
    }else{
        $('#zoombox .zoombox_next').click(function(){
            next();
        });
        $('#zoombox .zoombox_prev').click(function(){
            prev();
        });
    }
}

/**
*   Gallery System (with slider if too much images)
*/
function gallery(){
    var loaded = 0;
    var width = 0;
    var contentWidth = 0;
    if(options.gallery){
        if(imageset === false){
            $('#zoombox .zoombox_gallery').remove();
            return false;
        }
        for(var i in imageset){
            var imgSrc = zoombox_path+'img/video.png';
            var img = $('<img src="'+imgSrc+'" class="video gallery'+(i*1)+'"/>');
            if(filtreImg.test(imageset[i].attr('href'))){
               imgSrc = imageset[i].attr('href')
               img = $('<img src="'+imgSrc+'" class="gallery'+(i*1)+'"/>');
            }
            img.data('id',i).appendTo('#zoombox .zoombox_gallery')
            img.click(function(){
               gotoSlide($(this).data('id'));
               $('#zoombox .zoombox_gallery img').removeClass('current');
               $(this).addClass('current');
            });
            if(i==position){ img.addClass('current'); }

            // Listen the loading of Images
            $("<img/>").data('img',img).attr("src", imgSrc).load(function() {
                    loaded++;
                    var img = $(this).data('img');
                    img.width(Math.round(img.height() * this.width/this.height));
                    if(loaded == $('#zoombox .zoombox_gallery img').length){
                        var width = 0;
                        $('#zoombox .zoombox_gallery img').each(function(){
                            width += $(this).outerWidth();
                            $(this).data('left',width);
                        });
                        var div = $('<div>').css({
                            position:'absolute',
                            top:0,
                            left:0,
                            width: width
                        });
                        $('#zoombox .zoombox_gallery').wrapInner(div);
                        contentWidth = $('#zoombox .zoombox_gallery').width();
                        $('#zoombox').trigger('change');
                    }
                });
        }
        $('#zoombox .zoombox_gallery').show().animate({bottom:0},options.duration);
    }

    $('#zoombox').bind('change',function(e,css){
        if($('#zoombox .zoombox_gallery div').width() < $('#zoombox .zoombox_gallery').width){
            return true;
        }
        var d = 0;
        var center = 0;
        if(css != null){
            d = options.duration;
            center = css.width / 2;
        }else{
            center = $('#zoombox .zoombox_gallery').width()/2;
        }
        var decal = - $('#zoombox .zoombox_gallery img.current').data('left') + $('#zoombox .zoombox_gallery img.current').width() / 2;
        var left = decal + center;
        if(left < center * 2 - $('#zoombox .zoombox_gallery div').width() ){
            left = center * 2 - $('#zoombox .zoombox_gallery div').width();
        }
        if(left > 0){
            left = 0;
        }
        $('#zoombox .zoombox_gallery div').animate({left:left},d);
    });

}


/**
 * Open the box
 **/
function open(){
    if(isOpen == false) build(); else $('#zoombox .zoombox_title').empty();
    $('#zoombox .close').hide();
    $('#zoombox .zoombox_container').removeClass('multimedia').removeClass('img').addClass(type);

    // We add a title if we find one on the link
    if(elem != null && elem.attr('title')){

        // $('#zoombox .zoombox_title').append(elem.attr('title'));

         //$('#zoombox .zoombox_title').attr('href',elem.attr('title'));

         var x=elem.attr('title');
         var tab=x.split("+");
         $('#zoombox .zoombox_title').attr('href',tab[0]);
         $('#zoombox .zoombox_title').html(tab[1]);

//alert(tab[1]);
    }



    // And after... Animation or not depending of preferences
    // We empty the content
    $('#zoombox .zoombox_content').empty();
    // If it's an image we load the content now (to get a good animation)
    if(type=='img' && isOpen == false && options.animation == true){
        $('#zoombox .zoombox_content').append(content);
    }
    // Default position/size of the box to make the "zoom effect"
    if(elem != null && elem.find('img').length != 0 && isOpen == false){
        var min = elem.find('img');
        $('#zoombox .zoombox_container').css({
            width : min.width(),
            height: min.height(),
            top : min.offset().top,
            left : min.offset().left,
            opacity:0,
            marginTop : min.css('marginTop')
        });
    }else if(elem != null && isOpen == false){
        $('#zoombox .zoombox_container').css({
           width:   elem.width(),
           height:  elem.height(),
           top:elem.offset().top,
           left:elem.offset().left
        });
    }else if(isOpen == false){
        $('#zoombox .zoombox_container').css({
            width: 100,
            height: 100,
            top:windowH()/2-50,
            left:windowW()/2-50
        })
    }
    // Final position/size of the box after the animation
    var css = {
        width : width,
        height: height,
        left  : (windowW() - width) / 2,
        top   : (windowH() - height) / 2,
        marginTop : scrollY(),
        opacity:1
    };

    // Trigger the change event
    $('#zoombox').trigger('change',css);

    // Do we animate or not ?
    if(options.animation == true){
        // $('#zoombox .zoombox_title').hide();
        // $('#zoombox .zoombox_close').hide();
        $('#zoombox .zoombox_container').animate(css,options.duration,function(){
            if(type == 'multimedia' || isOpen == true){
                $('#zoombox .zoombox_content').append(content);
            }
            if(type == 'image' || isOpen == true){
                $('#zoombox .zoombox_content img').css('opacity',0).fadeTo(300,1);
            }
            $('#zoombox .zoombox_title').fadeIn(300);
            $('#zoombox .zoombox_close').fadeIn(300);
            state = 'opened';
            if(!isOpen){
                gallery();
            }
            isOpen = true;
        });
        $('#zoombox .zoombox_mask').fadeTo(200,options.opacity);
    }else{
        $('#zoombox .zoombox_content').append(content);
        $('#zoombox .zoombox_close').show();
        $('#zoombox .zoombox_gallery').show();
        $('#zoombox .zoombox_container').css(css);
        $('#zoombox .zoombox_mask').show();
        $('#zoombox .zoombox_mask').css('opacity',options.opacity);
        if(!isOpen){
            gallery();
        }
        isOpen = true;
        state = 'opened';
    }
}
/**
 * Close the box
 * **/
function close(){
    state = 'closing';
    window.clearInterval(timer);
    $(window).unbind('keydown');
    $(window).unbind('resize');
    if(type == 'multimedia'){
        $('#zoombox .zoombox_container').empty();
    }
    var css = {};
    if(elem != null && elem.find('img').length > 0){
        var min = elem.find('img');
        css ={
            width : min.width(),
            height: min.height(),
            top : min.offset().top,
            left : min.offset().left,
            opacity:0,
            marginTop : min.css('marginTop')
        };
    }else if(elem!=null){
        css = {
           width:   elem.width(),
           height:  elem.height(),
           top:elem.offset().top,
           left:elem.offset().left,
           marginTop:0,
           opacity:0
        };
    }else{
        css = {
            width: 100,
            height: 100,
            top:windowH()/2-50,
            left:windowW()/2-50,
            opacity : 0
        };
    }
    if(options.animation == true){
        $('#zoombox .zoombox_mask').fadeOut(200);
        $('#zoombox .zoombox_gallery').animate({bottom:-$('#zoombox .zoombox_gallery').innerHeight()},options.duration);
        $('#zoombox .zoombox_container').animate(css,options.duration,function(){
            $('#zoombox').remove();
            state = 'closed';
			isOpen = false;
        });
    }else{
        $('#zoombox').remove();
        state = 'closed';
		isOpen = false;
    }
}

/**
 * Set the HTML Content of the box
 * */
function setContent(){
    // Overtflow
    if(options.overflow == false){
        if(width*1 + 50 > windowW()){
            height = (windowW() - 50) * height / width;
            width = windowW() - 50;
        }
        if(height*1 + 50 > windowH()){
            width = (windowH()-50) * width / height;
            height = windowH() - 50;
        }
    }
    var url = link;
    type = 'multimedia';
        type = 'img';
        content='<img src="'+link+'" width="100%" height="100%"/>';
    
    return content;
}
/**
 *  Handle Image loading
 **/
function loadImg(img){
    if(img.complete){
            i=0;
            window.clearInterval(timer);
            width=img.width;
            height=img.height;
            $('#zoombox_loader').remove();
            setContent();
            open();
    }
    // On anim le loader
    $('#zoombox_loader').css({'background-position': "0px "+i+"px"});
    i=i-40;
    if(i<(-440)){i=0;}
}

function gotoSlide(i){
    if(state != 'opened'){ return false; }
    if (imageset) {
        position = i;
        elem = imageset[position];
        link = elem.attr('href');
        if($('#zoombox .zoombox_gallery img').length > 0){
            $('#zoombox .zoombox_gallery img').removeClass('current');
            $('#zoombox .zoombox_gallery img:eq('+i+')').addClass('current');
        }
        load();
    }
    return false;
}

function next(){
    i = position+1;
    if(i  > imageset.length-1){
        i = 0;
    }
    gotoSlide(i);
}

function prev(){
    i = position-1;
    if(i < 0){
        i = imageset.length-1;
    }
    gotoSlide(i);
}

/**
 * GENERAL FUNCTIONS
 * */
/**
 * Resize
 **/
function resize(){
    $('#zoombox .zoombox_container').css({
        top : (windowH() - $('#zoombox .zoombox_container').outerHeight(true)) / 2,
        left : (windowW() - $('#zoombox .zoombox_container').outerWidth(true)) / 2
    });
}
/**
 * Keyboard Shortcut
 **/
function shortcut(key){
    if(key == 37){
        prev();
    }
    if(key == 39){
        next();
    }
    if(key == 27){
        close();
    }

}
/**
 * Parse Width/Height of a link and insert it in the width and height variables
 * */
function setDim(){
    width = options.width;
    height = options.height;
    if(elem!=null){
        var widthReg = /w([0-9]+)/;
        var w = widthReg.exec(elem.attr("class"));
        if(w != null){
            if(w[1]){
                width = w[1];
            }
        }
        var heightReg = /h([0-9]+)/;
        var h = heightReg.exec(elem.attr("class"));
        if(h != null){
            if(h[1]){
                height = h[1];
            }
        }
    }
    return false;
}
/**
* Return the window height
* */
function windowH(){
        if (window.innerHeight) return window.innerHeight  ;
        else{return $(window).height();}
}

/**
 * Return the window width
 * */
function windowW(){
        if (window.innerWidth) return window.innerWidth  ;
        else{return $(window).width();}
}

/**
 *  Return the position of the top
 *  */
function scrollY() {
        scrOfY = 0;
        if( typeof( window.pageYOffset ) == 'number' ) {
                //Netscape compliant
                scrOfY = window.pageYOffset;
        } else if( document.body && ( document.body.scrollTop ) ) {
                //DOM compliant
                scrOfY = document.body.scrollTop;
        } else if( document.documentElement && ( document.documentElement.scrollTop ) ) {
                //IE6 standards compliant mode
                scrOfY = document.documentElement.scrollTop;
        }
        return scrOfY;
}

/**
 *  Return the position of the left scroll
 *  */
function scrollX(){
        scrOfX = 0;
        if( typeof( window.pageXOffset ) == 'number' ) {
                //Netscape compliant
                scrOfX = window.pageXOffset;
        } else if( document.body && ( document.body.scrollLeft ) ) {
                //DOM compliant
                scrOfX = document.body.scrollLeft;
        } else if( document.documentElement && ( document.documentElement.scrollLeft ) ) {
                //IE6 standards compliant mode
                scrOfX = document.documentElement.scrollLeft;
        }
         return scrOfX;
}

})(jQuery);


if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.2",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.2",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.2",c.TRANSITION_DURATION=6000,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.2",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.2",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.2",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.2",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.2",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.2",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.2",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()
}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.2",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);


jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
});


/*global console:false */
/*
 * jQuery paged scroll  - different approach for infinite scroll
 *
 * Copyright (c) 2013 Dmitry Mogilko
 * Licensed under the MIT license.
 */

/*
 /* Finish now
 TODO  : horizontal scroll.
/* Finish later
 TODO :  qunit ,simulate scroll - http://stackoverflow.com/questions/6761659/simulate-scroll-event-using-javascript
 TODO :  think about  giving option of calculating trigger on last element of the binder,may be use waypoints plugin.
 TODO  : think about disabling scroll until targetHtml is changed or callback called.

 */
(function ($, window, document, undefined) {
    'use strict';

    /*
     Constructor
     */
    $.ajax_scroll = function (element, options) {

        this.settings = $.extend({},$.ajax_scroll.defaults, options);

        /*
         check if we have everything valid before we start
         */
        this._validate(this.settings);

        /*
         init plugin
        */
        this.timerInterval = -1;
        this.lastDocHeight = 0;
        this.proccesingCallback = false;
        this.lastScrollPosition = 0;
        this.lastHtmlLength = $(this.settings.targetElement).html().length;
        this.instanceID = "paged_scroll" + Math.round(Math.random() * 9999999999);
        var $this = this;

        /*
            create on scroll event handler
         */
        var scrollProcess = (function ($this) {
            return function () {
                if ($this.settings.useScrollOptimization) {
                    if ($this.timerInterval === -1) {
                        $this._debug("Setting timeout:", $this.settings.checkScrollChange);
                        $this.timerInterval = setTimeout(function () {
                            //$this.debug("Running after timeout:");
                            $this._checkScroll(element, $, window, document, $this.settings);
                            $this.timerInterval = -1;

                        }, $this.settings.checkScrollChange);
                    }
                    else {
                        //$this._debug('Ignore this scroll...And saving all the DOM access and calculations');
                    }

                }
                else {
                    $this._checkScroll(element, $, window, document, $this.settings);
                }
            };

        })($this);

        //bind on scroll
        $(element).on('scroll', scrollProcess);
    };

    /*
     Plugin defaults
     */
    $.ajax_scroll.defaults = {

        /*
         required
         your  callback which called which will be called with current page number
         */
        handleScroll:function (page, container, doneCallback) {
            return true;
        },

        /*
         required
         amount of pixels or amount of percent of container (calculated to pixel by plugin) from bottom, to start scroll
         */
        triggerFromBottom:'10%',

        /*
            html to show when loading
        */
        loading : {
             html:'<div class="load"><img src="css/ajax-loader.gif" alt="Loading..."></div>'
              
        },

    /*
     required
     element where content will be inserted
     */
        targetElement:null,

        /*
         optional,default is 0
         page number to start with
         */
        startPage:0,

        /*
         optional
         null means infinite scroll
         */
        pagesToScroll:null,

        /*  optional
         before page hook ,if returns false execution stops
         */
        beforePageChanged:function (page, container) {
            return true;
        },

        /*
         optional
         after page scroll callback
         */
        afterPageChanged:function (page, container) {
            return true;
        },

        /*
         optional
         NOT RECOMMENDED to CHANGE!!!
         default : true
         if scroll optimization used ,plugin will not access DOM each time scroll is triggered and will save a lot of overhead,because of not calling callback logic each time
         */
        useScrollOptimization:true,

        /*
         timeout in milliseconds to use in order to check  if scroll change is significant enough to call the "handleScroll" callback
         */
        checkScrollChange:500,

        /*
            frequency to check that target html is checked
        */
        monitorChangeInterval : 300,

        /*
         if monitor target element where finally generated content is inserted

         */
        monitorTargetChange:true,
        /*
         if use debug
         */
        debug:false
    };

    /*
     Use prototype to optimize multiple instances
     */
    $.ajax_scroll.prototype = {

        _calculateStep:function (settings) {
            return (settings.triggerFromBottom.toString().indexOf('%') > -1) ? parseFloat(settings.triggerFromBottom.replace('%', '')) : parseFloat(settings.triggerFromBottom);
        },

        _validate:function (settings) {
            var step = this._calculateStep(settings);
            if (isNaN(step)) {
                throw "Step need to be provided as number or percentage,50 or 5% fro percent for example";
            }
            if (!settings.targetElement || $(settings.targetElement).length === 0) {
                throw "Please provide the selector of target element.(Element where you finally insert the new content)";
            }

        },

        _checkCallbackDone : function(settings,loadingHtml){
            this._debug("Checking target html for change...");
            if (settings.monitorTargetChange && $(settings.targetElement).is(":visible") ) {
                var lastHtmlLength = $(settings.targetElement).html().length;
                if (lastHtmlLength !== this.lastHtmlLength) {
                    this._debug("Html is changed");
                    this.lastHtmlLength = lastHtmlLength;
                    this.proccesingCallback = false;
                    $(loadingHtml).hide();
                }
                else{
                    var $this = this;
                    this._debug("Html is not changed.Check later");
                    setTimeout(function(){$this._checkCallbackDone.call($this,$this.settings,loadingHtml);},$this.settings.monitorChangeInterval);
                }

            }
        },

        _getScrollData:function ($, element, window, document, $this, settings) {
            var elemHeight = parseFloat($(element).height()) , elemScroll = parseFloat($(element).scrollTop()),
                isWindow = (element.self === window) , docHeight = isWindow ? parseFloat($(document).height()) : elemHeight,
                step = docHeight / $this._calculateStep(settings);
            return {elemHeight:elemHeight, elemScroll:elemScroll, isWindow:isWindow, docHeight:docHeight, step:step};
        },

        /*
            plugin logic which check if we need to call the callback
        */
        _checkScroll:function (element, $, window, document, settings) {
            this._debug("Checking scroll on  : " + this.instanceID);
            var $this = this;
            //if element on which content is inserted became not visible don't do exit
            if (settings.targetElement && !$(settings.targetElement).is(":visible")) {
                $this._debug("Ignoring the call because target element is not  visible.Exit scroll check ..");
                return;
            }

            /*
                check if callback is still in process
             */
            if ($this.proccesingCallback) {
                $this._debug("Processing callback.Exit...");
                return;
            }


            /*
                get all scroll data in order to understand if we at requested scroll point
            */
            var scrollData = $this._getScrollData($, element, window, document, $this, settings);
            var elemHeight = scrollData.elemHeight;
            var elemScroll = scrollData.elemScroll;
            var isWindow = scrollData.isWindow;
            var docHeight = scrollData.docHeight;
            var step = scrollData.step;

            $this._debug(["Elem height : ", elemHeight, ".Elem scroll :", elemScroll, ".Step is :", step, ".DocHeight :", docHeight, ".Last element height:", $this.lastDocHeight].join(""));
             /*
                calculate  window height + scroll  + step
             */
            var position = isWindow ? elemHeight + elemScroll + step : elemScroll + step;
            $this._debug("Position:" + position + ".Last position:" + $this.lastScrollPosition + ".Last element height:" + $this.lastDocHeight);
            var isPos = (position > $this.lastScrollPosition);
            /*
             understand if we have infinite pages number to scroll and if not, understand we are still not scrolled maximum o page requested.
             */
            var isPageMax = !settings.pagesToScroll || (settings.pagesToScroll && (settings.startPage < settings.pagesToScroll));


            /*
             check that we are at the requested scroll position
             */
            if (position >= docHeight) {
                /*
                 don't handle scrolling back to top and also check if we got to maximum pages to scroll
                 */
                if (isPos && isPageMax) {
                    this.lastScrollPosition = position;
                    this.lastDocHeight = docHeight;
                    settings.startPage = settings.startPage + 1;
                    settings.beforePageChanged(settings.startPage, element);
                    $this._debug("Calling 'handleScroll' callback");
                    $this.proccesingCallback = true;
                    var loadingHtml = $($this.settings.loading.html).appendTo($($this.settings.targetElement));
                    $this.lastHtmlLength = $(settings.targetElement).html().length;
                    settings.handleScroll(settings.startPage, element, function () {
                        $this._debug("Callback done.");
                        $this.proccesingCallback = false;
                        loadingHtml.hide();
                    });

                    $this._checkCallbackDone.call($this, $this.settings, loadingHtml);
                    settings.afterPageChanged(settings.startPage, element);


                }

            }
        }, ///check scroll

        /*
         borrowed from  paul irish infinite scroll : hhttps://github.com/paulirish/infinite-scroll - make use of console safe
         */
        _debug:function () {
            try
            {


            if (!this.settings.debug) {
                return;
            }

            // if (typeof console !== 'undefined' && typeof console.log === 'function') {
            //     // Modern browsers
            //     // Single argument, which is a string
            //     if ((Array.prototype.slice.call(arguments)).length === 1 && typeof Array.prototype.slice.call(arguments)[0] === 'string') {
            //         console.log((Array.prototype.slice.call(arguments)).toString());
            //     } else {
            //         console.log(Array.prototype.slice.call(arguments));
            //     }
            // } else if (!Function.prototype.bind && typeof console !== 'undefined' && typeof console.log === 'object') {
            //     // IE8
            //     Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments));
            // }
        }
        catch(e){

        }


        }



    };

    /*
     create scroll instances
     */
    $.fn.paged_scroll = function (options) {
        return this.each(function () {
            var instance = new $.ajax_scroll(this, options);
            $.data(this, 'jqueryPagedScroll', instance);
        });
    };


}(jQuery, window, document));


/**
 * Translator Revolution Lite
 * http://goo.gl/1kVfu
 *
 * LICENSE
 *
 * You need to buy a license if you want use this script.
 * http://codecanyon.net/legal/membership/
 *
 * @package    Translator Revolution Lite
 * @copyright  Copyright (c) 2012, Federico Stabile, surstudio.net
 * @license    http://codecanyon.net/licenses/regular_extended/
 * @version    1.8.3
 * @date       2012-09-19
 */

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('L.1x.1h({M:D(b){J w.1k(D(){B a=1a L.7c(w,b);L.M.5B[a.7h()]=a})}});L.7c=D(k,l){B m;w.A=1g;w.1c=1g;w.1r=1g;w.2t=1g;w.2m=1g;w.3N=0;B n={};w.88=D(a,b){w.6k(b);w.44(a);C(w.6S()){w.7a();w.7Q();w.8g()}R{2z{B c=[];C(w.A.1l[0]=="")c.1e("az 1l 8K.");c.1e("8O M...");3b.3t(c.3E(" "))}2F(e){};w.6F()}};w.7h=D(){J w.A.1n};w.6F=D(){w.1c.ap()};w.6S=D(){C(18 w.A.6q!="1b"&&w.A.6q.K==56){4P("2X 2Z aL. aS 2X 2Z aT 1K be aU 35 7l aV 3D, aW 35 7l aY.1V.6C b6.");J N}J w.A.1l[0]!=""&&!w.A.b7};w.7Q=D(){C(18 w.A.2V=="D"||18 w.A.2V=="1z")C(w.A.2V.1y)w.A.2V(w,w.A)};w.6k=D(h){w.A=L.1h({},h);C(w.A.1l==m)w.A.1l=["4S","6h","6g","6e","66","8l","7W","2R"];C(!(w.A.1l 4h 2O))w.A.1l=[w.A.1l];C(w.A.2j==m||!w.1s(w.A.2j))w.A.2j=Q;C(w.A.1I==m||!w.1s(w.A.1I))w.A.1I=Q;C(w.A.2N==m||!w.1s(w.A.2N))w.A.2N=N;C(w.A.5R==m)w.A.5R="6E";C(w.A.5y==m)w.A.5y="2J:6s, .bi-1K-O-bk, .bl-O";C(w.A.1W==m||!w.1s(w.A.1W))w.A.1W=Q;C(w.A.4n==m||!w.1s(w.A.4n))w.A.4n=Q;C(w.A.1d==m||!w.1s(w.A.1d))w.A.1d=N;C(w.A.2e==m||!4o(w.A.2e))w.A.2e=30;R{w.A.2e=4o(w.A.2e);C(w.A.2e>5M)w.A.2e=5M}C(w.A.2D==m||!w.1s(w.A.2D))w.A.2D=N;C(w.A.1P==m||!4o(w.A.1P))w.A.1P=5;R{w.A.1P=4o(w.A.1P);C(w.A.1P>10)w.A.1P=5}C(w.A.1n==m)w.A.1n="M-1A";R w.A.1n.W(/\\s+/g,"-");C(w.A.V==m||w.A.V=="")w.A.V="4S";C(w.A.3k==m||!w.1s(w.A.3k))w.A.3k=Q;C(w.A.53==m)w.A.53="";C(w.A.2V==m)w.A.2V=D(a,b){};C(w.A.2B==m)w.A.2B=D(a,b,c,d,e){};C(w.A.1L==m)w.A.1L=D(a,b,c,d,e,f,g){};C(w.A.5u==m)w.A.5u=\'<2i 1V="{{ 6p }}"><6l bx="0" by="0" bz="0"><8o><5z>{{ 3V }}</5z></8o></6l></2i>\';C(w.A.4F==m)w.A.4F=\'<5s 1V="5s-{{ 5K }}"><a 6z="6H:;" 6M="{{ 2Y }}" 1V="{{ 5K }}">{{ 3V }}</a></5s>\';C(w.A.4z==m)w.A.4z=\'<bR 2P="{{ 2P }}" 7o="{{ 2Y }}" />\';C(w.A.5C==m)w.A.5C=\'<8q>{{ 2Y }}</8q>\';C(w.A.2w==m||!w.1s(w.A.2w))w.A.2w=Q;C(w.A.2k==m||!w.1s(w.A.2k))w.A.2k=Q;C(w.A.1i==m||!w.1s(w.A.1i))w.A.1i=Q;C(w.A.4D==m)w.A.4D=\'<2i 1V="{{ 7I }} {{ 7Y }}"><a 6z="6H:;" 6M="85" 1V="{{ 87 }}">85</a></2i>\';C(w.A.4E==m)w.A.4E="bw/";C(w.A.1E==m)w.A.1E="M-6o-";C(w.A.2s==m)w.A.2s="M-6x-6o-";C(w.A.4L==m)w.A.4L="M-2j";C(w.A.4W==m)w.A.4W="M-1I";C(w.A.55==m)w.A.55="M-79-1I";C(w.A.5a==m)w.A.5a="M-2j-7q-1I";C(w.A.5c==m)w.A.5c="M-2j-7q-79-1I";C(w.A.3v==m)w.A.3v="M-2k-5t";C(w.A.2q==m)w.A.2q="M-bv-5t";C(w.A.4v==m)w.A.4v="M-4u";C(w.A.4s==m)w.A.4s="M-4u-6x";C(w.A.4A==m)w.A.4A="M-bu-4u";C(w.A.3f==m)w.A.3f="M-2w";C(w.A.3h==m)w.A.3h="M-2w-4u";C(w.A.4G==m)w.A.4G="M-6s";w.A.4H=w.7b();C(18 w.A.7f=="1z")w.A=L.1h(w.A,w.A.7f);w.A.3i=L.1h({},L.O().4M());w.7G();w.A.1F=w;w.7L();w.7M()};w.7b=D(){B a=1D.bt("86");B b="";C(a&&a.K>0)P(B i=0;i<a.K;i++)C(a[i].2P&&a[i].2P.2C(/1A\\.M\\.65\\.6j/))b=a[i].2P.W(/(.*)1A\\.M\\.65\\.6j.*/,"$1");J b+"../bs/bq.1V.6C"};w.7a=D(){C(18 1d=="1b")J;C(!w.A.1d){1d.6r();J}B a=w.A.1n+"6t";C(w.A.2D&&!1d.4r(a)){B b=1a 1Z();1d.6r();1d.5O(a,b.6J())}R C(!w.A.2D)1d.6K(a)},w.7G=D(){C(18 w.A.6L!="1z")J;w.A.3i=L.1h(w.A.3i,w.A.6L)};w.7M=D(){B a=1D.4q("2i");B b;C(w.A.2w){b=1D.4q("2i");b.2v=w.A.3f;a.4p(b)}C(w.A.2k){b=1D.4q("2i");b.2v=w.A.3v;a.4p(b)}C(w.A.1i){b=1D.4q("2i");b.2v=w.A.2q;a.4p(b)}a.4C.bp="bo";a.4C.5t="-7z";a.4C.bn="-7z";1D.6E.4p(a)};w.7L=D(){P(B i=0;i<L.M.3B.K;i++)C(w.A.1n==L.M.3B[i])w.A.1n+="-"+L.M.3B.K;L.M.3B.1e(w.A.1n)};w.44=D(a){w.1c=L(a);w.7K();C(w.A.2j){C(w.A.1I){C(w.A.2N)w.1c.1w(w.A.5c);R w.1c.1w(w.A.5a)}R w.1c.1w(w.A.4L)}R C(w.A.1I){C(w.A.2N)w.1c.1w(w.A.55);R w.1c.1w(w.A.4W)}w.A.1c=w.1c;w.2t=w.1c.2f("[1V^="+w.A.1E+"]");P(B i=0;i<w.2t.K;i++)w.2t[i].1F=w;w.2m=w.1c.2f("."+w.A.3f);P(B i=0;i<w.2m.K;i++)w.2m[i].1F=w};w.7K=D(){B a=w.1c.2f("[1V^="+w.A.1E+"]");B b=Q;B c=1a 2G("\\\\b"+w.A.1E+"([a-bm-Z\\-]{2,6})\\\\b");P(B i=0;i<a.K;i++)C(c.2H(a[i].2v))b=N;C(a.K==0||(a.K>0&&b)){w.1c.5b(w.68());C(18 w.A.6f=="1b")w.1c.1w(w.A.4v);R w.1c.1w(w.A.4s);w.1c.1w(w.A.1n)}};w.8g=D(){w.2t.6i(D(){C(L.M.4m.5i())J;L(w).bj();C(w.1F.1r&&w.1F.1r.28(0)==w){w.1F.2I();J}w.1F.2b(w)});w.2m.6i(D(){C(L.M.4m.5i())J;w.1F.2I()});B a=Q;C(w.A.1W){B b=L.3c("M-"+w.A.1n+"-X");C(b!=m){b=b.19();B c=w.1c.2f("."+w.A.2s+b);C(c.K>0){w.2b(c.28(0));a=N}R{c=w.1c.2f("."+w.A.1E+b);B d=1a 2G("\\\\b"+w.A.2s+".*\\\\b");P(B i=0;i<c.K;i++){B e=d.2H(c.28(i).2v);C(!e){w.2b(c.28(i));a=N;1f}}}}}C(a&&w.A.3k&&w.A.1i){B f="."+w.A.1E+w.A.V;B c=w.1c.2f(f.19());C(c.K>0){w.1r=L(c.28(0));w.1r.1w(w.A.2q)}}};w.2I=D(){w.3e(N);L.3c("M-"+w.A.1n+"-X",1g,{2K:"/"});B a=w.A.V;B b="."+w.A.1E+a;B c=w.1c.2f(b.19());w.1r=L(c.28(0));w.4l(a,w.A,Q)};w.bh=D(a){B b=w.2L(a);C(w.1r){C(w.2L(w.1r.28(0))==b)J N}R C(b==w.A.V)J N;J Q};w.2b=D(a){B b=w.2L(a);C(b==w.A.V){w.2I();J}w.6R(a);C(w.A.1W){C(w.A.4n)L.3c("M-"+w.A.1n+"-X",w.5Q(a),{1p:5M,2K:"/"});R L.3c("M-"+w.A.1n+"-X",w.5Q(a),{2K:"/"})}C(!w.7d(b))w.4j(w,b);R w.4l(b,w.A,N)};w.7g=D(){w.3N++},w.7n=D(){w.3N=0},w.4y=D(){J w.3N>=3},w.7d=D(a){B b=w.A.V+"1j"+a;B c=n[b];C(!c)J N;C(c.1m)J N;C(c.1p)J c.1p>1a 1Z();R J Q};w.2Q=D(a){B b=["1S 2X 2Z","1S 3m 4d 7N","1S 3m 4d 7O","1S 7S 2X 2Z","7U 1K 7V"];B c;P(B i=0;i<b.K;i++){c=1a 2G(b[i]);C(c.2H(a)){4P(a);J Q}}};w.4j=D(d,e){B f=1a L.M.1B();f.2S=D(a){B b=d.A.V+"1j"+e;n[b]=L.M.4I.4J(a);C(n[b].1m){C(n[b].1m==="4K 8h"){C(!d.4y()){d.2o(n[b].1m);d.4j(d,e);J}}d.2o(n[b].1m);d.3p(d.A);d.2I();J}R d.7n();C(n[b].1p){B c=1a 1Z();n[b].1p=c.bd(c.bc()+n[b].1p)}d.4l(e,d.A,N)};f.1q("4N","6a");f.1q("f",w.A.V);f.1q("t",e);w.7g();f.4O(w.A.4H)};w.2o=D(a){2z{C(a 4h 2O){P(B i=0;i<a.K;++i){P(B b 35 a[i]){w.2Q(a[i][b]);3b.3t(a[i][b])}}}R{w.2Q(a);3b.3t(a)}}2F(e){}};w.4l=D(g,h,i){B j=18 h.6f=="1b"?h.4v:h.4s;L(h.5R).O({2u:w.A.1n,M:w,1Y:n,4c:w.A.4H,V:h.V,X:g,52:h.1d,6m:h.2e,6n:h.2D,4b:Q,Y:Q,1K:L.b8(L(h.5y),L("."+j)),1P:w.A.1P,43:N,2g:N,3w:D(a,b,c,d,e){h.1F.6y(a,b,c,d,e)},1i:D(a,b,c,d,e,f){h.1F.5e(i,a,b,c,d,e,f)},1m:D(){h.1F.5e(i)}})};w.5Q=D(a){B b=1a 2G("\\\\b"+w.A.2s+".*\\\\b");B c=b.2H(a.2v);C(!c)J w.2L(a);c=c[0].1T(" ")[0];B d=c.W(w.A.2s,"");d=d.W(/^\\s*|\\s*$/g,"");d=d.19();J d};w.2L=D(a){B b=1a 2G("\\\\b"+w.A.1E+".*\\\\b");B c=b.2H(a.2v);C(!c)J;c=c[0].1T(" ")[0];B d=c.W(w.A.1E,"");d=d.W(/^\\s*|\\s*$/g,"");d=d.19();C(d=="1u-cn")d="1u-3Y";R C(d=="1u-b3")d="1u-3W";J d};w.6y=D(a,b,c,d,e){w.3e(N);C(18 w.A.2B=="D"||18 w.A.2B=="1z")C(w.A.2B.1y)w.A.2B(a,b,c,d,e,n)};w.5e=D(a,b,c,d,e,f,g){w.3p(w.A);C(!a){C(w.A.1i)w.1r.1w(w.A.2q);C(w.2L(w.1r.28(0))==f)w.3e(Q)}R C(w.A.1i&&w.A.3k)w.1r.1w(w.A.2q);C(18 w.A.1L=="D"||18 w.A.1L=="1z")C(w.A.1L.1y)w.A.1L(b,c,d,e,f,g,a,n)};w.6R=D(a){w.1r=L(a);w.3p(w.A);C(w.A.2k)w.1r.1w(w.A.3v);w.3e(N)};w.3e=D(a){C(a)w.2m.3a("."+w.A.3h).b2(6N);R w.2m.3a("."+w.A.3h).b0(aZ)};w.3p=D(a){w.2t.6U(a.3v);w.2t.6U(a.2q)};w.68=D(){B a=[];B b;B c;B d;P(B i=0;i<w.A.1l.K;i++){c="";d="";C(w.A.2j)c=w.6Y(w.A.1l[i]);C(w.A.1I)d=w.70(w.A.1l[i]);b=w.71(w.A.1l[i],c,d);a.1e(b)}J w.72(a)};w.72=D(a){B b=w.A.5u;b=b.W("{{ 6p }}",w.A.4A);b=b.W("{{ 3V }}",a.3E(w.A.53));C(w.A.2w)b+=w.74();J b};w.74=D(){B a=w.A.4D;a=a.W("{{ 7Y }}",w.A.3h);a=a.W("{{ 87 }}",w.A.3f);a=a.W("{{ 7I }}",w.A.4G);J a};w.71=D(a,b,c){B d=w.A.4F;B e=w.3R(a);B f;d=d.W(/\\{\\{ 2Y \\}\\}/1J,e);f=w.A.1E+w.5A(a,Q);C(a.1T("1j").K>1)f+=" "+w.A.2s+a;d=d.W(/\\{\\{ 5K \\}\\}/1J,f);d=d.W("{{ 3V }}",b+c);J d};w.70=D(a){B b=w.A.5C;B c=w.A.2N?w.5A(a,N):w.3R(a);b=b.W(/\\{\\{ 2Y \\}\\}/1J,c);J b};w.6Y=D(a){B b=w.A.4z;B c=w.3R(a).W(" ","1j");b=b.W(/\\{\\{ 2P \\}\\}/1J,w.A.4E+c+".aX");b=b.W(/\\{\\{ 2Y \\}\\}/1J,c);J b};w.5A=D(a,b){B c=a.1T("1j");B d;C(b)d=c[0];R d=c.K>1?c[1]:c[0];J b?d.19():d.1O()};w.3R=D(a){B b="";P(B i 35 w.A.3i)C(w.A.3i[i].19()==a.19())b=i;J w.7e(b.W("1j"," "))};w.1s=D(a){J a===N||a===Q};w.7e=D(d){B e=d.19();J e.W(/(^|\\s)([a-z])/g,D(a,b,c){J b?b+c.1O():c.1O()})};w.88(k,l)};(D($){D 5D(){}5D.1v={7i:D(a,o){w.5H=[];w.34=[];w.U=o;w.1A=a;w.n=-1;C(o.36===Q)o.36=2;J w.7C()},3Q:D(a){J a.2h===3&&a.38.2C(/\\S/)!==1g&&a.2p.19()!="5S"},5T:D(a){J a.2h===1&&a.2p.19()=="2J"&&a.1U.19()!="5U"&&a.1U.19()!="5V"},5W:D(a){J a.2h===1&&a.2p.19()=="2J"&&(a.1U.19()=="5U"||a.1U.19()=="5V")},3P:D(a){J a.2h===1&&a.2p.19()=="5S"},4x:D(a){B b=1G[1]||1g;C(!b)J a==1g||a.K==0;R J a==b},2g:D(a){J w!=7X?a.W(/^\\s*|\\s*$/g,""):1g},3M:D(a){B b=1G[1]||[];P(B i=0;i<a.K;i++){C(({86:1,aR:1,aP:1,aO:1,aN:1})[a[i].2p])2y;C(a[i].aM()&&!w.3P(a[i]))w.3M(a[i].89,b);C(w.3Q(a[i])){C(!w.4x(w.2g(a[i].38))&&w.2g(a[i].38)!=".")b.1e(a[i])}R C(w.5T(a[i])||w.5W(a[i])||w.3P(a[i])){C(!w.4x(w.2g(a[i].3O))&&w.2g(a[i].3O)!=".")b.1e(a[i])}}J b},8k:D(a){B b;3J(a.2h){1M 3:{b=a.38;1f}1M 1:{b=a.3O;1f}3C:{b=1g;1f}}J b},7C:D(){B a;B b=[];B c;B d;B e;P(B i=0;i<w.1A.K;i++){C(w.5T(w.1A[i])||w.3P(w.1A[i])||w.5W(w.1A[i]))e=w.3M([w.1A[i]]);R e=w.3M(w.1A[i].89);d=w.61(e);b=b.62(d)}P(B i=0;i<b.K;i++){w.34.1e(b[i]);w.5H.1e(w.8k(b[i]))}a=w.1A.aK(w.34,"31");w.U.1i.1y(a,a,w.5H);J a},67:D(a){B b=a;3J(b.2h){1M 3:{3T(b){C(b.69)J b.69;b=b.aJ}1f}1M 1:{J b;1f}3C:{1f}}},61:D(a){B b=w.U.1K;C(b.K==0)J a;B c=[];B d;B e;B f;P(B i=0;i<a.K;i++){d=w.67(a[i]);e=b.K==b.1K(d).K;f=L(d).1K(b.2f("*"));C(e&&f.K>0)c.1e(a[i])}J c}};B g={1K:"",36:N,1k:D(){},1i:D(){},aG:N,6c:Q,6d:Q,3z:N,3y:Q,3X:Q};$.1x.31=D(o){o=$.1h({},g,$.1x.31.1t,o);J 1a 5D().7i(w,o)};$.1x.31.1t=g})(L);(D($){D $D(){}B n=Q,1X=N,1b,W="".W,1R=2a,4Q=ay,40=au,4U,1N,4V,41={},2k,4X=[],at="1C://O.ao.am/",1t={4Z:"",V:"",X:"",3w:$D,1m:$D,1k:$D,1i:$D,50:$D,al:0,51:n,43:n,3X:n,42:ak,6d:n,6c:1X,W:n,ai:n,Y:n,2r:1X,3y:n,1K:"",3z:n,36:1X,4b:1X,6G:n,2g:Q,ag:N};D 6I(){$.O.1N=1N={af:"ar",ae:"bg",ad:"ca",ac:"1u-3Y",ab:"1u-3W",aa:"cs",a9:"66",a8:"a6",a5:"4S",a3:"a2",9Z:"9Y",9W:"6g",9U:"6e",9R:"9Q",9P:"9O",9N:"77",9H:"9F",9E:"9D",9C:"1n",9B:"7W",9A:"8l",9z:"9y",9x:"9u",9t:"9s",9p:"9o",9m:"9l",9j:"2R",9i:"9h",9g:"9f",9e:"9d",9c:"9b",98:"6h",95:"94",93:"91",90:"5z",8X:"8W",8U:"8T"};4V=$.O.5X;$.1k(1N,D(l,a){41[a.1O()]=l});$.O.7H=n;L(1D).2x(D(){B a;3T((a=4X.7J()))a()})}D 4i(c,d){B e={};$.1k(c,D(a,b){C(d(b,a)===n)e[a]=b});J e}D 2M(a,b,c){J D(){J a.4k(b===n?1G[0]:b,c||1G)}}D 5E(e){J e!==1b}D 5F(d,f,g){B h,5G={},3g=$.7P(d,5E);$.1k(f,D(1j,b){B c=$.7P(b[0],D(e,i){J 5E(3g[i])&&3g[i].8S===e}).K;C(c===3g.K&&c===b[0].K&&(h=n)){$.1k(b[1],D(i,a){5G[a]=3g[i]});J 1X}});C(!h)8R g;J 5G}D 5I(a,b){B c=5F(a,$.O.7T,"L.O: 1S 1G"),o=c.U||{};5J c.U;o=$.1h({},1t,b,$.1h(o,c));C(o.6G)o.4b=n;C(o.4b)o.Y=n;C(o.36===n)o.36=2;J o}D T(){w.1h($.O);5J w.1t;5J w.1x}T.1v={8Q:"1.4.7",7Z:D(t,o){B c=w.8P=18 t==="3D",81=0,2E;$.1k(["51","3X","43"],D(i,a){B b=$.O[a];C(o[a])t=c?b(t):$.82(t,b)});w.U=o;w.V=o.V||"";w.X=o.X||"";w.4Z=o.4Z||"";w.5P=t;w.84="";w.2d=[];w.i=0;w.3s=1X;w.34=o.2c;w.2l=1g;w.44(o,t);w.2A=-1;o.3w.1y(w,t,o.V,o.X,o);w.8a()},44:D(a,b){B c=a.2c;B d;w.1o=[];P(B i=0;i<c.K;i++){d=w.8c(b[i]);C(d==""||w.8d(d))2y;w.1o.1e({1z:c[i],8e:b[i],8f:N,1Q:[],27:w.8i(a,b[i])})}},8d:D(a){C(w.8j(a))J Q;C(a.K>1)J N;B b=[".","!","?",";",":"];P(B i=0;i<b.K;i++)C(a==b[i])J Q;J N},8j:D(a){J a.2C(/^.?[\\d\\.\\,\\-\\+]*$/)?Q:N},8i:D(a,b){C(a.V==a.X)J[b];B c=a.V+"1j"+a.X;B d=3G(b);B e="<1f>";B f=w.4w(d,a.1Y[c].42,e,0).1T(e);B g;B h=0;B j;B k=[];B l=0;C(f.K>1){j=f[0];3T(h<d.K){C(!w.8m(j,d.2E(h,d.K)))j=w.8n(j);k.1e(j);h+=j.K;j=w.4w(d.2E(h,d.K),a.1Y[c].42,e,0).1T(e)[0];l++}}R k=f;P(B i=0;i<k.K;i++)k[i]=5Y(k[i]);J k},8n:D(a){B b=5Y(a);B c=[".","!","?",";",":"];C(w.8p())c=c.62(["：","；","。"]);B d=N;B e;P(B i=0;i<c.K;i++){e=b.8s(c[i]);C(e==-1)2y;C(d===N)d=e+c[i].K;C(e>d)d=e+c[i].K}J d===N?a:3G(b.2E(0,d))},8p:D(){C(w.U.V=="1u-3Y"||w.U.V=="1u-3W")J Q;J N},8m:D(a,b){C(w==7X)J 1g;J a.K>=b.K&&a.5Z(a.K-b.K)==b},8c:D(a){B b;b=a.W(/[\\n\\r\\t\\f\\8t\\8u\\8v\\8w\\8x\\8y\\8z\\8A\\8B\\8C\\8D\\8E\\8F\\8G\\8H\\8I\\8J]+/1J," ");b=b.W(/^\\s+|\\s+$/1J,"");J b},8b:D(){C(w.3s)J;B o=w.U,i=w.84.K,81,8L,8M,8N;B a=w;C(w.1o.K-1==w.2A)w.4t();R w.80()},80:D(){B a=w.U.1P||5;P(B i=0;i<a;i++)w.2b()},5i:D(){J w.5L},7R:D(){C(!w.2l){w.2l=[];P(B i=0;i<w.1o.K;i++){P(B j=0;j<w.1o[i].27.K;j++)w.2l.1e({"25":w.1o[i].27[j],"3a":w.1o[i],"4g":j})}}J w.2l},7F:D(){B a=w.U.2u+"6t";P(B i 35 1d){C(i==a&&w.U.6n)2y;C(i.8V(w.U.2u)===0)1d.6K(i)}},7E:D(a,b,c,d){C(!w.U.52||18 1d=="1b")J N;B e=w.U.2u+"7D";B f=1d.4r(e);B g=1a 1Z();C(!f||1a 1Z(f)<g){w.7F();g.8Y(g.8Z()+w.U.6m);1d.5O(e,g)}B h=w.U.2u+"1j"+c+"1j"+d+"1j"+L.5x(a);1d.5O(h,b)},7B:D(a,b,c){C(!w.U.52||18 1d=="1b")J N;B d=w.U.2u+"7D";B e=1d.4r(d);C(!e||1a 1Z(e)<1a 1Z())J N;B f=w.U.2u+"1j"+b+"1j"+c+"1j"+L.5x(a);B g=1d.4r(f);J g!=1g?g:N},2b:D(){w.2A++;B a=w.7R();C(w.2A>=a.K)J;w.5L=Q;B b=[];B c=[];B d;B e;B f=0;B g=w.2A;B h=w.V+"1j"+w.X;P(B i=g;i<a.K;i++){C(d=w.7B(a[i].25,w.V,w.X)){c.1e({4g:i,2d:d});2y}C(w.V!=w.X){C(b.K>=w.U.1Y[h].92)1f;C(f+a[i].25.K>w.U.1Y[h].42)1f}b.1e(a[i].25);f+=a[i].25.K}e=b.K+c.K;C(e==0)J;w.2A=i-1;w.7A(b,w,g,c,e)},7A:D(c,d,e,f,g){C(w.V==w.X||f.K==g){d.5w(c,e,f,g);d.2b();J}B h=1a L.M.1B();h.7y(N);h.2S=D(a){B b=L.M.4I.4J(a);C(b.1m==="4K 96"||b.1m==="4K 8h"){C(!d.U.M.4y()){d.2o(b.1m);d.U.M.4j(d.U.M,d.X);J}d.2o(b.1m);d.U.M.3p(d.U.M.A);d.U.M.2I();J}d.5w(b,e,f,g);d.2b()};B j=[];P(B i=0;i<c.K;i++)j.1e(3G(c[i]));B k=w.V+"1j"+w.X;h.1q("97",j);h.1q("4N",w.U.1Y[k].4N);h.1q("f",w.V);h.1q("ct",w.7x());h.1q("t",w.X);h.1q("99",3G(w.U.1Y[k].6a));h.1q("cr",w.U.1Y[k].9a);h.1q("7w",w.U.1Y[k].7w);h.4O(d.U.4c)},7v:D(){P(B i=0;i<w.1o.K;i++){C(w.1o[i].27.K>w.1o[i].1Q.K)J N;P(B j=0;j<w.1o[i].27.K;j++)C(18 w.1o[i].1Q[j]=="1b"||w.1o[i].1Q[j]=="")J N}w.5L=N;J Q},5w:D(a,b,c,d){B e=a.1m;B f;B g;C(e){w.2o(e);f=N}R f=a;w.7u(f,b,c,d);C(w.7v())w.4t()},7t:D(a,b){B c=w.2l[b];c.3a.1Q[c.4g]=a!==N?a:c.25;J c.3a},7u:D(a,b,c,d){B e;B f;B g;B h;B j=0;P(B i=0;i<d;i++){f=i+b;C(g=w.7s(f,c))h=g;R{h=a!==N?a[j]:N;j++}e=w.7t(h,f);w.7E(w.2l[f].25,h,w.V,w.X);w.7r(e)}},7r:D(a){C(a.27.K>a.1Q.K)J;P(B i=0;i<a.27.K;i++)C(18 a.1Q[i]=="1b")J;P(B i=0;i<a.27.K;i++)C(a.1Q[i]=="")a.1Q[i]=a.27[i];B b=a.1Q.3E("");w.5v(a.1z,b);a.8f=Q;w.7p(a.1z,w.X,b,w.V,a.8e,w.U);w.2r(a.1z,w.X,w.U)},7s:D(a,b){P(B i=0;i<b.K;i++)C(b[i].4g==a)J b[i].2d;J N},7x:D(){C(!w.4f)w.4f=0;w.4f++;J 2a(w.4f)},2Q:D(a){B b=["1S 2X 2Z","1S 3m 4d 7N","1S 3m 4d 7O","1S 7S 2X 2Z","7U 1K 7V"];B c;P(B i=0;i<b.K;i++){c=1a 2G(b[i]);C(c.2H(a)){4P(a);J Q}}},2o:D(a){2z{C(a 4h 2O){P(B i=0;i<a.K;++i){P(B b 35 a[i]){w.2Q(a[i][b]);3b.3t(a[i][b])}}}R{w.2Q(a);3b.3t(a)}}2F(e){}},4t:D(){w.U.1i.1y(w,w.2d,w.5P,!w.V&&w.9k||w.V,w.X,w.U)},4e:D(){C(w.3s)J w;w.3s=n;w.U.1m.1y(w,{7m:"3s"});J w}};$.O=D(t,a){C(t==1b)J L.M.4m=1a T();C($.9n(t))J $.O.2x(t,a);B b=1a T();L.M.4m=b;B c=[].3n.1y(1G,0);c.7J();J $.O.2x(2M(b.7Z,b,[t,5I(c,$.O.1t)]),1X,b)};$.O.1x=$.O.1v=T.1v;$.O.1x.1h=$.O.1h=$.1h;$.O.1h({7k:2M,9q:4i,9r:5F,7j:5I,5r:1t,1t:$.1h({},1t),5q:D(t){J t.9v(0).1O()+t.2E(1).19()},9w:D(a,b){B c="<1f>";B d=w.4w(a,b,c,0).1T(c);B e=[]},4w:D(a,m,b,c){B i,j,l,s,r;B v=a.W(/%20/1J," ");C(m<1)J a;P(i=-1,l=(r=v.1T("\\n")).K;++i<l;r[i]+=s)P(s=r[i],r[i]="";s.K>m;r[i]+=s.3n(0,j)+((s=s.3n(j)).K?b:""))j=c==2||(j=s.3n(0,m+1).2C(/\\S*(\\s)?$/))[1]?m:j.2J.K-j[0].K||c==1&&m||j.2J.K+(j=s.3n(m).2C(/^\\S*/)).2J.K;J r.3E("\\n").W(/\\s/1J,"%20")},4M:D(a,b){C(a==1b||(b==1b&&!a))J 1N;B c={},5o=18 a,1l=b?$.O.4M(a):1N,2T=(5o==="1z"||5o==="D")?a:b;C(2T)C(2T.1y)c=4i(1l,2T);R P(B i=0,K=2T.K,2U;i<K;i++){2U=$.O.5l(2T[i]);C(1l[2U]!=1b)c[2U]=1l[2U]}R c=4i(1N,4U.5k);J c},5l:D(a,b){B u=a.1O();B l=41[u]||(1N[u]?u:1b)||41[($.O.5j[a.19()]||"").1O()];J l==1b?1b:b==="9G"?l.19():b==="5q"?$.O.5q(l):l},5X:D(a){J 1N[a]||1N[$.O.5l(a)]||$.O.5j[a.19()]},5k:D(l){J 4U.5k(4V(l))},5j:{"2R":"2R-78","2R-br":"2R-78","9I":"77","9J":"9K","1u-9L":"1u-3Y","1u-9M":"1u-3W"},76:D(){2k=n;6I();J $.O},2x:D(a,b,c){4X.1e(a);$.O.76();J c||$.O},7H:1X,7T:[[[],[]],[[1R,1R,40],["V","X","U"]],[[1R,40],["X","U"]],[[40],["U"]],[[1R,1R],["V","X"]],[[1R],["X"]],[[1R,1R,4Q],["V","X","1i"]],[[1R,4Q],["X","1i"]]],3X:2M(W,n,[/<75[^>]*>([\\s\\S]*?)<\\/75>/1J,""]),43:2M(W,n,[/\\s\\s+/g," "]),51:2M(W,n,[/<![ \\r\\n\\t]*(--([^\\-]|[\\r\\n]|-[^\\-])*--[ \\r\\n\\t]*)>/g,""])})})(L);(D($){B f=Q;B g={25:f,5U:f,5V:f};D 4a(a,o){B b=a.2p.1O();B c;C(b===\'73\'&&18 $.5h(a,\'1U\')=="1b")c="25";R c=b===\'73\'&&$.5h(a,\'1U\').19();o=o||{3z:f,3y:f};J 18 o.3y==="3D"?o.3y:o.3z&&(b===\'9S\'||c==="9T")?"7o":o.3z&&g[c]?"$5g":b==="9V"?"$5g":"$5b"}$.O.1x.8a=D(){B o=w.U,X=o.X,4e;B c=[];P(B i=0;i<w.1o.K;i++)c.1e(w.1o[i].1z);L(c).1k($.O.7k(D(i,a){w.i=i;B b=$.O.5f(a,X,o);C(!b)J!(4e=f);w.2d.1e(b);o.1k.1y(w,i,a,b,w.5P[i],w.V,X,o)},w));!4e?w.4t():w.8b()};$.O.1h({9X:4a,1k:D(i,a,t,s,b,c,o){C(!a)J;$.O.W(a,t,c,o);$.O.2r(a,c,o)},W:D(e,t,a,o){w.5v(e,t)},5f:D(e,a,o){B b=e[0]||e,Y=L.M.Y(b,"2d");J Y&&Y[a]&&Y[a][4a(b,o)]},7p:D(e,a,t,b,s,o){C(o&&!o.Y)J;B c=e[0]||e,1U=4a(c,o),Y=L.M.Y(c,"2d");Y=Y||L.M.Y(c,"2d",{});C(18 Y=="1b")J;(Y[b]=Y[b]||{})[1U]=s;(Y[a]=Y[a]||{})[1U]=t},5v:D(a,b){3J(a.2h){1M 3:{a.38=b;1f}1M 1:{a.3O=b;1f}3C:{1f}}},2r:D(e,a,o){C(!o||o.2r)e.5h((!o||o.2r===f)?"2U":o.2r,a)}});$.1x.O=D(a,b,c){B o=$.O.7j(1G,$.1x.O.1t),6Z=$.1h({},$.O.5r,$.1x.O.1t,o,{1i:D(e,t){$.O(D(){B c=$.O.5X(o.V);e.1k(D(i,a){B b=$.O.5f(a,c,o);C(!b)J Q;t[i]=b});B d=o.1k;D 3L(a){J D(){[].a0.1y(1G,w.34);a.4k(w,1G)}}o.2c=e;o.3w=3L(o.3w);o.50=3L(o.50);o.1i=3L(o.1i);o.1k=D(i){B a=1G;C(1G.K!==7){[].a1.1y(a,1,0,w.34[i])}w.1k.4k(w,a);d.4k(w,a)};$.O(t,o)})},1k:D(){}});C(w.31){J w.31(6Z)}o.2c=w;$.O($.82(w,D(e){J $(e).5b()||$(e).5g()}),o);J w};$.1x.O.1t=$.1h({},$.O.5r)})(L);L.3c=D(a,b,c){C(18 b!=\'1b\'){c=c||{};C(b===1g){b=\'\';c.1p=-1}B d=\'\';C(c.1p&&(18 c.1p==\'6X\'||c.1p.6W)){B e;C(18 c.1p==\'6X\'){e=1a 1Z();e.a4(e.6V()+(c.1p*24*60*60*a7))}R{e=c.1p}d=\'; 1p=\'+e.6W()}B f=c.2K?\'; 2K=\'+(c.2K):\'\';B g=c.5d?\'; 5d=\'+(c.5d):\'\';B h=c.6T?\'; 6T\':\'\';1D.1W=[a,\'=\',3G(b),d,f,g,h].3E(\'\')}R{B j=1g;C(1D.1W&&1D.1W!=\'\'){B k=1D.1W.1T(\';\');P(B i=0;i<k.K;i++){B l=L.2g(k[i]);C(l.5Z(0,a.K+1)==(a+\'=\')){j=5Y(l.5Z(a.K+1));1f}}}J j}};L.M={};L.M.1H={2c:[],Y:{}};L.M.48=D(a){P(B i=0;i<L.M.1H.2c.K;i++)C(a==L.M.1H.2c[i])J i;J N};L.M.3Q=D(a){J a.2h===3&&a.38.2C(/\\S/)!==1g&&a.2p.19()!="5S"};L.M.6Q=D(a,b,c){C(!L.M.1H.Y[a])J c;C(!L.M.1H.Y[a][b])J c;J L.M.1H.Y[a][b]};L.M.6P=D(a,b,c){C(!L.M.1H.Y[a])L.M.1H.Y[a]={};L.M.1H.Y[a][b]=c};L.M.Y=D(a,b,c,d){C(!L.M.3Q(a))J 18 c!="1b"?L.Y(a,b,c):L.Y(a,b);C(18 c!="1b"){B e=L.M.48(a);C(e===N){L.M.1H.2c.1e(a);e=L.M.48(a)}L.M.6P(e,b,c);J c}R{B e=L.M.48(a);C(e===N)J d;J L.M.6Q(e,b)}};L.M.3B=[];L.M.5B={};L.M.28=D(a){J L.M.5B[a]};L.M.2x=L.O.2x;L.M.1B=D(){w.1C=N;w.2S;w.47;w.46;w.1L;w.1m=N;w.59="";w.58="45";w.26="";w.54=Q;w.4c;w.ah;w.7m;w.3u=N;w.aj=Q;w.6D()};L.M.1B.1v.6A=D(){B a=N;C(18 4Y!=\'1b\'){2z{a=1a 4Y("an.6w")}2F(e){2z{a=1a 4Y("3m.6w")}2F(E){a=N}}}R C(6v){2z{a=1a 6v()}2F(e){a=N}}J a};L.M.1B.1v.aq=D(a){w.3u=a};L.M.1B.1v.as=D(){J w.3u};L.M.1B.1v.7y=D(a){w.54=a};L.M.1B.1v.4O=D(c,d,e,f,g){C(!w.1C||!c)J;w.4c=c;w.3u=Q;C(d)w.2S=d;C(e)w.47=e;C(f)w.46=f;C(g)w.1L=g;B h=w;C(w.54)w.1q("u",2a(1a 1Z().6V()));3J(w.58.1O()){1M"45":w.1C.6u("45",c,Q);1f;1M"4T":c+="&"+w.26;w.1C.6u("4T",c,Q);1f;3C:J}C(w.46)w.46();w.1C.av=D(){C(!h)J;B a=h.1C;C(a.aw==4){h.3u=N;C(a.ax==6N){B b="";C(a.4R)b=a.4R;C(h.2S)h.2S(b)}R{h.1m=Q;h.59=a.4R;C(h.47)h.47(h.59)}C(h.1L)h.1L()}};3J(w.58.1O()){1M"45":w.1C.8r("aA-aB","aC/x-aD-aE-aF");w.1C.6b(w.26);1f;1M"4T":w.1C.6b(1g);1f;3C:J}};L.M.1B.1v.aH=D(){w.26=""};L.M.1B.1v.1q=D(a,b){w.26+=w.26!=""?"&":"";C(18 b=="3D")w.26+=a+"="+b;R C(b 4h 2O){B c=0;P(B i=0;i<b.K;i++){C(18 b[i]!="3D")2y;C(c>0)w.26+="&";w.26+=a+"[]"+"="+b[i];c++}}};L.M.1B.1v.6D=D(){w.1C=w.6A()};L.M.4I={4J:D(a){B b=aI("(("+a+"))");J b}};(D($){B l=D(a,b){J(a<<b)|(a>>>(32-b))};B m=D(a,b){B c,3U,33,37,2n;33=(a&4B);37=(b&4B);c=(a&49);3U=(b&49);2n=(a&83)+(b&83);C(c&3U)J(2n^4B^33^37);C(c|3U){C(2n&49)J(2n^aQ^33^37);R J(2n^49^33^37)}R{J(2n^33^37)}};B F=D(x,y,z){J(x&y)|((~x)&z)};B G=D(x,y,z){J(x&z)|(y&(~z))};B H=D(x,y,z){J(x^y^z)};B I=D(x,y,z){J(y^(x|(~z)))};B o=D(a,b,c,d,x,s,e){a=m(a,m(m(F(b,c,d),x),e));J m(l(a,s),b)};B p=D(a,b,c,d,x,s,e){a=m(a,m(m(G(b,c,d),x),e));J m(l(a,s),b)};B q=D(a,b,c,d,x,s,e){a=m(a,m(m(H(b,c,d),x),e));J m(l(a,s),b)};B r=D(a,b,c,d,x,s,e){a=m(a,m(m(I(b,c,d),x),e));J m(l(a,s),b)};B t=D(a){B b;B c=a.K;B d=c+8;B e=(d-(d%64))/64;B f=(e+1)*16;B g=2O(f-1);B h=0;B i=0;3T(i<c){b=(i-(i%4))/4;h=(i%4)*8;g[b]=(g[b]|(a.6O(i)<<h));i++}b=(i-(i%4))/4;h=(i%4)*8;g[b]=g[b]|(b1<<h);g[f-2]=c<<3;g[f-1]=c>>>29;J g};B u=D(a){B b="",3S="",5n,39;P(39=0;39<=3;39++){5n=(a>>>(39*8))&b4;3S="0"+5n.6J(16);b=b+3S.2E(3S.K-2,2)}J b};B v=D(a){a=a.W(/\\b5\\6B/g,"\\6B");B b="";P(B n=0;n<a.K;n++){B c=a.6O(n);C(c<3Z){b+=2a.2W(c)}R C((c>b9)&&(c<ba)){b+=2a.2W((c>>6)|bb);b+=2a.2W((c&63)|3Z)}R{b+=2a.2W((c>>12)|bf);b+=2a.2W(((c>>6)&63)|3Z);b+=2a.2W((c&63)|3Z)}}J b};$.1h({5x:D(e){B x=2O();B k,5N,5p,5m,57,a,b,c,d;B f=7,3K=12,3I=17,3H=22;B g=5,3A=9,3x=14,3r=20;B h=4,3q=11,3d=16,3F=23;B i=6,3o=10,3l=15,3j=21;e=v(e);x=t(e);a=bA;b=bB;c=bC;d=bD;P(k=0;k<x.K;k+=16){5N=a;5p=b;5m=c;57=d;a=o(a,b,c,d,x[k+0],f,bE);d=o(d,a,b,c,x[k+1],3K,bF);c=o(c,d,a,b,x[k+2],3I,bG);b=o(b,c,d,a,x[k+3],3H,bH);a=o(a,b,c,d,x[k+4],f,bI);d=o(d,a,b,c,x[k+5],3K,bJ);c=o(c,d,a,b,x[k+6],3I,bK);b=o(b,c,d,a,x[k+7],3H,bL);a=o(a,b,c,d,x[k+8],f,bM);d=o(d,a,b,c,x[k+9],3K,bN);c=o(c,d,a,b,x[k+10],3I,bO);b=o(b,c,d,a,x[k+11],3H,bP);a=o(a,b,c,d,x[k+12],f,bQ);d=o(d,a,b,c,x[k+13],3K,bS);c=o(c,d,a,b,x[k+14],3I,bT);b=o(b,c,d,a,x[k+15],3H,bU);a=p(a,b,c,d,x[k+1],g,bV);d=p(d,a,b,c,x[k+6],3A,bW);c=p(c,d,a,b,x[k+11],3x,bX);b=p(b,c,d,a,x[k+0],3r,bY);a=p(a,b,c,d,x[k+5],g,bZ);d=p(d,a,b,c,x[k+10],3A,c0);c=p(c,d,a,b,x[k+15],3x,c1);b=p(b,c,d,a,x[k+4],3r,c2);a=p(a,b,c,d,x[k+9],g,c3);d=p(d,a,b,c,x[k+14],3A,c4);c=p(c,d,a,b,x[k+3],3x,c5);b=p(b,c,d,a,x[k+8],3r,c6);a=p(a,b,c,d,x[k+13],g,c7);d=p(d,a,b,c,x[k+2],3A,c8);c=p(c,d,a,b,x[k+7],3x,c9);b=p(b,c,d,a,x[k+12],3r,cb);a=q(a,b,c,d,x[k+5],h,cc);d=q(d,a,b,c,x[k+8],3q,cd);c=q(c,d,a,b,x[k+11],3d,ce);b=q(b,c,d,a,x[k+14],3F,cf);a=q(a,b,c,d,x[k+1],h,cg);d=q(d,a,b,c,x[k+4],3q,ch);c=q(c,d,a,b,x[k+7],3d,ci);b=q(b,c,d,a,x[k+10],3F,cj);a=q(a,b,c,d,x[k+13],h,ck);d=q(d,a,b,c,x[k+0],3q,cl);c=q(c,d,a,b,x[k+3],3d,cm);b=q(b,c,d,a,x[k+6],3F,co);a=q(a,b,c,d,x[k+9],h,cp);d=q(d,a,b,c,x[k+12],3q,cq);c=q(c,d,a,b,x[k+15],3d,cu);b=q(b,c,d,a,x[k+2],3F,cv);a=r(a,b,c,d,x[k+0],i,cw);d=r(d,a,b,c,x[k+7],3o,cx);c=r(c,d,a,b,x[k+14],3l,cy);b=r(b,c,d,a,x[k+5],3j,cz);a=r(a,b,c,d,x[k+12],i,cA);d=r(d,a,b,c,x[k+3],3o,cB);c=r(c,d,a,b,x[k+10],3l,cC);b=r(b,c,d,a,x[k+1],3j,cD);a=r(a,b,c,d,x[k+8],i,cE);d=r(d,a,b,c,x[k+15],3o,cF);c=r(c,d,a,b,x[k+6],3l,cG);b=r(b,c,d,a,x[k+13],3j,cH);a=r(a,b,c,d,x[k+4],i,cI);d=r(d,a,b,c,x[k+11],3o,cJ);c=r(c,d,a,b,x[k+2],3l,cK);b=r(b,c,d,a,x[k+9],3j,cL);a=m(a,5N);b=m(b,5p);c=m(c,5m);d=m(d,57)}B j=u(a)+u(b)+u(c)+u(d);J j.19()}})})(L);',62,792,'||||||||||||||||||||||||||||||||this||||_options|var|if|function||||||return|length|jQuery|translator|false|translate|for|true|else|||options|from|replace|to|data||||||||||typeof|toLowerCase|new|undefined|_container|localStorage|push|break|null|extend|complete|_|each|languages|error|id|_elements|expires|AddParam|_last_selected|_is_bool|defaults|zh|prototype|addClass|fn|call|object|jquery|Ajax|http|document|languageSelectorClass|_owner|arguments|_data|names|gi|not|onComplete|case|GLL|toUpperCase|requests|translated_text|Str|Invalid|split|type|class|cookie|False|auth|Date||||||text|params|to_translate|get||String|_translate|nodes|translation|localStorageExpires|find|trim|nodeType|div|flags|loading|_texts_to_translate|_restore|lResult|_display_errors|nodeName|completedClass|setLangAttr|customLanguageSelectorClass|_links|translator_id|className|restore|ready|continue|try|_i|onStart|match|clearLocalStorage|substr|catch|RegExp|exec|_do_restore|input|path|_extract_language|bind|shortNames|Array|src|_alert_error|pt|onSuccess|filterArg|lang|onInitialize|fromCharCode|API|name|key||nodesContainingText||lX8|elements|in|async|lY8|nodeValue|lCount|parent|console|translatorCookie|S33|_show_restore|restoreClass|args|restoreContainerClass|_languages|S44|autoSelect|S43|Microsoft|slice|S42|_clear_select|S32|S24|stopped|log|_processing|loadingClass|start|S23|subject|altAndVal|S22|ids|default|string|join|S34|encodeURIComponent|S14|S13|switch|S12|unshiftArgs|getTextNodes|_token_requests_count|value|isTextAreaNode|isTextNode|_gen_language_name|WordToHexValueTemp|while|lY4|content|TW|stripScripts|CN|128|Obj|inverseLanguages|limit|stripWhitespace|_initialize_elements|POST|onProcess|onFailure|findNode|0x40000000|getType|toggle|url|Client|stop|_ct_counter|ix|instanceof|filter|_get_token|apply|_do_translate|lastT|cookiePersistency|Number|appendChild|createElement|getItem|containerCustomClass|_complete|container|containerClass|_word_wrap|isEmpty|_enough_token_count|flagTemplate|subContainerClass|0x80000000|style|restoreTemplate|flagsFolder|linkTemplate|hiddenClass|actionsUrl|JSON|build|Token|flagsClass|getLanguages|action|Request|alert|Fn|responseText|en|GET|GL|toLangCode|namesClass|readyList|ActiveXObject|api_key|onTimeout|stripComments|local_storage|separator|unique|shortNamesClass||DD|method|errorMessage|flagsAndNamesClass|html|flagsAndShortNamesClass|domain|_on_complete|getData|val|attr|_is_translating|languageCodeMap|isTranslatable|toLanguage|CC|lByte|typeof_a|BB|capitalize|_defaults|td|left|linksContainerTemplate|_set_node_value|_process_translated|md5|excludeSelector|tr|_gen_language_short_name|translators|nameTemplate|Nct|isSet|validate|obj|textArray|getOpt|delete|language_selector_class|_translating|365|AA|setItem|source|_get_language_for_cookie|targetSelector|textarea|isInputNode|button|submit|isInputButtonNode|toLanguageCode|decodeURIComponent|substring||_remove_excluded|concat|||min|da|_get_text_node_parent|_gen_content|parentNode|token|send|returnAll|walk|de|location|fr|es|click|js|_initialize_options|table|local_storage_expires|local_storage_clear|language|sub_container_class|apiKey|clear|hidden|_cleared_on|open|XMLHttpRequest|XMLHTTP|custom|_on_start|href|getHTTPObject|x0a|php|initialize|body|disable|fromOriginal|javascript|loaded|toString|removeItem|customLanguages|title|200|charCodeAt|_set_data|_get_data|_select|_is_compatible|secure|removeClass|getTime|toUTCString|number|_gen_flag|ncto|_gen_name|_gen_link|_gen_content_container|INPUT|_gen_restore|script|load|iw|PT|short|_clear_stored_translations|_get_actions_url|Translator|_has_token|_capitalize|override|_inc_token_count|getId|init|_getOpt|_bind|the|message|_reset_token_count|alt|setData|and|_write_translated|_find_stored_translation|_set_translated_text|_write_translated_texts|_is_completed|nd|_ct|setUnique|5000px|_do_ms|_get_stored_translation|initializeElements|_expires|_set_stored_translation|_remove_stored_translations|_initialize_custom_languages|isReady|hidden_class|shift|_update_content|_sanitize_id|_preload_images|Id|Secret|grep|_on_initialize|_get_texts_to_translate|Google|overload|Resource|writable|it|window|restore_container_class|_init|_translate_begin|lastpos|map|0x3FFFFFFF|rawTranslation|Restore|SCRIPT|restore_class|_initialize|childNodes|_toggle|_process|_trim|_is_pointless|original|translated|_initialize_events|failed|_get_truncated_text|_is_numeric|_get_node_value|ja|_ends_with|_get_better_chunk|tbody|_is_language_x|span|setRequestHeader|lastIndexOf|x0b|xa0|u2000|u2001|u2002|u2003|u2004|u2005|u2006|u2007|u2008|u2009|u200a|u200b|u2028|u2029|u3000|selected|subst|divst|divcl|Disabling|isString|version|throw|constructor|vi|VIETNAMESE|indexOf|uk|UKRAINIAN|setDate|getDate|TURKISH|th|tr_limit|THAI|sv|SWEDISH|expired|tx|SPANISH|tk|crc|sl|SLOVENIAN|sk|SLOVAK|ru|RUSSIAN|ro|ROMANIAN|PORTUGUESE|detectedSourceLanguage|pl|POLISH|isFunction|no|NORWEGIAN|_filter|_validate|lt|LITHUANIAN|lv|charAt|truncate|LATVIAN|ko|KOREAN|JAPANESE|ITALIAN|INDONESIAN|hu|HUNGARIAN|hi|lowercase|HINDI|he|zlm|ms|hans|hant|HEBREW|ht|HAITIAN_CREOLE|el|GREEK|IMG|image|GERMAN|TEXTAREA|FRENCH|_getType|fi|FINNISH|unshift|splice|et|ESTONIAN|setTime|ENGLISH|nl|1000|DUTCH|DANISH|CZECH|CHINESE_TRADITIONAL|CHINESE_SIMPLIFIED|CATALAN|BULGARIAN|ARABIC|alwaysReplace|messageContainer|rebind|debug|1750|timeout|net|Msxml2|surstudio|hide|setProcessing||isProcessing|ms_u|Object|onreadystatechange|readyState|status|Function|No|Content|Type|application|www|form|urlencoded|comments|ClearParams|eval|previousSibling|pushStack|exposed|hasChildNodes|IFRAME|OBJECT|STYLE|0xC0000000|NOSCRIPT|The|must|placed|initialization|but|gif|config|100|slideUp|0x80|slideDown|tw|255|x0d|file|_cache_resource_not_writable|merge|127|2048|192|getSeconds|setSeconds||224||_should_translate|do|blur|me|dont|zA|top|absolute|position|process||procedures|getElementsByTagName|sub|completed|images|border|cellspacing|cellpadding|0x67452301|0xEFCDAB89|0x98BADCFE|0x10325476|0xD76AA478|0xE8C7B756|0x242070DB|0xC1BDCEEE|0xF57C0FAF|0x4787C62A|0xA8304613|0xFD469501|0x698098D8|0x8B44F7AF|0xFFFF5BB1|0x895CD7BE|0x6B901122|img|0xFD987193|0xA679438E|0x49B40821|0xF61E2562|0xC040B340|0x265E5A51|0xE9B6C7AA|0xD62F105D|0x2441453|0xD8A1E681|0xE7D3FBC8|0x21E1CDE6|0xC33707D6|0xF4D50D87|0x455A14ED|0xA9E3E905|0xFCEFA3F8|0x676F02D9||0x8D2A4C8A|0xFFFA3942|0x8771F681|0x6D9D6122|0xFDE5380C|0xA4BEEA44|0x4BDECFA9|0xF6BB4B60|0xBEBFBC70|0x289B7EC6|0xEAA127FA|0xD4EF3085||0x4881D05|0xD9D4D039|0xE6DB99E5||||0x1FA27CF8|0xC4AC5665|0xF4292244|0x432AFF97|0xAB9423A7|0xFC93A039|0x655B59C3|0x8F0CCC92|0xFFEFF47D|0x85845DD1|0x6FA87E4F|0xFE2CE6E0|0xA3014314|0x4E0811A1|0xF7537E82|0xBD3AF235|0x2AD7D2BB|0xEB86D391'.split('|'),0,{}))
	


 $(function() {
   
    $( "#search_o" ).autocomplete({
      source: 'autocomplete_oeuvre.php'
    });
  });
  
   $(function() {
   
    $( "#search_event" ).autocomplete({
      source: 'autocomplete_event.php'
    });
  });
  


$(function() {

    $( "#search_event1" ).autocomplete({

      source: 'autocomplete_event.php',
        
        focus: function( event, ui ) {
        
        
           $( "#search_event1" ).val( ui.item.value );
        
            return false;
        },
        select: function( event, ui ) {
           

            var selectVille = $("#ville option:selected").val();
            var selectTypeEvent = $("#typeEvent option:selected").val();
            var selectDu = $("#dpd3").val();
            var selectAu = $("#dpd4").val();
            var nameArtiste=$("#nameArtiste").val();
            var nomEvent=$("#search_event1").val();
  // TypeEvent :selectTypeEvent ,

            $.post( 'restEvenments.php', {
                    Du : selectDu,
                    Au : selectAu,
                    Ville :selectVille ,
                    nomEvent : $( "#search_event1" ).val(),
                    nomArtiste : $("#nameArtiste").val()
                    
                },
                function(data){  $( "#artist_right" ).html(data);}, 'html' );


            return false;
        }
    });

  });

// $(function() {

//     $( "#nameArtiste" ).autocomplete({

//       source: 'autocomplete_art.php',
        
//         focus: function( event, ui ) {
        
        
//            $( "#nameArtiste" ).val( ui.item.value );
        
//             return false;
//         },
//         select: function( event, ui ) {

//             var selectVille = $("#ville option:selected").val();
//             var selectTypeEvent = $("#typeEvent option:selected").val();
//             var selectDu = $("#dpd3").val();
//             var selectAu = $("#dpd4").val();
//             var nameArtiste=$("#nameArtiste").val();
//             var nomEvent=$( "#search_event1" ).val();

// // alert(nameArtiste);
// // TypeEvent :selectTypeEvent ,

//             $.post( 'restEvenments.php',  {
//                     Du : selectDu,
//                     Au : selectAu,
//                     Ville :selectVille ,
//                     nomEvent : $( "#search_event1" ).val(),
//                     nomArtiste : $("#nameArtiste").val()
                    

//                 },
//                 function(data){  $( "#artist_right" ).html(data);


//                // if (Modernizr.touch) {
//         //     // show the close overlay button
//         //     $(".close-overlay").removeClass("hidden");
//         //     // handle the adding of hover class when clicked
//         //     $(".img").click(function(e){
//         //         if (!$(this).hasClass("hover")) {
//         //             $(this).addClass("hover");
//         //         }
//         //     });
//         //     // handle the closing of the overlay
//         //     $(".close-overlay").click(function(e){
//         //         e.preventDefault();
//         //         e.stopPropagation();
//         //         if ($(this).closest(".img").hasClass("hover")) {
//         //             $(this).closest(".img").removeClass("hover");
//         //         }
//         //     });
//         // } else {
//         //     // handle the mouseenter functionality
//         //     $(".img").mouseenter(function(){
//         //         $(this).addClass("hover");
//         //     })
//         //     // handle the mouseleave functionality
//         //     .mouseleave(function(){
//         //         $(this).removeClass("hover");
//         //     });
//         // }
//             }, 'html' );
//             return false;
//         }
//     });

//   });
 $(function(){

    $(".select3").change(function(){

            var selectVille = $("#ville option:selected").val();
            var selectTypeEvent = $("#typeEvent option:selected").val();
            var selectDu = $("#dpd3").val();
            var selectAu = $("#dpd4").val();
            var nameArtiste=$("#nameA option:selected").val();
            var nameEvent= $( "#search_event1 option:selected" ).val();


		            // TypeEvent :selectTypeEvent ,
              $.post( 'restEvenments.php',  {
                    Du : selectDu,
                    Au : selectAu,
                    Ville :selectVille ,
                    nomEvent : nameEvent,
                    nomArtiste : nameArtiste
                   

                },
                function(data){  $( "#artist_right" ).html(data);}, 'html' );
        

                 });
   




 });
 
 
  $(function() {
      $( "#tags" ).autocomplete({
      source: 'autocomplete_art.php'
    });
  });



 $(function() {

    $( "#tags1" ).autocomplete({
      source: 'autocomplete_art.php',
        focus: function( event, ui ) {
            //$( "#tags" ).val( ui.item.label );
           $( "#tags1" ).val( ui.item.value );
            return false;
        },
        select: function( event, ui ) {
            var selectTypeOeuvre = $("#SelTest option:selected").val();
            var selectstyle = $("#style option:selected").val();


            $.post( 'restArtistes.php',  {
                    TypeOeuvre : selectTypeOeuvre,
                    style : selectstyle,
                    nameart : $("#tags1").val()

                },
                function(data){  $( "#artist_right" ).html(data);
                    $(".oeuvres").on({
                        mouseenter: function () {
                            //$(this).addClass("hover");
                            $( this ).children(".oeuvres_detail").addClass( "visible" );
                        },
                        mouseleave:function () {
                            //$(this).removeClass("hover");
                            $( this ).children(".oeuvres_detail").removeClass( "visible" );
                        }
                    });
                }, 'html' );
            scl=false;
            scroll = false;
            return false;
        }
    });

  });
//  $(function(){

// $(".select").change(function(){
//         scroll = true;
//         selectTypeOeuvre = $("#type option:selected").val();
//         selectstyle = $("#style2 option:selected").val();
//         nameart = $("#tags").val();

//         //alert(nameart);

//         if (  selectstyle=="" && selectTypeOeuvre=="All"  )
//         {
//             location.reload(); 
//         }
//         else
//         {
            
//             $.post( 'restArtistes.php',  {
//                 TypeOeuvre : selectTypeOeuvre,
//                 style : selectstyle,
//                 nameart : nameart

//             },
//             function(data){  $( "#artist_right" ).html(data);
//                 $(".oeuvres").on({
//                     mouseenter: function () {
//                         //$(this).addClass("hover");
//                         $( this ).children(".oeuvres_detail").addClass( "visible" );
//                     },
//                     mouseleave:function () {
//                         //$(this).removeClass("hover");
//                         $( this ).children(".oeuvres_detail").removeClass( "visible" );
//                     }
//                 });
//             }, 'html' );
//         };



//     });

 $(function() {
  $("#tags1").keyup(function() {
       
       var selectTypeOeuvre = $("#SelTest option:selected").val();
       var selectstyle = $("#style option:selected").val(); 
       var nameart = $("#tags1").val();
        
       //alert(nameart);
        if (nameart=="")
        {
            if (selectTypeOeuvre=="All" && selectstyle=="") {
                  scl=true;
                  
                } else{
                  scl=false;

                };
            $.post( 'restArtistes.php',  {
                    TypeOeuvre : selectTypeOeuvre,
                    style : selectstyle,
                    nameart : nameart

                },
                function(data){  $( "#artist_right" ).html(data);
                    $(".oeuvres").on({
                        mouseenter: function () {
                            //$(this).addClass("hover");
                            $( this ).children(".oeuvres_detail").addClass( "visible" );
                        },
                        mouseleave:function () {
                            //$(this).removeClass("hover");
                            $( this ).children(".oeuvres_detail").removeClass( "visible" );
                        }
                    });
                }, 'html' );
          };
          
        });


 });
 
 
 $(function(){

$.widget( "custom.catcomplete", $.ui.autocomplete, {
_renderMenu: function( ul, items ) {
var that = this,
currentCategory = "";
$.each( items, function( index, item ) {
if ( item.category != currentCategory ) {
ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
currentCategory = item.category;
}
that._renderItemData( ul, item );
});
}
});

});
$(function() {
$( "#search_a_o" ).catcomplete({
delay: 0,
source: "autocomplete_art_oeuvre.php"
});
});

$(function() {
   
    $( "#tags" ).autocomplete({
      source: 'autocomplete_art.php'
    });
  });

$(function() {

$( "#tags1" ).autocomplete({
  source: 'autocomplete_art.php',
    focus: function( event, ui ) {
        //$( "#tags" ).val( ui.item.label );
       $( "#tags1" ).val( ui.item.value );
        return false;
    },
    select: function( event, ui ) {
        var selectTypeOeuvre = $("#SelTest option:selected").val();
        var selectstyle = $("#style option:selected").val();
        var selectprix1 = $("#prix1 option:selected").val();
        var selectprix2 = $("#prix2 option:selected").val();
        var selectformat = $("#Format option:selected").val();

        $.post( 'restOeuvres.php',  {
                TypeOeuvre : selectTypeOeuvre,
                style : selectstyle,
                prix1 : selectprix1,
                prix2 : selectprix2,
                format : selectformat,
                nameart : $("#tags1").val()

            },
            function(data){  $( "#artist_right" ).html(data);
                $(".oeuvres").on({
                    mouseenter: function () {
                        //$(this).addClass("hover");
                        $( this ).children(".oeuvres_detail").addClass( "visible" );
                    },
                    mouseleave:function () {
                        //$(this).removeClass("hover");
                        $( this ).children(".oeuvres_detail").removeClass( "visible" );
                    }
                });
            }, 'html' );


        return false;
    }
});

});


$(function() {

$("#tags1").keyup(function() {
  
        var selectTypeOeuvre = $("#SelTest option:selected").val();
        var selectstyle = $("#style option:selected").val();
        var selectprix1 = $("#prix1 option:selected").val();
        var selectprix2 = $("#prix2 option:selected").val();
        var selectformat = $("#Format option:selected").val();
        var nameart = $("#tags1").val();

        if (nameart=="")
        {
            $.post( 'restOeuvres.php',  {
                    TypeOeuvre : selectTypeOeuvre,
                    style : selectstyle,
                    prix1 : selectprix1,
                    prix2 : selectprix2,
                    format : selectformat,
                    nameart : nameart

                },
                function(data){  $( "#artist_right" ).html(data);
                    $(".oeuvres").on({
                        mouseenter: function () {
                            //$(this).addClass("hover");
                            $( this ).children(".oeuvres_detail").addClass( "visible" );
                        },
                        mouseleave:function () {
                            //$(this).removeClass("hover");
                            $( this ).children(".oeuvres_detail").removeClass( "visible" );
                        }
                    });
                }, 'html' );
};

     
});

});

$(function(){

$.widget( "custom.catcomplete", $.ui.autocomplete, {
_renderMenu: function( ul, items ) {
var that = this,
currentCategory = "";
$.each( items, function( index, item ) {
if ( item.category != currentCategory ) {
ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
currentCategory = item.category;
}
that._renderItemData( ul, item );
});
}
});

});
$(function() {
$( "#search_all" ).catcomplete({
delay: 0,
source: "autocomplete_all.php"
});
});

/*
* Jssor 19.0
* http://www.jssor.com/
*
* Licensed under the MIT license:
* http://www.opensource.org/licenses/MIT
* 
* TERMS OF USE - Jssor
* 
* Copyright 2014 Jssor
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*! Jssor */

//$JssorDebug$
var $JssorDebug$ = new function () {

    this.$DebugMode = true;

    // Methods

    this.$Log = function (msg, important) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.log) {
            console.log(msg);
        } else if (debug && important) {
            alert(msg);
        }
    };

    this.$Error = function (msg, e) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.error) {
            console.error(msg);
        } else if (debug) {
            alert(msg);
        }

        if (debug) {
            // since we're debugging, fail fast by crashing
            throw e || new Error(msg);
        }
    };

    this.$Fail = function (msg) {
        throw new Error(msg);
    };

    this.$Assert = function (value, msg) {
        var debug = this.$DebugMode;
        if (debug) {
            if (!value)
                throw new Error("Assert failed " + msg || "");
        }
    };

    this.$Trace = function (msg) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.log) {
            console.log(msg);
        }
    };

    this.$Execute = function (func) {
        var debug = this.$DebugMode;
        if (debug)
            func();
    };

    this.$LiveStamp = function (obj, id) {
        var debug = this.$DebugMode;
        if (debug) {
            var stamp = document.createElement("DIV");
            stamp.setAttribute("id", id);

            obj.$Live = stamp;
        }
    };

    this.$C_AbstractProperty = function () {
        ///	<summary>
        ///		Tells compiler the property is abstract, it should be implemented by subclass.
        ///	</summary>

        throw new Error("The property is abstract, it should be implemented by subclass.");
    };

    this.$C_AbstractMethod = function () {
        ///	<summary>
        ///		Tells compiler the method is abstract, it should be implemented by subclass.
        ///	</summary>

        throw new Error("The method is abstract, it should be implemented by subclass.");
    };

    function C_AbstractClass(instance) {
        ///	<summary>
        ///		Tells compiler the class is abstract, it should be implemented by subclass.
        ///	</summary>

        if (instance.constructor === C_AbstractClass.caller)
            throw new Error("Cannot create instance of an abstract class.");
    }

    this.$C_AbstractClass = C_AbstractClass;
};

//$JssorEasing$
var $JssorEasing$ = window.$JssorEasing$ = {
    $EaseSwing: function (t) {
        return -Math.cos(t * Math.PI) / 2 + .5;
    },
    $EaseLinear: function (t) {
        return t;
    },
    $EaseInQuad: function (t) {
        return t * t;
    },
    $EaseOutQuad: function (t) {
        return -t * (t - 2);
    },
    $EaseInOutQuad: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t : -1 / 2 * (--t * (t - 2) - 1);
    },
    $EaseInCubic: function (t) {
        return t * t * t;
    },
    $EaseOutCubic: function (t) {
        return (t -= 1) * t * t + 1;
    },
    $EaseInOutCubic: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t * t : 1 / 2 * ((t -= 2) * t * t + 2);
    },
    $EaseInQuart: function (t) {
        return t * t * t * t;
    },
    $EaseOutQuart: function (t) {
        return -((t -= 1) * t * t * t - 1);
    },
    $EaseInOutQuart: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t * t * t : -1 / 2 * ((t -= 2) * t * t * t - 2);
    },
    $EaseInQuint: function (t) {
        return t * t * t * t * t;
    },
    $EaseOutQuint: function (t) {
        return (t -= 1) * t * t * t * t + 1;
    },
    $EaseInOutQuint: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t * t * t * t : 1 / 2 * ((t -= 2) * t * t * t * t + 2);
    },
    $EaseInSine: function (t) {
        return 1 - Math.cos(t * Math.PI / 2);
    },
    $EaseOutSine: function (t) {
        return Math.sin(t * Math.PI / 2);
    },
    $EaseInOutSine: function (t) {
        return -1 / 2 * (Math.cos(Math.PI * t) - 1);
    },
    $EaseInExpo: function (t) {
        return t == 0 ? 0 : Math.pow(2, 10 * (t - 1));
    },
    $EaseOutExpo: function (t) {
        return t == 1 ? 1 : -Math.pow(2, -10 * t) + 1;
    },
    $EaseInOutExpo: function (t) {
        return t == 0 || t == 1 ? t : (t *= 2) < 1 ? 1 / 2 * Math.pow(2, 10 * (t - 1)) : 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
    },
    $EaseInCirc: function (t) {
        return -(Math.sqrt(1 - t * t) - 1);
    },
    $EaseOutCirc: function (t) {
        return Math.sqrt(1 - (t -= 1) * t);
    },
    $EaseInOutCirc: function (t) {
        return (t *= 2) < 1 ? -1 / 2 * (Math.sqrt(1 - t * t) - 1) : 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    $EaseInElastic: function (t) {
        if (!t || t == 1)
            return t;
        var p = .3, s = .075;
        return -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * 2 * Math.PI / p));
    },
    $EaseOutElastic: function (t) {
        if (!t || t == 1)
            return t;
        var p = .3, s = .075;
        return Math.pow(2, -10 * t) * Math.sin((t - s) * 2 * Math.PI / p) + 1;
    },
    $EaseInOutElastic: function (t) {
        if (!t || t == 1)
            return t;
        var p = .45, s = .1125;
        return (t *= 2) < 1 ? -.5 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * 2 * Math.PI / p) : Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * 2 * Math.PI / p) * .5 + 1;
    },
    $EaseInBack: function (t) {
        var s = 1.70158;
        return t * t * ((s + 1) * t - s);
    },
    $EaseOutBack: function (t) {
        var s = 1.70158;
        return (t -= 1) * t * ((s + 1) * t + s) + 1;
    },
    $EaseInOutBack: function (t) {
        var s = 1.70158;
        return (t *= 2) < 1 ? 1 / 2 * t * t * (((s *= 1.525) + 1) * t - s) : 1 / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    $EaseInBounce: function (t) {
        return 1 - $JssorEasing$.$EaseOutBounce(1 - t)
    },
    $EaseOutBounce: function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    },
    $EaseInOutBounce: function (t) {
        return t < 1 / 2 ? $JssorEasing$.$EaseInBounce(t * 2) * .5 : $JssorEasing$.$EaseOutBounce(t * 2 - 1) * .5 + .5;
    },
    $EaseGoBack: function (t) {
        return 1 - Math.abs((t *= 2) - 1);
    },
    $EaseInWave: function (t) {
        return 1 - Math.cos(t * Math.PI * 2)
    },
    $EaseOutWave: function (t) {
        return Math.sin(t * Math.PI * 2);
    },
    $EaseOutJump: function (t) {
        return 1 - (((t *= 2) < 1) ? (t = 1 - t) * t * t : (t -= 1) * t * t);
    },
    $EaseInJump: function (t) {
        return ((t *= 2) < 1) ? t * t * t : (t = 2 - t) * t * t;
    }
};

var $JssorDirection$ = window.$JssorDirection$ = {
    $TO_LEFT: 0x0001,
    $TO_RIGHT: 0x0002,
    $TO_TOP: 0x0004,
    $TO_BOTTOM: 0x0008,
    $HORIZONTAL: 0x0003,
    $VERTICAL: 0x000C,
    //$LEFTRIGHT: 0x0003,
    //$TOPBOTOM: 0x000C,
    //$TOPLEFT: 0x0005,
    //$TOPRIGHT: 0x0006,
    //$BOTTOMLEFT: 0x0009,
    //$BOTTOMRIGHT: 0x000A,
    //$AROUND: 0x000F,

    $GetDirectionHorizontal: function (direction) {
        return direction & 0x0003;
    },
    $GetDirectionVertical: function (direction) {
        return direction & 0x000C;
    },
    //$ChessHorizontal: function (direction) {
    //    return (~direction & 0x0003) + (direction & 0x000C);
    //},
    //$ChessVertical: function (direction) {
    //    return (~direction & 0x000C) + (direction & 0x0003);
    //},
    //$IsToLeft: function (direction) {
    //    return (direction & 0x0003) == 0x0001;
    //},
    //$IsToRight: function (direction) {
    //    return (direction & 0x0003) == 0x0002;
    //},
    //$IsToTop: function (direction) {
    //    return (direction & 0x000C) == 0x0004;
    //},
    //$IsToBottom: function (direction) {
    //    return (direction & 0x000C) == 0x0008;
    //},
    $IsHorizontal: function (direction) {
        return direction & 0x0003;
    },
    $IsVertical: function (direction) {
        return direction & 0x000C;
    }
};

var $JssorKeyCode$ = {
    $BACKSPACE: 8,
    $COMMA: 188,
    $DELETE: 46,
    $DOWN: 40,
    $END: 35,
    $ENTER: 13,
    $ESCAPE: 27,
    $HOME: 36,
    $LEFT: 37,
    $NUMPAD_ADD: 107,
    $NUMPAD_DECIMAL: 110,
    $NUMPAD_DIVIDE: 111,
    $NUMPAD_ENTER: 108,
    $NUMPAD_MULTIPLY: 106,
    $NUMPAD_SUBTRACT: 109,
    $PAGE_DOWN: 34,
    $PAGE_UP: 33,
    $PERIOD: 190,
    $RIGHT: 39,
    $SPACE: 32,
    $TAB: 9,
    $UP: 38
};

// $Jssor$ is a static class, so make it singleton instance
var $Jssor$ = window.$Jssor$ = new function () {
    var _This = this;

    //#region Constants
    var REGEX_WHITESPACE_GLOBAL = /\S+/g;
    var ROWSER_OTHER = -1;
    var ROWSER_UNKNOWN = 0;
    var BROWSER_IE = 1;
    var BROWSER_FIREFOX = 2;
    var BROWSER_SAFARI = 3;
    var BROWSER_CHROME = 4;
    var BROWSER_OPERA = 5;
    //var arrActiveX = ["Msxml2.XMLHTTP", "Msxml3.XMLHTTP", "Microsoft.XMLHTTP"];
    //#endregion

    //#region Variables
    var _Device;
    var _Browser = 0;
    var _BrowserRuntimeVersion = 0;
    var _BrowserEngineVersion = 0;
    var _BrowserJavascriptVersion = 0;
    var _WebkitVersion = 0;

    var _Navigator = navigator;
    var _AppName = _Navigator.appName;
    var _AppVersion = _Navigator.appVersion;
    var _UserAgent = _Navigator.userAgent;

    var _DocElmt = document.documentElement;
    var _TransformProperty;
    //#endregion

    function Device() {
        if (!_Device) {
            _Device = { $Touchable: "ontouchstart" in window || "createTouch" in document };

            var msPrefix;
            if ((_Navigator.pointerEnabled || (msPrefix = _Navigator.msPointerEnabled))) {
                _Device.$TouchActionAttr = msPrefix ? "msTouchAction" : "touchAction";
            }
        }

        return _Device;
    }

    function DetectBrowser(browser) {
        if (!_Browser) {
            _Browser = -1;

            if (_AppName == "Microsoft Internet Explorer" &&
                !!window.attachEvent && !!window.ActiveXObject) {

                var ieOffset = _UserAgent.indexOf("MSIE");
                _Browser = BROWSER_IE;
                _BrowserEngineVersion = ParseFloat(_UserAgent.substring(ieOffset + 5, _UserAgent.indexOf(";", ieOffset)));

                //check IE javascript version
                /*@cc_on
                _BrowserJavascriptVersion = @_jscript_version;
                @*/

                // update: for intranet sites and compat view list sites, IE sends
                // an IE7 User-Agent to the server to be interoperable, and even if
                // the page requests a later IE version, IE will still report the
                // IE7 UA to JS. we should be robust to self
                //var docMode = document.documentMode;
                //if (typeof docMode !== "undefined") {
                //    _BrowserRuntimeVersion = docMode;
                //}

                _BrowserRuntimeVersion = document.documentMode || _BrowserEngineVersion;

            }
            else if (_AppName == "Netscape" && !!window.addEventListener) {

                var ffOffset = _UserAgent.indexOf("Firefox");
                var saOffset = _UserAgent.indexOf("Safari");
                var chOffset = _UserAgent.indexOf("Chrome");
                var webkitOffset = _UserAgent.indexOf("AppleWebKit");

                if (ffOffset >= 0) {
                    _Browser = BROWSER_FIREFOX;
                    _BrowserRuntimeVersion = ParseFloat(_UserAgent.substring(ffOffset + 8));
                }
                else if (saOffset >= 0) {
                    var slash = _UserAgent.substring(0, saOffset).lastIndexOf("/");
                    _Browser = (chOffset >= 0) ? BROWSER_CHROME : BROWSER_SAFARI;
                    _BrowserRuntimeVersion = ParseFloat(_UserAgent.substring(slash + 1, saOffset));
                }
                else {
                    //(/Trident.*rv[ :]*11\./i
                    var match = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(_UserAgent);
                    if (match) {
                        _Browser = BROWSER_IE;
                        _BrowserRuntimeVersion = _BrowserEngineVersion = ParseFloat(match[1]);
                    }
                }

                if (webkitOffset >= 0)
                    _WebkitVersion = ParseFloat(_UserAgent.substring(webkitOffset + 12));
            }
            else {
                var match = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(_UserAgent);
                if (match) {
                    _Browser = BROWSER_OPERA;
                    _BrowserRuntimeVersion = ParseFloat(match[2]);
                }
            }
        }

        return browser == _Browser;
    }

    function IsBrowserIE() {
        return DetectBrowser(BROWSER_IE);
    }

    function IsBrowserIeQuirks() {
        return IsBrowserIE() && (_BrowserRuntimeVersion < 6 || document.compatMode == "BackCompat");   //Composite to "CSS1Compat"
    }

    function IsBrowserFireFox() {
        return DetectBrowser(BROWSER_FIREFOX);
    }

    function IsBrowserSafari() {
        return DetectBrowser(BROWSER_SAFARI);
    }

    function IsBrowserChrome() {
        return DetectBrowser(BROWSER_CHROME);
    }

    function IsBrowserOpera() {
        return DetectBrowser(BROWSER_OPERA);
    }

    function IsBrowserBadTransform() {
        return IsBrowserSafari() && (_WebkitVersion > 534) && (_WebkitVersion < 535);
    }

    function IsBrowserIe9Earlier() {
        return IsBrowserIE() && _BrowserRuntimeVersion < 9;
    }

    function GetTransformProperty(elmt) {

        if (!_TransformProperty) {
            // Note that in some versions of IE9 it is critical that
            // msTransform appear in this list before MozTransform

            Each(['transform', 'WebkitTransform', 'msTransform', 'MozTransform', 'OTransform'], function (property) {
                if (elmt.style[property] != undefined) {
                    _TransformProperty = property;
                    return true;
                }
            });

            _TransformProperty = _TransformProperty || "transform";
        }

        return _TransformProperty;
    }

    // Helpers
    function getOffsetParent(elmt, isFixed) {
        // IE and Opera "fixed" position elements don't have offset parents.
        // regardless, if it's fixed, its offset parent is the body.
        if (isFixed && elmt != document.body) {
            return document.body;
        } else {
            return elmt.offsetParent;
        }
    }

    function toString(obj) {
        return {}.toString.call(obj);
    }

    // [[Class]] -> type pairs
    var _Class2type;

    function GetClass2Type() {
        if (!_Class2type) {
            _Class2type = {};
            Each(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (name) {
                _Class2type["[object " + name + "]"] = name.toLowerCase();
            });
        }

        return _Class2type;
    }

    function Each(obj, callback) {
        if (toString(obj) == "[object Array]") {
            for (var i = 0; i < obj.length; i++) {
                if (callback(obj[i], i, obj)) {
                    return true;
                }
            }
        }
        else {
            for (var name in obj) {
                if (callback(obj[name], name, obj)) {
                    return true;
                }
            }
        }
    }

    function Type(obj) {
        return obj == null ? String(obj) : GetClass2Type()[toString(obj)] || "object";
    }

    function IsNotEmpty(obj) {
        for(var name in obj)
            return true;
    }

    function IsPlainObject(obj) {
        // Not plain objects:
        // - Any object or value whose internal [[Class]] property is not "[object Object]"
        // - DOM nodes
        // - window
        try {
            return Type(obj) == "object"
                && !obj.nodeType
                && obj != obj.window
                && (!obj.constructor || { }.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf"));
        }
        catch (e) { }
    }

    function Point(x, y) {
        return { x: x, y: y };
    }

    function Delay(code, delay) {
        setTimeout(code, delay || 0);
    }

    function RemoveByReg(str, reg) {
        var m = reg.exec(str);

        if (m) {
            var header = str.substr(0, m.index);
            var tailer = str.substr(m.lastIndex + 1, str.length - (m.lastIndex + 1));
            str = header + tailer;
        }

        return str;
    }

    function BuildNewCss(oldCss, removeRegs, replaceValue) {
        var css = (!oldCss || oldCss == "inherit") ? "" : oldCss;

        Each(removeRegs, function (removeReg) {
            var m = removeReg.exec(css);

            if (m) {
                var header = css.substr(0, m.index);
                var tailer = css.substr(m.lastIndex + 1, css.length - (m.lastIndex + 1));
                css = header + tailer;
            }
        });

        css = replaceValue + (css.indexOf(" ") != 0 ? " " : "") + css;

        return css;
    }

    function SetStyleFilterIE(elmt, value) {
        if (_BrowserRuntimeVersion < 9) {
            elmt.style.filter = value;
        }
    }

    function SetStyleMatrixIE(elmt, matrix, offset) {
        //matrix is not for ie9+ running in ie8- mode
        if (_BrowserJavascriptVersion < 9) {
            var oldFilterValue = elmt.style.filter;
            var matrixReg = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g);
            var matrixValue = matrix ? "progid:DXImageTransform.Microsoft.Matrix(" + "M11=" + matrix[0][0] + ", M12=" + matrix[0][1] + ", M21=" + matrix[1][0] + ", M22=" + matrix[1][1] + ", SizingMethod='auto expand')" : "";

            var newFilterValue = BuildNewCss(oldFilterValue, [matrixReg], matrixValue);

            SetStyleFilterIE(elmt, newFilterValue);

            _This.$CssMarginTop(elmt, offset.y);
            _This.$CssMarginLeft(elmt, offset.x);
        }
    }

    // Methods

    _This.$Device = Device;

    _This.$IsBrowserIE = IsBrowserIE;

    _This.$IsBrowserIeQuirks = IsBrowserIeQuirks;

    _This.$IsBrowserFireFox = IsBrowserFireFox;

    _This.$IsBrowserSafari = IsBrowserSafari;

    _This.$IsBrowserChrome = IsBrowserChrome;

    _This.$IsBrowserOpera = IsBrowserOpera;

    _This.$IsBrowserBadTransform = IsBrowserBadTransform;

    _This.$IsBrowserIe9Earlier = IsBrowserIe9Earlier;

    _This.$BrowserVersion = function () {
        return _BrowserRuntimeVersion;
    };

    _This.$BrowserEngineVersion = function () {
        return _BrowserEngineVersion || _BrowserRuntimeVersion;
    };

    _This.$WebKitVersion = function () {
        DetectBrowser();

        return _WebkitVersion;
    };

    _This.$Delay = Delay;

    _This.$Inherit = function (instance, baseClass) {
        baseClass.call(instance);
        return Extend({}, instance);
    };

    function Construct(instance) {
        instance.constructor === Construct.caller && instance.$Construct && instance.$Construct.apply(instance, Construct.caller.arguments);
    }

    _This.$Construct = Construct;

    _This.$GetElement = function (elmt) {
        if (_This.$IsString(elmt)) {
            elmt = document.getElementById(elmt);
        }

        return elmt;
    };

    function GetEvent(event) {
        return event || window.event;
    }

    _This.$GetEvent = GetEvent;

    _This.$EvtSrc = function (event) {
        event = GetEvent(event);
        return event.target || event.srcElement || document;
    };

    _This.$EvtTarget = function (event) {
        event = GetEvent(event);
        return event.relatedTarget || event.toElement;
    };

    _This.$EvtWhich = function (event) {
        event = GetEvent(event);
        return event.which || [0, 1, 3, 0, 2][event.button] || event.charCode || event.keyCode;
    };

    _This.$MousePosition = function (event) {
        event = GetEvent(event);
        //var body = document.body;

        return {
            x: event.pageX || event.clientX/* + (_DocElmt.scrollLeft || body.scrollLeft || 0) - (_DocElmt.clientLeft || body.clientLeft || 0)*/ || 0,
            y: event.pageY || event.clientY/* + (_DocElmt.scrollTop || body.scrollTop || 0) - (_DocElmt.clientTop || body.clientTop || 0)*/ || 0
        };
    };

    _This.$PageScroll = function () {
        var body = document.body;

        return {
            x: (window.pageXOffset || _DocElmt.scrollLeft || body.scrollLeft || 0) - (_DocElmt.clientLeft || body.clientLeft || 0),
            y: (window.pageYOffset || _DocElmt.scrollTop || body.scrollTop || 0) - (_DocElmt.clientTop || body.clientTop || 0)
        };
    };

    _This.$WindowSize = function () {
        var body = document.body;

        return {
            x: body.clientWidth || _DocElmt.clientWidth,
            y: body.clientHeight || _DocElmt.clientHeight
        };
    };

    //_This.$GetElementPosition = function (elmt) {
    //    elmt = _This.$GetElement(elmt);
    //    var result = Point();

    //    // technique from:
    //    // http://www.quirksmode.org/js/findpos.html
    //    // with special check for "fixed" elements.

    //    while (elmt) {
    //        result.x += elmt.offsetLeft;
    //        result.y += elmt.offsetTop;

    //        var isFixed = _This.$GetElementStyle(elmt).position == "fixed";

    //        if (isFixed) {
    //            result = result.$Plus(_This.$PageScroll(window));
    //        }

    //        elmt = getOffsetParent(elmt, isFixed);
    //    }

    //    return result;
    //};

    //_This.$GetMouseScroll = function (event) {
    //    event = GetEvent(event);
    //    var delta = 0; // default value

    //    // technique from:
    //    // http://blog.paranoidferret.com/index.php/2007/10/31/javascript-tutorial-the-scroll-wheel/

    //    if (typeof (event.wheelDelta) == "number") {
    //        delta = event.wheelDelta;
    //    } else if (typeof (event.detail) == "number") {
    //        delta = event.detail * -1;
    //    } else {
    //        $JssorDebug$.$Fail("Unknown event mouse scroll, no known technique.");
    //    }

    //    // normalize value to [-1, 1]
    //    return delta ? delta / Math.abs(delta) : 0;
    //};

    //_This.$MakeAjaxRequest = function (url, callback) {
    //    var async = typeof (callback) == "function";
    //    var req = null;

    //    if (async) {
    //        var actual = callback;
    //        var callback = function () {
    //            Delay($Jssor$.$CreateCallback(null, actual, req), 1);
    //        };
    //    }

    //    if (window.ActiveXObject) {
    //        for (var i = 0; i < arrActiveX.length; i++) {
    //            try {
    //                req = new ActiveXObject(arrActiveX[i]);
    //                break;
    //            } catch (e) {
    //                continue;
    //            }
    //        }
    //    } else if (window.XMLHttpRequest) {
    //        req = new XMLHttpRequest();
    //    }

    //    if (!req) {
    //        $JssorDebug$.$Fail("Browser doesn't support XMLHttpRequest.");
    //    }

    //    if (async) {
    //        req.onreadystatechange = function () {
    //            if (req.readyState == 4) {
    //                // prevent memory leaks by breaking circular reference now
    //                req.onreadystatechange = new Function();
    //                callback();
    //            }
    //        };
    //    }

    //    try {
    //        req.open("GET", url, async);
    //        req.send(null);
    //    } catch (e) {
    //        $JssorDebug$.$Log(e.name + " while making AJAX request: " + e.message);

    //        req.onreadystatechange = null;
    //        req = null;

    //        if (async) {
    //            callback();
    //        }
    //    }

    //    return async ? null : req;
    //};

    //_This.$ParseXml = function (string) {
    //    var xmlDoc = null;

    //    if (window.ActiveXObject) {
    //        try {
    //            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    //            xmlDoc.async = false;
    //            xmlDoc.loadXML(string);
    //        } catch (e) {
    //            $JssorDebug$.$Log(e.name + " while parsing XML (ActiveX): " + e.message);
    //        }
    //    } else if (window.DOMParser) {
    //        try {
    //            var parser = new DOMParser();
    //            xmlDoc = parser.parseFromString(string, "text/xml");
    //        } catch (e) {
    //            $JssorDebug$.$Log(e.name + " while parsing XML (DOMParser): " + e.message);
    //        }
    //    } else {
    //        $JssorDebug$.$Fail("Browser doesn't support XML DOM.");
    //    }

    //    return xmlDoc;
    //};

    function Css(elmt, name, value) {
        ///	<summary>
        ///		access css
        ///     $Jssor$.$Css(elmt, name);         //get css value
        ///     $Jssor$.$Css(elmt, name, value);  //set css value
        ///	</summary>
        ///	<param name="elmt" type="HTMLElement">
        ///		the element to access css
        ///	</param>
        ///	<param name="name" type="String">
        ///		the name of css property
        ///	</param>
        ///	<param name="value" optional="true">
        ///		the value to set
        ///	</param>
        if (value != undefined) {
            elmt.style[name] = value;
        }
        else {
            var style = elmt.currentStyle || elmt.style;
            value = style[name];

            if (value == "" && window.getComputedStyle) {
                style = elmt.ownerDocument.defaultView.getComputedStyle(elmt, null);

                style && (value = style.getPropertyValue(name) || style[name]);
            }

            return value;
        }
    }

    function CssN(elmt, name, value, isDimensional) {
        ///	<summary>
        ///		access css as numeric
        ///     $Jssor$.$CssN(elmt, name);         //get css value
        ///     $Jssor$.$CssN(elmt, name, value);  //set css value
        ///	</summary>
        ///	<param name="elmt" type="HTMLElement">
        ///		the element to access css
        ///	</param>
        ///	<param name="name" type="String">
        ///		the name of css property
        ///	</param>
        ///	<param name="value" type="Number" optional="true">
        ///		the value to set
        ///	</param>
        if (value != undefined) {
            isDimensional && (value += "px");
            Css(elmt, name, value);
        }
        else {
            return ParseFloat(Css(elmt, name));
        }
    }

    function CssP(elmt, name, value) {
        ///	<summary>
        ///		access css in pixel as numeric, like 'top', 'left', 'width', 'height'
        ///     $Jssor$.$CssP(elmt, name);         //get css value
        ///     $Jssor$.$CssP(elmt, name, value);  //set css value
        ///	</summary>
        ///	<param name="elmt" type="HTMLElement">
        ///		the element to access css
        ///	</param>
        ///	<param name="name" type="String">
        ///		the name of css property
        ///	</param>
        ///	<param name="value" type="Number" optional="true">
        ///		the value to set
        ///	</param>
        return CssN(elmt, name, value, true);
    }

    function CssProxy(name, numericOrDimension) {
        ///	<summary>
        ///		create proxy to access css, CssProxy(name[, numericOrDimension]);
        ///	</summary>
        ///	<param name="elmt" type="HTMLElement">
        ///		the element to access css
        ///	</param>
        ///	<param name="numericOrDimension" type="Number" optional="true">
        ///		not set: access original css, 1: access css as numeric, 2: access css in pixel as numeric
        ///	</param>
        var isDimensional = numericOrDimension & 2;
        var cssAccessor = numericOrDimension ? CssN : Css;
        return function (elmt, value) {
            return cssAccessor(elmt, name, value, isDimensional);
        };
    }

    function GetStyleOpacity(elmt) {
        if (IsBrowserIE() && _BrowserEngineVersion < 9) {
            var match = /opacity=([^)]*)/.exec(elmt.style.filter || "");
            return match ? (ParseFloat(match[1]) / 100) : 1;
        }
        else
            return ParseFloat(elmt.style.opacity || "1");
    }

    function SetStyleOpacity(elmt, opacity, ie9EarlierForce) {

        if (IsBrowserIE() && _BrowserEngineVersion < 9) {
            //var filterName = "filter"; // _BrowserEngineVersion < 8 ? "filter" : "-ms-filter";
            var finalFilter = elmt.style.filter || "";

            // for CSS filter browsers (IE), remove alpha filter if it's unnecessary.
            // update: doing _This always since IE9 beta seems to have broken the
            // behavior if we rely on the programmatic filters collection.
            var alphaReg = new RegExp(/[\s]*alpha\([^\)]*\)/g);

            // important: note the lazy star! _This protects against
            // multiple filters; we don't want to delete the other ones.
            // update: also trimming extra whitespace around filter.

            var ieOpacity = Math.round(100 * opacity);
            var alphaFilter = "";
            if (ieOpacity < 100 || ie9EarlierForce) {
                alphaFilter = "alpha(opacity=" + ieOpacity + ") ";
            }

            var newFilterValue = BuildNewCss(finalFilter, [alphaReg], alphaFilter);

            SetStyleFilterIE(elmt, newFilterValue);
        }
        else {
            elmt.style.opacity = opacity == 1 ? "" : Math.round(opacity * 100) / 100;
        }
    }

    function SetStyleTransformInternal(elmt, transform) {
        var rotate = transform.$Rotate || 0;
        var scale = transform.$Scale == undefined ? 1 : transform.$Scale;

        if (IsBrowserIe9Earlier()) {
            var matrix = _This.$CreateMatrix(rotate / 180 * Math.PI, scale, scale);
            SetStyleMatrixIE(elmt, (!rotate && scale == 1) ? null : matrix, _This.$GetMatrixOffset(matrix, transform.$OriginalWidth, transform.$OriginalHeight));
        }
        else {
            //rotate(15deg) scale(.5) translateZ(0)
            var transformProperty = GetTransformProperty(elmt);
            if (transformProperty) {
                var transformValue = "rotate(" + rotate % 360 + "deg) scale(" + scale + ")";

                //needed for touch device, no need for desktop device
                if (IsBrowserChrome() && _WebkitVersion > 535 && "ontouchstart" in window)
                    transformValue += " perspective(2000px)";

                elmt.style[transformProperty] = transformValue;
            }
        }
    }

    _This.$SetStyleTransform = function (elmt, transform) {
        if (IsBrowserBadTransform()) {
            Delay(_This.$CreateCallback(null, SetStyleTransformInternal, elmt, transform));
        }
        else {
            SetStyleTransformInternal(elmt, transform);
        }
    };

    _This.$SetStyleTransformOrigin = function (elmt, transformOrigin) {
        var transformProperty = GetTransformProperty(elmt);

        if (transformProperty)
            elmt.style[transformProperty + "Origin"] = transformOrigin;
    };

    _This.$CssScale = function (elmt, scale) {

        if (IsBrowserIE() && _BrowserEngineVersion < 9 || (_BrowserEngineVersion < 10 && IsBrowserIeQuirks())) {
            elmt.style.zoom = (scale == 1) ? "" : scale;
        }
        else {
            var transformProperty = GetTransformProperty(elmt);

            if (transformProperty) {
                //rotate(15deg) scale(.5)
                var transformValue = "scale(" + scale + ")";

                var oldTransformValue = elmt.style[transformProperty];
                var scaleReg = new RegExp(/[\s]*scale\(.*?\)/g);

                var newTransformValue = BuildNewCss(oldTransformValue, [scaleReg], transformValue);

                elmt.style[transformProperty] = newTransformValue;
            }
        }
    };

    _This.$EnableHWA = function (elmt) {
        if (!elmt.style[GetTransformProperty(elmt)] || elmt.style[GetTransformProperty(elmt)] == "none")
            elmt.style[GetTransformProperty(elmt)] = "perspective(2000px)";
    };

    _This.$DisableHWA = function (elmt) {
        elmt.style[GetTransformProperty(elmt)] = "none";
    };

    var ie8OffsetWidth = 0;
    var ie8OffsetHeight = 0;

    _This.$WindowResizeFilter = function (window, handler) {
        return IsBrowserIe9Earlier() ? function () {

            var trigger = true;

            var checkElement = (IsBrowserIeQuirks() ? window.document.body : window.document.documentElement);
            if (checkElement) {
                var widthChange = checkElement.offsetWidth - ie8OffsetWidth;
                var heightChange = checkElement.offsetHeight - ie8OffsetHeight;
                if (widthChange || heightChange) {
                    ie8OffsetWidth += widthChange;
                    ie8OffsetHeight += heightChange;
                }
                else
                    trigger = false;
            }

            trigger && handler();

        } : handler;
    };

    _This.$MouseOverOutFilter = function (handler, target) {
        ///	<param name="target" type="HTMLDomElement">
        ///		The target element to detect mouse over/out events. (for ie < 9 compatibility)
        ///	</param>

        $JssorDebug$.$Execute(function () {
            if (!target) {
                throw new Error("Null reference, parameter \"target\".");
            }
        });

        return function (event) {
            event = GetEvent(event);

            var eventName = event.type;
            var related = event.relatedTarget || (eventName == "mouseout" ? event.toElement : event.fromElement);

            if (!related || (related !== target && !_This.$IsChild(target, related))) {
                handler(event);
            }
        };
    };

    _This.$AddEvent = function (elmt, eventName, handler, useCapture) {
        elmt = _This.$GetElement(elmt);

        $JssorDebug$.$Execute(function () {
            if (!elmt) {
                $JssorDebug$.$Fail("Parameter 'elmt' not specified.");
            }

            if (!handler) {
                $JssorDebug$.$Fail("Parameter 'handler' not specified.");
            }

            if (!elmt.addEventListener && !elmt.attachEvent) {
                $JssorDebug$.$Fail("Unable to attach event handler, no known technique.");
            }
        });

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (elmt.addEventListener) {
            if (eventName == "mousewheel") {
                elmt.addEventListener("DOMMouseScroll", handler, useCapture);
            }
            // we are still going to add the mousewheel -- not a mistake!
            // _This is for opera, since it uses onmousewheel but needs addEventListener.
            elmt.addEventListener(eventName, handler, useCapture);
        }
        else if (elmt.attachEvent) {
            elmt.attachEvent("on" + eventName, handler);
            if (useCapture && elmt.setCapture) {
                elmt.setCapture();
            }
        }
    };

    _This.$RemoveEvent = function (elmt, eventName, handler, useCapture) {
        elmt = _This.$GetElement(elmt);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (elmt.removeEventListener) {
            if (eventName == "mousewheel") {
                elmt.removeEventListener("DOMMouseScroll", handler, useCapture);
            }
            // we are still going to remove the mousewheel -- not a mistake!
            // _This is for opera, since it uses onmousewheel but needs removeEventListener.
            elmt.removeEventListener(eventName, handler, useCapture);
        }
        else if (elmt.detachEvent) {
            elmt.detachEvent("on" + eventName, handler);
            if (useCapture && elmt.releaseCapture) {
                elmt.releaseCapture();
            }
        }
    };

    _This.$FireEvent = function (elmt, eventName) {
        //var document = elmt.document;

        $JssorDebug$.$Execute(function () {
            if (!document.createEvent && !document.createEventObject) {
                $JssorDebug$.$Fail("Unable to fire event, no known technique.");
            }

            if (!elmt.dispatchEvent && !elmt.fireEvent) {
                $JssorDebug$.$Fail("Unable to fire event, no known technique.");
            }
        });

        var evento;

        if (document.createEvent) {
            evento = document.createEvent("HTMLEvents");
            evento.initEvent(eventName, false, false);
            elmt.dispatchEvent(evento);
        }
        else {
            var ieEventName = "on" + eventName;
            evento = document.createEventObject();

            elmt.fireEvent(ieEventName, evento);
        }
    };

    _This.$CancelEvent = function (event) {
        event = GetEvent(event);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (event.preventDefault) {
            event.preventDefault();     // W3C for preventing default
        }

        event.cancel = true;            // legacy for preventing default
        event.returnValue = false;      // IE for preventing default
    };

    _This.$StopEvent = function (event) {
        event = GetEvent(event);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (event.stopPropagation) {
            event.stopPropagation();    // W3C for stopping propagation
        }

        event.cancelBubble = true;      // IE for stopping propagation
    };

    _This.$CreateCallback = function (object, method) {
        // create callback args
        var initialArgs = [].slice.call(arguments, 2);

        // create closure to apply method
        var callback = function () {
            // concatenate new args, but make a copy of initialArgs first
            var args = initialArgs.concat([].slice.call(arguments, 0));

            return method.apply(object, args);
        };

        //$JssorDebug$.$LiveStamp(callback, "callback_" + ($Jssor$.$GetNow() & 0xFFFFFF));

        return callback;
    };

    _This.$InnerText = function (elmt, text) {
        if (text == undefined)
            return elmt.textContent || elmt.innerText;

        var textNode = document.createTextNode(text);
        _This.$Empty(elmt);
        elmt.appendChild(textNode);
    };

    _This.$InnerHtml = function (elmt, html) {
        if (html == undefined)
            return elmt.innerHTML;

        elmt.innerHTML = html;
    };

    _This.$GetClientRect = function (elmt) {
        var rect = elmt.getBoundingClientRect();

        return { x: rect.left, y: rect.top, w: rect.right - rect.left, h: rect.bottom - rect.top };
    };

    _This.$ClearInnerHtml = function (elmt) {
        elmt.innerHTML = "";
    };

    _This.$EncodeHtml = function (text) {
        var div = _This.$CreateDiv();
        _This.$InnerText(div, text);
        return _This.$InnerHtml(div);
    };

    _This.$DecodeHtml = function (html) {
        var div = _This.$CreateDiv();
        _This.$InnerHtml(div, html);
        return _This.$InnerText(div);
    };

    _This.$SelectElement = function (elmt) {
        var userSelection;
        if (window.getSelection) {
            //W3C default
            userSelection = window.getSelection();
        }
        var theRange = null;
        if (document.createRange) {
            theRange = document.createRange();
            theRange.selectNode(elmt);
        }
        else {
            theRange = document.body.createTextRange();
            theRange.moveToElementText(elmt);
            theRange.select();
        }
        //set user selection
        if (userSelection)
            userSelection.addRange(theRange);
    };

    _This.$DeselectElements = function () {
        if (document.selection) {
            document.selection.empty();
        } else if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    };

    _This.$Children = function (elmt, includeAll) {
        var children = [];

        for (var tmpEl = elmt.firstChild; tmpEl; tmpEl = tmpEl.nextSibling) {
            if (includeAll || tmpEl.nodeType == 1) {
                children.push(tmpEl);
            }
        }

        return children;
    };

    function FindChild(elmt, attrValue, noDeep, attrName) {
        attrName = attrName || "u";

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (AttributeEx(elmt, attrName) == attrValue)
                    return elmt;

                if (!noDeep) {
                    var childRet = FindChild(elmt, attrValue, noDeep, attrName);
                    if (childRet)
                        return childRet;
                }
            }
        }
    }

    _This.$FindChild = FindChild;

    function FindChildren(elmt, attrValue, noDeep, attrName) {
        attrName = attrName || "u";

        var ret = [];

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (AttributeEx(elmt, attrName) == attrValue)
                    ret.push(elmt);

                if (!noDeep) {
                    var childRet = FindChildren(elmt, attrValue, noDeep, attrName);
                    if (childRet.length)
                        ret = ret.concat(childRet);
                }
            }
        }

        return ret;
    }

    _This.$FindChildren = FindChildren;

    function FindChildByTag(elmt, tagName, noDeep) {

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (elmt.tagName == tagName)
                    return elmt;

                if (!noDeep) {
                    var childRet = FindChildByTag(elmt, tagName, noDeep);
                    if (childRet)
                        return childRet;
                }
            }
        }
    }

    _This.$FindChildByTag = FindChildByTag;

    function FindChildrenByTag(elmt, tagName, noDeep) {
        var ret = [];

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (!tagName || elmt.tagName == tagName)
                    ret.push(elmt);

                if (!noDeep) {
                    var childRet = FindChildrenByTag(elmt, tagName, noDeep);
                    if (childRet.length)
                        ret = ret.concat(childRet);
                }
            }
        }

        return ret;
    }

    _This.$FindChildrenByTag = FindChildrenByTag;

    _This.$GetElementsByTag = function (elmt, tagName) {
        return elmt.getElementsByTagName(tagName);
    };

    //function Extend() {
    //    var args = arguments;
    //    var target;
    //    var options;
    //    var propName;
    //    var propValue;
    //    var targetPropValue;
    //    var purpose = 7 & args[0];
    //    var deep = 1 & purpose;
    //    var unextend = 2 & purpose;
    //    var i = purpose ? 2 : 1;
    //    target = args[i - 1] || {};

    //    for (; i < args.length; i++) {
    //        // Only deal with non-null/undefined values
    //        if (options = args[i]) {
    //            // Extend the base object
    //            for (propName in options) {
    //                propValue = options[propName];

    //                if (propValue !== undefined) {
    //                    propValue = options[propName];

    //                    if (unextend) {
    //                        targetPropValue = target[propName];
    //                        if (propValue === targetPropValue)
    //                            delete target[propName];
    //                        else if (deep && IsPlainObject(targetPropValue)) {
    //                            Extend(purpose, targetPropValue, propValue);
    //                        }
    //                    }
    //                    else {
    //                        target[propName] = (deep && IsPlainObject(target[propName])) ? Extend(purpose | 4, {}, propValue) : propValue;
    //                    }
    //                }
    //            }
    //        }
    //    }

    //    // Return the modified object
    //    return target;
    //}

    //function Unextend() {
    //    var args = arguments;
    //    var newArgs = [].slice.call(arguments);
    //    var purpose = 1 & args[0];

    //    purpose && newArgs.shift();
    //    newArgs.unshift(purpose | 2);

    //    return Extend.apply(null, newArgs);
    //}

    function Extend() {
        var args = arguments;
        var target;
        var options;
        var propName;
        var propValue;
        var deep = 1 & args[0];
        var i = 1 + deep;
        target = args[i - 1] || {};

        for (; i < args.length; i++) {
            // Only deal with non-null/undefined values
            if (options = args[i]) {
                // Extend the base object
                for (propName in options) {
                    propValue = options[propName];

                    if (propValue !== undefined) {
                        propValue = options[propName];
                        target[propName] = (deep && IsPlainObject(target[propName])) ? Extend(deep, {}, propValue) : propValue;
                    }
                }
            }
        }

        // Return the modified object
        return target;
    }

    _This.$Extend = Extend;

    function Unextend(target, option) {
        $JssorDebug$.$Assert(option);

        var unextended = {};
        var name;
        var targetProp;
        var optionProp;

        // Extend the base object
        for (name in target) {
            targetProp = target[name];
            optionProp = option[name];

            if (targetProp !== optionProp) {
                var exclude;

                if (IsPlainObject(targetProp) && IsPlainObject(optionProp)) {
                    targetProp = Unextend(optionProp);
                    exclude = !IsNotEmpty(targetProp);
                }
                
                !exclude && (unextended[name] = targetProp);
            }
        }

        // Return the modified object
        return unextended;
    }

    _This.$Unextend = Unextend;

    _This.$IsFunction = function (obj) {
        return Type(obj) == "function";
    };

    _This.$IsArray = function (obj) {
        return Type(obj) == "array";
    };

    _This.$IsString = function (obj) {
        return Type(obj) == "string";
    };

    _This.$IsNumeric = function (obj) {
        return !isNaN(ParseFloat(obj)) && isFinite(obj);
    };

    _This.$Type = Type;

    // args is for internal usage only
    _This.$Each = Each;

    _This.$IsNotEmpty = IsNotEmpty;

    _This.$IsPlainObject = IsPlainObject;

    function CreateElement(tagName) {
        return document.createElement(tagName);
    }

    _This.$CreateElement = CreateElement;

    _This.$CreateDiv = function () {
        return CreateElement("DIV");
    };

    _This.$CreateSpan = function () {
        return CreateElement("SPAN");
    };

    _This.$EmptyFunction = function () { };

    function Attribute(elmt, name, value) {
        if (value == undefined)
            return elmt.getAttribute(name);

        elmt.setAttribute(name, value);
    }

    function AttributeEx(elmt, name) {
        return Attribute(elmt, name) || Attribute(elmt, "data-" + name);
    }

    _This.$Attribute = Attribute;
    _This.$AttributeEx = AttributeEx;

    function ClassName(elmt, className) {
        if (className == undefined)
            return elmt.className;

        elmt.className = className;
    }

    _This.$ClassName = ClassName;

    function ToHash(array) {
        var hash = {};

        Each(array, function (item) {
            hash[item] = item;
        });

        return hash;
    }

    function Split(str, separator) {
        return str.match(separator || REGEX_WHITESPACE_GLOBAL);
    }

    function StringToHashObject(str, regExp) {
        return ToHash(Split(str || "", regExp));
    }

    _This.$ToHash = ToHash;
    _This.$Split = Split;

    function Join(separator, strings) {
        ///	<param name="separator" type="String">
        ///	</param>
        ///	<param name="strings" type="Array" value="['1']">
        ///	</param>

        var joined = "";

        Each(strings, function (str) {
            joined && (joined += separator);
            joined += str;
        });

        return joined;
    }

    function ReplaceClass(elmt, oldClassName, newClassName) {
        ClassName(elmt, Join(" ", Extend(Unextend(StringToHashObject(ClassName(elmt)), StringToHashObject(oldClassName)), StringToHashObject(newClassName))));
    }

    _This.$Join = Join;

    _This.$AddClass = function (elmt, className) {
        ReplaceClass(elmt, null, className);
    };

    _This.$RemoveClass = ReplaceClass;

    _This.$ReplaceClass = ReplaceClass;

    _This.$ParentNode = function (elmt) {
        return elmt.parentNode;
    };

    _This.$HideElement = function (elmt) {
        _This.$CssDisplay(elmt, "none");
    };

    _This.$EnableElement = function (elmt, notEnable) {
        if (notEnable) {
            _This.$Attribute(elmt, "disabled", true);
        }
        else {
            _This.$RemoveAttribute(elmt, "disabled");
        }
    };

    _This.$HideElements = function (elmts) {
        for (var i = 0; i < elmts.length; i++) {
            _This.$HideElement(elmts[i]);
        }
    };

    _This.$ShowElement = function (elmt, hide) {
        _This.$CssDisplay(elmt, hide ? "none" : "");
    };

    _This.$ShowElements = function (elmts, hide) {
        for (var i = 0; i < elmts.length; i++) {
            _This.$ShowElement(elmts[i], hide);
        }
    };

    _This.$RemoveAttribute = function (elmt, attrbuteName) {
        elmt.removeAttribute(attrbuteName);
    };

    _This.$CanClearClip = function () {
        return IsBrowserIE() && _BrowserRuntimeVersion < 10;
    };

    _This.$SetStyleClip = function (elmt, clip) {
        if (clip) {
            elmt.style.clip = "rect(" + Math.round(clip.$Top) + "px " + Math.round(clip.$Right) + "px " + Math.round(clip.$Bottom) + "px " + Math.round(clip.$Left) + "px)";
        }
        else {
            var cssText = elmt.style.cssText;
            var clipRegs = [
                new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),
                new RegExp(/[\s]*cliptop: .*?[;]?/i),
                new RegExp(/[\s]*clipright: .*?[;]?/i),
                new RegExp(/[\s]*clipbottom: .*?[;]?/i),
                new RegExp(/[\s]*clipleft: .*?[;]?/i)
            ];

            var newCssText = BuildNewCss(cssText, clipRegs, "");

            $Jssor$.$CssCssText(elmt, newCssText);
        }
    };

    _This.$GetNow = function () {
        return new Date().getTime();
    };

    _This.$AppendChild = function (elmt, child) {
        elmt.appendChild(child);
    };

    _This.$AppendChildren = function (elmt, children) {
        Each(children, function (child) {
            _This.$AppendChild(elmt, child);
        });
    };

    _This.$InsertBefore = function (newNode, refNode, pNode) {
        ///	<summary>
        ///		Insert a node before a reference node
        ///	</summary>
        ///	<param name="newNode" type="HTMLElement">
        ///		A new node to insert
        ///	</param>
        ///	<param name="refNode" type="HTMLElement">
        ///		The reference node to insert a new node before
        ///	</param>
        ///	<param name="pNode" type="HTMLElement" optional="true">
        ///		The parent node to insert node to
        ///	</param>

        (pNode || refNode.parentNode).insertBefore(newNode, refNode);
    };

    _This.$InsertAfter = function (newNode, refNode, pNode) {
        ///	<summary>
        ///		Insert a node after a reference node
        ///	</summary>
        ///	<param name="newNode" type="HTMLElement">
        ///		A new node to insert
        ///	</param>
        ///	<param name="refNode" type="HTMLElement">
        ///		The reference node to insert a new node after
        ///	</param>
        ///	<param name="pNode" type="HTMLElement" optional="true">
        ///		The parent node to insert node to
        ///	</param>

        _This.$InsertBefore(newNode, refNode.nextSibling, pNode || refNode.parentNode);
    };

    _This.$InsertAdjacentHtml = function (elmt, where, html) {
        elmt.insertAdjacentHTML(where, html);
    };

    _This.$RemoveElement = function (elmt, pNode) {
        ///	<summary>
        ///		Remove element from parent node
        ///	</summary>
        ///	<param name="elmt" type="HTMLElement">
        ///		The element to remove
        ///	</param>
        ///	<param name="pNode" type="HTMLElement" optional="true">
        ///		The parent node to remove elment from
        ///	</param>
        (pNode || elmt.parentNode).removeChild(elmt);
    };

    _This.$RemoveElements = function (elmts, pNode) {
        Each(elmts, function (elmt) {
            _This.$RemoveElement(elmt, pNode);
        });
    };

    _This.$Empty = function (elmt) {
        _This.$RemoveElements(_This.$Children(elmt, true), elmt);
    };

    _This.$ParseInt = function (str, radix) {
        return parseInt(str, radix || 10);
    };

    var ParseFloat = parseFloat;

    _This.$ParseFloat = ParseFloat;

    _This.$IsChild = function (elmtA, elmtB) {
        var body = document.body;

        while (elmtB && elmtA !== elmtB && body !== elmtB) {
            try {
                elmtB = elmtB.parentNode;
            } catch (e) {
                // Firefox sometimes fires events for XUL elements, which throws
                // a "permission denied" error. so this is not a child.
                return false;
            }
        }

        return elmtA === elmtB;
    };

    function CloneNode(elmt, noDeep, keepId) {
        var clone = elmt.cloneNode(!noDeep);
        if (!keepId) {
            _This.$RemoveAttribute(clone, "id");
        }

        return clone;
    }

    _This.$CloneNode = CloneNode;

    _This.$LoadImage = function (src, callback) {
        var image = new Image();

        function LoadImageCompleteHandler(event, abort) {
            _This.$RemoveEvent(image, "load", LoadImageCompleteHandler);
            _This.$RemoveEvent(image, "abort", ErrorOrAbortHandler);
            _This.$RemoveEvent(image, "error", ErrorOrAbortHandler);

            if (callback)
                callback(image, abort);
        }

        function ErrorOrAbortHandler(event) {
            LoadImageCompleteHandler(event, true);
        }

        if (IsBrowserOpera() && _BrowserRuntimeVersion < 11.6 || !src) {
            LoadImageCompleteHandler(!src);
        }
        else {

            _This.$AddEvent(image, "load", LoadImageCompleteHandler);
            _This.$AddEvent(image, "abort", ErrorOrAbortHandler);
            _This.$AddEvent(image, "error", ErrorOrAbortHandler);

            image.src = src;
        }
    };

    _This.$LoadImages = function (imageElmts, mainImageElmt, callback) {

        var _ImageLoading = imageElmts.length + 1;

        function LoadImageCompleteEventHandler(image, abort) {

            _ImageLoading--;
            if (mainImageElmt && image && image.src == mainImageElmt.src)
                mainImageElmt = image;
            !_ImageLoading && callback && callback(mainImageElmt);
        }

        Each(imageElmts, function (imageElmt) {
            _This.$LoadImage(imageElmt.src, LoadImageCompleteEventHandler);
        });

        LoadImageCompleteEventHandler();
    };

    _This.$BuildElement = function (template, tagName, replacer, createCopy) {
        if (createCopy)
            template = CloneNode(template);

        var templateHolders = FindChildren(template, tagName);
        if (!templateHolders.length)
            templateHolders = $Jssor$.$GetElementsByTag(template, tagName);

        for (var j = templateHolders.length - 1; j > -1; j--) {
            var templateHolder = templateHolders[j];
            var replaceItem = CloneNode(replacer);
            ClassName(replaceItem, ClassName(templateHolder));
            $Jssor$.$CssCssText(replaceItem, templateHolder.style.cssText);

            $Jssor$.$InsertBefore(replaceItem, templateHolder);
            $Jssor$.$RemoveElement(templateHolder);
        }

        return template;
    };

    function JssorButtonEx(elmt) {
        var _Self = this;

        var _OriginClassName = "";
        var _ToggleClassSuffixes = ["av", "pv", "ds", "dn"];
        var _ToggleClasses = [];
        var _ToggleClassName;

        var _IsMouseDown = 0;   //class name 'dn'
        var _IsSelected = 0;    //class name 1(active): 'av', 2(passive): 'pv'
        var _IsDisabled = 0;    //class name 'ds'

        function Highlight() {
            ReplaceClass(elmt, _ToggleClassName, _ToggleClasses[_IsDisabled || _IsMouseDown || (_IsSelected & 2) || _IsSelected]);
        }

        function MouseUpOrCancelEventHandler(event) {
            _IsMouseDown = 0;

            Highlight();

            _This.$RemoveEvent(document, "mouseup", MouseUpOrCancelEventHandler);
            _This.$RemoveEvent(document, "touchend", MouseUpOrCancelEventHandler);
            _This.$RemoveEvent(document, "touchcancel", MouseUpOrCancelEventHandler);
        }

        function MouseDownEventHandler(event) {
            if (_IsDisabled) {
                _This.$CancelEvent(event);
            }
            else {

                _IsMouseDown = 4;

                Highlight();

                _This.$AddEvent(document, "mouseup", MouseUpOrCancelEventHandler);
                _This.$AddEvent(document, "touchend", MouseUpOrCancelEventHandler);
                _This.$AddEvent(document, "touchcancel", MouseUpOrCancelEventHandler);
            }
        }

        _Self.$Selected = function (activate) {
            if (activate != undefined) {
                _IsSelected = (activate & 2) || (activate & 1);

                Highlight();
            }
            else {
                return _IsSelected;
            }
        };

        _Self.$Enable = function (enable) {
            if (enable == undefined) {
                return !_IsDisabled;
            }

            _IsDisabled = enable ? 0 : 3;

            Highlight();
        };

        //JssorButtonEx Constructor
        {
            elmt = _This.$GetElement(elmt);

            var originalClassNameArray = $Jssor$.$Split(ClassName(elmt));
            if (originalClassNameArray)
                _OriginClassName = originalClassNameArray.shift();

            Each(_ToggleClassSuffixes, function (toggleClassSuffix) {
                _ToggleClasses.push(_OriginClassName +toggleClassSuffix);
            });

            _ToggleClassName = Join(" ", _ToggleClasses);

            _ToggleClasses.unshift("");

            _This.$AddEvent(elmt, "mousedown", MouseDownEventHandler);
            _This.$AddEvent(elmt, "touchstart", MouseDownEventHandler);
        }
    }

    _This.$Buttonize = function (elmt) {
        return new JssorButtonEx(elmt);
    };

    _This.$Css = Css;
    _This.$CssN = CssN;
    _This.$CssP = CssP;

    _This.$CssOverflow = CssProxy("overflow");

    _This.$CssTop = CssProxy("top", 2);
    _This.$CssLeft = CssProxy("left", 2);
    _This.$CssWidth = CssProxy("width", 2);
    _This.$CssHeight = CssProxy("height", 2);
    _This.$CssMarginLeft = CssProxy("marginLeft", 2);
    _This.$CssMarginTop = CssProxy("marginTop", 2);
    _This.$CssPosition = CssProxy("position");
    _This.$CssDisplay = CssProxy("display");
    _This.$CssZIndex = CssProxy("zIndex", 1);
    _This.$CssFloat = function (elmt, floatValue) {
        return Css(elmt, IsBrowserIE() ? "styleFloat" : "cssFloat", floatValue);
    };
    _This.$CssOpacity = function (elmt, opacity, ie9EarlierForce) {
        if (opacity != undefined) {
            SetStyleOpacity(elmt, opacity, ie9EarlierForce);
        }
        else {
            return GetStyleOpacity(elmt);
        }
    };

    _This.$CssCssText = function (elmt, text) {
        if (text != undefined) {
            elmt.style.cssText = text;
        }
        else {
            return elmt.style.cssText;
        }
    };

    var _StyleGetter = {
        $Opacity: _This.$CssOpacity,
        $Top: _This.$CssTop,
        $Left: _This.$CssLeft,
        $Width: _This.$CssWidth,
        $Height: _This.$CssHeight,
        $Position: _This.$CssPosition,
        $Display: _This.$CssDisplay,
        $ZIndex: _This.$CssZIndex
    };

    var _StyleSetterReserved;

    function StyleSetter() {
        if (!_StyleSetterReserved) {
            _StyleSetterReserved = Extend({
                $MarginTop: _This.$CssMarginTop,
                $MarginLeft: _This.$CssMarginLeft,
                $Clip: _This.$SetStyleClip,
                $Transform: _This.$SetStyleTransform
            }, _StyleGetter);
        }
        return _StyleSetterReserved;
    }

    function StyleSetterEx() {
        StyleSetter();

        //For Compression Only
        _StyleSetterReserved.$Transform = _StyleSetterReserved.$Transform;

        return _StyleSetterReserved;
    }

    _This.$StyleSetter = StyleSetter;

    _This.$StyleSetterEx = StyleSetterEx;

    _This.$GetStyles = function (elmt, originStyles) {
        StyleSetter();

        var styles = {};

        Each(originStyles, function (value, key) {
            if (_StyleGetter[key]) {
                styles[key] = _StyleGetter[key](elmt);
            }
        });

        return styles;
    };

    _This.$SetStyles = function (elmt, styles) {
        var styleSetter = StyleSetter();

        Each(styles, function (value, key) {
            styleSetter[key] && styleSetter[key](elmt, value);
        });
    };

    _This.$SetStylesEx = function (elmt, styles) {
        StyleSetterEx();

        _This.$SetStyles(elmt, styles);
    };

    var $JssorMatrix$ = new function () {
        var _ThisMatrix = this;

        function Multiply(ma, mb) {
            var acs = ma[0].length;
            var rows = ma.length;
            var cols = mb[0].length;

            var matrix = [];

            for (var r = 0; r < rows; r++) {
                var row = matrix[r] = [];
                for (var c = 0; c < cols; c++) {
                    var unitValue = 0;

                    for (var ac = 0; ac < acs; ac++) {
                        unitValue += ma[r][ac] * mb[ac][c];
                    }

                    row[c] = unitValue;
                }
            }

            return matrix;
        }

        _ThisMatrix.$ScaleX = function (matrix, sx) {
            return _ThisMatrix.$ScaleXY(matrix, sx, 0);
        };

        _ThisMatrix.$ScaleY = function (matrix, sy) {
            return _ThisMatrix.$ScaleXY(matrix, 0, sy);
        };

        _ThisMatrix.$ScaleXY = function (matrix, sx, sy) {
            return Multiply(matrix, [[sx, 0], [0, sy]]);
        };

        _ThisMatrix.$TransformPoint = function (matrix, p) {
            var pMatrix = Multiply(matrix, [[p.x], [p.y]]);

            return Point(pMatrix[0][0], pMatrix[1][0]);
        };
    };

    _This.$CreateMatrix = function (alpha, scaleX, scaleY) {
        var cos = Math.cos(alpha);
        var sin = Math.sin(alpha);
        //var r11 = cos;
        //var r21 = sin;
        //var r12 = -sin;
        //var r22 = cos;

        //var m11 = cos * scaleX;
        //var m12 = -sin * scaleY;
        //var m21 = sin * scaleX;
        //var m22 = cos * scaleY;

        return [[cos * scaleX, -sin * scaleY], [sin * scaleX, cos * scaleY]];
    };

    _This.$GetMatrixOffset = function (matrix, width, height) {
        var p1 = $JssorMatrix$.$TransformPoint(matrix, Point(-width / 2, -height / 2));
        var p2 = $JssorMatrix$.$TransformPoint(matrix, Point(width / 2, -height / 2));
        var p3 = $JssorMatrix$.$TransformPoint(matrix, Point(width / 2, height / 2));
        var p4 = $JssorMatrix$.$TransformPoint(matrix, Point(-width / 2, height / 2));

        return Point(Math.min(p1.x, p2.x, p3.x, p4.x) + width / 2, Math.min(p1.y, p2.y, p3.y, p4.y) + height / 2);
    };

    _This.$Cast = function (fromStyles, difStyles, interPosition, easings, durings, rounds, options) {

        var currentStyles = difStyles;

        if (fromStyles) {
            currentStyles = {};

            for (var key in difStyles) {

                var round = rounds[key] || 1;
                var during = durings[key] || [0, 1];
                var propertyInterPosition = (interPosition - during[0]) / during[1];
                propertyInterPosition = Math.min(Math.max(propertyInterPosition, 0), 1);
                propertyInterPosition = propertyInterPosition * round;
                var floorPosition = Math.floor(propertyInterPosition);
                if (propertyInterPosition != floorPosition)
                    propertyInterPosition -= floorPosition;

                var easing = easings[key] || easings.$Default || $JssorEasing$.$EaseSwing;
                var easingValue = easing(propertyInterPosition);
                var currentPropertyValue;
                var value = fromStyles[key];
                var toValue = difStyles[key];
                var difValue = difStyles[key];

                if ($Jssor$.$IsNumeric(difValue)) {
                    currentPropertyValue = value + difValue * easingValue;
                }
                else {
                    currentPropertyValue = $Jssor$.$Extend({ $Offset: {} }, fromStyles[key]);

                    $Jssor$.$Each(difValue.$Offset, function (rectX, n) {
                        var offsetValue = rectX * easingValue;
                        currentPropertyValue.$Offset[n] = offsetValue;
                        currentPropertyValue[n] += offsetValue;
                    });
                }
                currentStyles[key] = currentPropertyValue;
            }

            if (difStyles.$Zoom || difStyles.$Rotate) {
                currentStyles.$Transform = { $Rotate: currentStyles.$Rotate || 0, $Scale: currentStyles.$Zoom, $OriginalWidth: options.$OriginalWidth, $OriginalHeight: options.$OriginalHeight };
            }
        }

        if (difStyles.$Clip && options.$Move) {
            var styleFrameNClipOffset = currentStyles.$Clip.$Offset;

            var offsetY = (styleFrameNClipOffset.$Top || 0) + (styleFrameNClipOffset.$Bottom || 0);
            var offsetX = (styleFrameNClipOffset.$Left || 0) + (styleFrameNClipOffset.$Right || 0);

            currentStyles.$Left = (currentStyles.$Left || 0) + offsetX;
            currentStyles.$Top = (currentStyles.$Top || 0) + offsetY;
            currentStyles.$Clip.$Left -= offsetX;
            currentStyles.$Clip.$Right -= offsetX;
            currentStyles.$Clip.$Top -= offsetY;
            currentStyles.$Clip.$Bottom -= offsetY;
        }

        if (currentStyles.$Clip && $Jssor$.$CanClearClip() && !currentStyles.$Clip.$Top && !currentStyles.$Clip.$Left && (currentStyles.$Clip.$Right == options.$OriginalWidth) && (currentStyles.$Clip.$Bottom == options.$OriginalHeight))
            currentStyles.$Clip = null;

        return currentStyles;
    };
};

//$JssorObject$
function $JssorObject$() {
    var _ThisObject = this;
    // Fields

    var _Listeners = []; // dictionary of eventName --> array of handlers
    var _Listenees = [];

    // Private Methods
    function AddListener(eventName, handler) {

        $JssorDebug$.$Execute(function () {
            if (eventName == undefined || eventName == null)
                throw new Error("param 'eventName' is null or empty.");

            if (typeof (handler) != "function") {
                throw "param 'handler' must be a function.";
            }

            $Jssor$.$Each(_Listeners, function (listener) {
                if (listener.$EventName == eventName && listener.$Handler === handler) {
                    throw new Error("The handler listened to the event already, cannot listen to the same event of the same object with the same handler twice.");
                }
            });
        });

        _Listeners.push({ $EventName: eventName, $Handler: handler });
    }

    function RemoveListener(eventName, handler) {

        $JssorDebug$.$Execute(function () {
            if (eventName == undefined || eventName == null)
                throw new Error("param 'eventName' is null or empty.");

            if (typeof (handler) != "function") {
                throw "param 'handler' must be a function.";
            }
        });

        $Jssor$.$Each(_Listeners, function (listener, index) {
            if (listener.$EventName == eventName && listener.$Handler === handler) {
                _Listeners.splice(index, 1);
            }
        });
    }

    function ClearListeners() {
        _Listeners = [];
    }

    function ClearListenees() {

        $Jssor$.$Each(_Listenees, function (listenee) {
            $Jssor$.$RemoveEvent(listenee.$Obj, listenee.$EventName, listenee.$Handler);
        });

        _Listenees = [];
    }

    //Protected Methods
    _ThisObject.$Listen = function (obj, eventName, handler, useCapture) {

        $JssorDebug$.$Execute(function () {
            if (!obj)
                throw new Error("param 'obj' is null or empty.");

            if (eventName == undefined || eventName == null)
                throw new Error("param 'eventName' is null or empty.");

            if (typeof (handler) != "function") {
                throw "param 'handler' must be a function.";
            }

            $Jssor$.$Each(_Listenees, function (listenee) {
                if (listenee.$Obj === obj && listenee.$EventName == eventName && listenee.$Handler === handler) {
                    throw new Error("The handler listened to the event already, cannot listen to the same event of the same object with the same handler twice.");
                }
            });
        });

        $Jssor$.$AddEvent(obj, eventName, handler, useCapture);
        _Listenees.push({ $Obj: obj, $EventName: eventName, $Handler: handler });
    };

    _ThisObject.$Unlisten = function (obj, eventName, handler) {

        $JssorDebug$.$Execute(function () {
            if (!obj)
                throw new Error("param 'obj' is null or empty.");

            if (eventName == undefined || eventName == null)
                throw new Error("param 'eventName' is null or empty.");

            if (typeof (handler) != "function") {
                throw "param 'handler' must be a function.";
            }
        });

        $Jssor$.$Each(_Listenees, function (listenee, index) {
            if (listenee.$Obj === obj && listenee.$EventName == eventName && listenee.$Handler === handler) {
                $Jssor$.$RemoveEvent(obj, eventName, handler);
                _Listenees.splice(index, 1);
            }
        });
    };

    _ThisObject.$UnlistenAll = ClearListenees;

    // Public Methods
    _ThisObject.$On = _ThisObject.addEventListener = AddListener;

    _ThisObject.$Off = _ThisObject.removeEventListener = RemoveListener;

    _ThisObject.$TriggerEvent = function (eventName) {

        var args = [].slice.call(arguments, 1);

        $Jssor$.$Each(_Listeners, function (listener) {
            listener.$EventName == eventName && listener.$Handler.apply(window, args);
        });
    };

    _ThisObject.$Destroy = function () {
        ClearListenees();
        ClearListeners();

        for (var name in _ThisObject)
            delete _ThisObject[name];
    };

    $JssorDebug$.$C_AbstractClass(_ThisObject);
};

function $JssorAnimator$(delay, duration, options, elmt, fromStyles, difStyles) {
    delay = delay || 0;

    var _ThisAnimator = this;
    var _AutoPlay;
    var _Hiden;
    var _CombineMode;
    var _PlayToPosition;
    var _PlayDirection;
    var _NoStop;
    var _TimeStampLastFrame = 0;

    var _SubEasings;
    var _SubRounds;
    var _SubDurings;
    var _Callback;

    var _Shift = 0;
    var _Position_Current = 0;
    var _Position_Display = 0;
    var _Hooked;

    var _Position_InnerBegin = delay;
    var _Position_InnerEnd = delay + duration;
    var _Position_OuterBegin;
    var _Position_OuterEnd;
    var _LoopLength;

    var _NestedAnimators = [];
    var _StyleSetter;

    function GetPositionRange(position, begin, end) {
        var range = 0;

        if (position < begin)
            range = -1;

        else if (position > end)
            range = 1;

        return range;
    }

    function GetInnerPositionRange(position) {
        return GetPositionRange(position, _Position_InnerBegin, _Position_InnerEnd);
    }

    function GetOuterPositionRange(position) {
        return GetPositionRange(position, _Position_OuterBegin, _Position_OuterEnd);
    }

    function Shift(offset) {
        _Position_OuterBegin += offset;
        _Position_OuterEnd += offset;
        _Position_InnerBegin += offset;
        _Position_InnerEnd += offset;

        _Position_Current += offset;
        _Position_Display += offset;

        _Shift = offset;
    }

    function Locate(position, relative) {
        var offset = position - _Position_OuterBegin + delay * relative;

        Shift(offset);

        //$JssorDebug$.$Execute(function () {
        //    _ThisAnimator.$Position_InnerBegin = _Position_InnerBegin;
        //    _ThisAnimator.$Position_InnerEnd = _Position_InnerEnd;
        //    _ThisAnimator.$Position_OuterBegin = _Position_OuterBegin;
        //    _ThisAnimator.$Position_OuterEnd = _Position_OuterEnd;
        //});

        return _Position_OuterEnd;
    }

    function GoToPosition(positionOuter, force) {
        var trimedPositionOuter = positionOuter;

        if (_LoopLength && (trimedPositionOuter >= _Position_OuterEnd || trimedPositionOuter <= _Position_OuterBegin)) {
            trimedPositionOuter = ((trimedPositionOuter - _Position_OuterBegin) % _LoopLength + _LoopLength) % _LoopLength + _Position_OuterBegin;
        }

        if (!_Hooked || _NoStop || force || _Position_Current != trimedPositionOuter) {

            var positionToDisplay = Math.min(trimedPositionOuter, _Position_OuterEnd);
            positionToDisplay = Math.max(positionToDisplay, _Position_OuterBegin);

            if (!_Hooked || _NoStop || force || positionToDisplay != _Position_Display) {

                if (difStyles) {

                    var interPosition = (positionToDisplay - _Position_InnerBegin) / (duration || 1);

                    if (options.$Reverse)
                        interPosition = 1 - interPosition;

                    var currentStyles = $Jssor$.$Cast(fromStyles, difStyles, interPosition, _SubEasings, _SubDurings, _SubRounds, options);

                    $Jssor$.$Each(currentStyles, function (value, key) {
                        _StyleSetter[key] && _StyleSetter[key](elmt, value);
                    });
                }

                _ThisAnimator.$OnInnerOffsetChange(_Position_Display - _Position_InnerBegin, positionToDisplay - _Position_InnerBegin);

                _Position_Display = positionToDisplay;

                $Jssor$.$Each(_NestedAnimators, function (animator, i) {
                    var nestedAnimator = positionOuter < _Position_Current ? _NestedAnimators[_NestedAnimators.length - i - 1] : animator;
                    nestedAnimator.$GoToPosition(_Position_Display - _Shift, force);
                });

                var positionOld = _Position_Current;
                var positionNew = _Position_Display;

                _Position_Current = trimedPositionOuter;
                _Hooked = true;

                _ThisAnimator.$OnPositionChange(positionOld, positionNew);
            }
        }
    }

    function Join(animator, combineMode, noExpand) {
        ///	<summary>
        ///		Combine another animator as nested animator
        ///	</summary>
        ///	<param name="animator" type="$JssorAnimator$">
        ///		An instance of $JssorAnimator$
        ///	</param>
        ///	<param name="combineMode" type="int">
        ///		0: parallel - place the animator parallel to this animator.
        ///		1: chain - chain the animator at the _Position_InnerEnd of this animator.
        ///	</param>
        $JssorDebug$.$Execute(function () {
            if (combineMode !== 0 && combineMode !== 1)
                $JssorDebug$.$Fail("Argument out of range, the value of 'combineMode' should be either 0 or 1.");
        });

        if (combineMode)
            animator.$Locate(_Position_OuterEnd, 1);

        if (!noExpand) {
            _Position_OuterBegin = Math.min(_Position_OuterBegin, animator.$GetPosition_OuterBegin() + _Shift);
            _Position_OuterEnd = Math.max(_Position_OuterEnd, animator.$GetPosition_OuterEnd() + _Shift);
        }
        _NestedAnimators.push(animator);
    }

    var RequestAnimationFrame = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.msRequestAnimationFrame;

    if ($Jssor$.$IsBrowserSafari() && $Jssor$.$BrowserVersion() < 7) {
        RequestAnimationFrame = null;

        //$JssorDebug$.$Log("Custom animation frame for safari before 7.");
    }

    RequestAnimationFrame = RequestAnimationFrame || function (callback) {
        $Jssor$.$Delay(callback, options.$Interval);
    };

    function ShowFrame() {
        if (_AutoPlay) {
            var now = $Jssor$.$GetNow();
            var timeOffset = Math.min(now - _TimeStampLastFrame, options.$IntervalMax);
            var timePosition = _Position_Current + timeOffset * _PlayDirection;
            _TimeStampLastFrame = now;

            if (timePosition * _PlayDirection >= _PlayToPosition * _PlayDirection)
                timePosition = _PlayToPosition;

            GoToPosition(timePosition);

            if (!_NoStop && timePosition * _PlayDirection >= _PlayToPosition * _PlayDirection) {
                Stop(_Callback);
            }
            else {
                RequestAnimationFrame(ShowFrame);
            }
        }
    }

    function PlayToPosition(toPosition, callback, noStop) {
        if (!_AutoPlay) {
            _AutoPlay = true;
            _NoStop = noStop
            _Callback = callback;
            toPosition = Math.max(toPosition, _Position_OuterBegin);
            toPosition = Math.min(toPosition, _Position_OuterEnd);
            _PlayToPosition = toPosition;
            _PlayDirection = _PlayToPosition < _Position_Current ? -1 : 1;
            _ThisAnimator.$OnStart();
            _TimeStampLastFrame = $Jssor$.$GetNow();
            RequestAnimationFrame(ShowFrame);
        }
    }

    function Stop(callback) {
        if (_AutoPlay) {
            _NoStop = _AutoPlay = _Callback = false;
            _ThisAnimator.$OnStop();

            if (callback)
                callback();
        }
    }

    _ThisAnimator.$Play = function (positionLength, callback, noStop) {
        PlayToPosition(positionLength ? _Position_Current + positionLength : _Position_OuterEnd, callback, noStop);
    };

    _ThisAnimator.$PlayToPosition = PlayToPosition;

    _ThisAnimator.$PlayToBegin = function (callback, noStop) {
        PlayToPosition(_Position_OuterBegin, callback, noStop);
    };

    _ThisAnimator.$PlayToEnd = function (callback, noStop) {
        PlayToPosition(_Position_OuterEnd, callback, noStop);
    };

    _ThisAnimator.$Stop = Stop;

    _ThisAnimator.$Continue = function (toPosition) {
        PlayToPosition(toPosition);
    };

    _ThisAnimator.$GetPosition = function () {
        return _Position_Current;
    };

    _ThisAnimator.$GetPlayToPosition = function () {
        return _PlayToPosition;
    };

    _ThisAnimator.$GetPosition_Display = function () {
        return _Position_Display;
    };

    _ThisAnimator.$GoToPosition = GoToPosition;

    _ThisAnimator.$GoToBegin = function () {
        GoToPosition(_Position_OuterBegin, true);
    };

    _ThisAnimator.$GoToEnd = function () {
        GoToPosition(_Position_OuterEnd, true);
    };

    _ThisAnimator.$Move = function (offset) {
        GoToPosition(_Position_Current + offset);
    };

    _ThisAnimator.$CombineMode = function () {
        return _CombineMode;
    };

    _ThisAnimator.$GetDuration = function () {
        return duration;
    };

    _ThisAnimator.$IsPlaying = function () {
        return _AutoPlay;
    };

    _ThisAnimator.$IsOnTheWay = function () {
        return _Position_Current > _Position_InnerBegin && _Position_Current <= _Position_InnerEnd;
    };

    _ThisAnimator.$SetLoopLength = function (length) {
        _LoopLength = length;
    };

    _ThisAnimator.$Locate = Locate;

    _ThisAnimator.$Shift = Shift;

    _ThisAnimator.$Join = Join;

    _ThisAnimator.$Combine = function (animator) {
        ///	<summary>
        ///		Combine another animator parallel to this animator
        ///	</summary>
        ///	<param name="animator" type="$JssorAnimator$">
        ///		An instance of $JssorAnimator$
        ///	</param>
        Join(animator, 0);
    };

    _ThisAnimator.$Chain = function (animator) {
        ///	<summary>
        ///		Chain another animator at the _Position_InnerEnd of this animator
        ///	</summary>
        ///	<param name="animator" type="$JssorAnimator$">
        ///		An instance of $JssorAnimator$
        ///	</param>
        Join(animator, 1);
    };

    _ThisAnimator.$GetPosition_InnerBegin = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_InnerBegin;
    };

    _ThisAnimator.$GetPosition_InnerEnd = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_InnerEnd;
    };

    _ThisAnimator.$GetPosition_OuterBegin = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_OuterBegin;
    };

    _ThisAnimator.$GetPosition_OuterEnd = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_OuterEnd;
    };

    _ThisAnimator.$OnPositionChange = _ThisAnimator.$OnStart = _ThisAnimator.$OnStop = _ThisAnimator.$OnInnerOffsetChange = $Jssor$.$EmptyFunction;
    _ThisAnimator.$Version = $Jssor$.$GetNow();

    //Constructor  1
    {
        options = $Jssor$.$Extend({
            $Interval: 16,
            $IntervalMax: 50
        }, options);

        //Sodo statement, for development time intellisence only
        $JssorDebug$.$Execute(function () {
            options = $Jssor$.$Extend({
                $LoopLength: undefined,
                $Setter: undefined,
                $Easing: undefined
            }, options);
        });

        _LoopLength = options.$LoopLength;

        _StyleSetter = $Jssor$.$Extend({}, $Jssor$.$StyleSetter(), options.$Setter);

        _Position_OuterBegin = _Position_InnerBegin = delay;
        _Position_OuterEnd = _Position_InnerEnd = delay + duration;

        _SubRounds = options.$Round || {};
        _SubDurings = options.$During || {};
        _SubEasings = $Jssor$.$Extend({ $Default: $Jssor$.$IsFunction(options.$Easing) && options.$Easing || $JssorEasing$.$EaseSwing }, options.$Easing);
    }
};

function $JssorPlayerClass$() {

    var _ThisPlayer = this;
    var _PlayerControllers = [];

    function PlayerController(playerElement) {
        var _SelfPlayerController = this;
        var _PlayerInstance;
        var _PlayerInstantces = [];

        function OnPlayerInstanceDataAvailable(event) {
            var srcElement = $Jssor$.$EvtSrc(event);
            _PlayerInstance = srcElement.pInstance;

            $Jssor$.$RemoveEvent(srcElement, "dataavailable", OnPlayerInstanceDataAvailable);
            $Jssor$.$Each(_PlayerInstantces, function (playerInstance) {
                if (playerInstance != _PlayerInstance) {
                    playerInstance.$Remove();
                }
            });

            playerElement.pTagName = _PlayerInstance.tagName;
            _PlayerInstantces = null;
        }

        function HandlePlayerInstance(playerInstanceElement) {
            var playerHandler;

            if (!playerInstanceElement.pInstance) {
                var playerHandlerAttribute = $Jssor$.$AttributeEx(playerInstanceElement, "pHandler");

                if ($JssorPlayer$[playerHandlerAttribute]) {
                    $Jssor$.$AddEvent(playerInstanceElement, "dataavailable", OnPlayerInstanceDataAvailable);
                    playerHandler = new $JssorPlayer$[playerHandlerAttribute](playerElement, playerInstanceElement);
                    _PlayerInstantces.push(playerHandler);

                    $JssorDebug$.$Execute(function () {
                        if ($Jssor$.$Type(playerHandler.$Remove) != "function") {
                            $JssorDebug$.$Fail("'pRemove' interface not implemented for player handler '" + playerHandlerAttribute + "'.");
                        }
                    });
                }
            }

            return playerHandler;
        }

        _SelfPlayerController.$InitPlayerController = function () {
            if (!playerElement.pInstance && !HandlePlayerInstance(playerElement)) {

                var playerInstanceElements = $Jssor$.$Children(playerElement);

                $Jssor$.$Each(playerInstanceElements, function (playerInstanceElement) {
                    HandlePlayerInstance(playerInstanceElement);
                });
            }
        };
    }

    _ThisPlayer.$EVT_SWITCH = 21;

    _ThisPlayer.$FetchPlayers = function (elmt) {
        elmt = elmt || document.body;

        var playerElements = $Jssor$.$FindChildren(elmt, "player");

        $Jssor$.$Each(playerElements, function (playerElement) {
            if (!_PlayerControllers[playerElement.pId]) {
                playerElement.pId = _PlayerControllers.length;
                _PlayerControllers.push(new PlayerController(playerElement));
            }
            var playerController = _PlayerControllers[playerElement.pId];
            playerController.$InitPlayerController();
        });
    };
}

/// <reference path="Jssor.js" />

/*
* Jssor.Slider 19.0
* http://www.jssor.com/
*
* Licensed under the MIT license:
* http://www.opensource.org/licenses/MIT
* 
* TERMS OF USE - Jssor.Slider
* 
* Copyright 2014 Jssor
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


var $JssorSlideshowFormations$ = window.$JssorSlideshowFormations$ = new function () {
    var _This = this;

    //Constants +++++++

    var COLUMN_INCREASE = 0;
    var COLUMN_DECREASE = 1;
    var ROW_INCREASE = 2;
    var ROW_DECREASE = 3;

    var DIRECTION_HORIZONTAL = 0x0003;
    var DIRECTION_VERTICAL = 0x000C;

    var TO_LEFT = 0x0001;
    var TO_RIGHT = 0x0002;
    var TO_TOP = 0x0004;
    var TO_BOTTOM = 0x0008;

    var FROM_LEFT = 0x0100;
    var FROM_TOP = 0x0200;
    var FROM_RIGHT = 0x0400;
    var FROM_BOTTOM = 0x0800;

    var ASSEMBLY_BOTTOM_LEFT = FROM_BOTTOM + TO_LEFT;
    var ASSEMBLY_BOTTOM_RIGHT = FROM_BOTTOM + TO_RIGHT;
    var ASSEMBLY_TOP_LEFT = FROM_TOP + TO_LEFT;
    var ASSEMBLY_TOP_RIGHT = FROM_TOP + TO_RIGHT;
    var ASSEMBLY_LEFT_TOP = FROM_LEFT + TO_TOP;
    var ASSEMBLY_LEFT_BOTTOM = FROM_LEFT + TO_BOTTOM;
    var ASSEMBLY_RIGHT_TOP = FROM_RIGHT + TO_TOP;
    var ASSEMBLY_RIGHT_BOTTOM = FROM_RIGHT + TO_BOTTOM;

    //Constants -------

    //Formation Definition +++++++
    function isToLeft(roadValue) {
        return (roadValue & TO_LEFT) == TO_LEFT;
    }

    function isToRight(roadValue) {
        return (roadValue & TO_RIGHT) == TO_RIGHT;
    }

    function isToTop(roadValue) {
        return (roadValue & TO_TOP) == TO_TOP;
    }

    function isToBottom(roadValue) {
        return (roadValue & TO_BOTTOM) == TO_BOTTOM;
    }

    function PushFormationOrder(arr, order, formationItem) {
        formationItem.push(order);
        arr[order] = arr[order] || [];
        arr[order].push(formationItem);
    }

    _This.$FormationStraight = function (transition) {
        var cols = transition.$Cols;
        var rows = transition.$Rows;
        var formationDirection = transition.$Assembly;
        var count = transition.$Count;
        var a = [];
        var i = 0;
        var col = 0;
        var r = 0;
        var cl = cols - 1;
        var rl = rows - 1;
        var il = count - 1;
        var cr;
        var order;
        for (r = 0; r < rows; r++) {
            for (col = 0; col < cols; col++) {
                cr = r + ',' + col;
                switch (formationDirection) {
                    case ASSEMBLY_BOTTOM_LEFT:
                        order = il - (col * rows + (rl - r));
                        break;
                    case ASSEMBLY_RIGHT_TOP:
                        order = il - (r * cols + (cl - col));
                        break;
                    case ASSEMBLY_TOP_LEFT:
                        order = il - (col * rows + r);
                    case ASSEMBLY_LEFT_TOP:
                        order = il - (r * cols + col);
                        break;
                    case ASSEMBLY_BOTTOM_RIGHT:
                        order = col * rows + r;
                        break;
                    case ASSEMBLY_LEFT_BOTTOM:
                        order = r * cols + (cl - col);
                        break;
                    case ASSEMBLY_TOP_RIGHT:
                        order = col * rows + (rl - r);
                        break;
                    default:
                        order = r * cols + col;
                        break; //ASSEMBLY_RIGHT_BOTTOM
                }
                PushFormationOrder(a, order, [r, col]);
            }
        }

        return a;
    };

    _This.$FormationSwirl = function (transition) {
        var cols = transition.$Cols;
        var rows = transition.$Rows;
        var formationDirection = transition.$Assembly;
        var count = transition.$Count;
        var a = [];
        var hit = [];
        var i = 0;
        var col = 0;
        var r = 0;
        var cl = cols - 1;
        var rl = rows - 1;
        var il = count - 1;
        var cr;
        var courses;
        var course = 0;
        switch (formationDirection) {
            case ASSEMBLY_BOTTOM_LEFT:
                col = cl;
                r = 0;
                courses = [ROW_INCREASE, COLUMN_DECREASE, ROW_DECREASE, COLUMN_INCREASE];
                break;
            case ASSEMBLY_RIGHT_TOP:
                col = 0;
                r = rl;
                courses = [COLUMN_INCREASE, ROW_DECREASE, COLUMN_DECREASE, ROW_INCREASE];
                break;
            case ASSEMBLY_TOP_LEFT:
                col = cl;
                r = rl;
                courses = [ROW_DECREASE, COLUMN_DECREASE, ROW_INCREASE, COLUMN_INCREASE];
                break;
            case ASSEMBLY_LEFT_TOP:
                col = cl;
                r = rl;
                courses = [COLUMN_DECREASE, ROW_DECREASE, COLUMN_INCREASE, ROW_INCREASE];
                break;
            case ASSEMBLY_BOTTOM_RIGHT:
                col = 0;
                r = 0;
                courses = [ROW_INCREASE, COLUMN_INCREASE, ROW_DECREASE, COLUMN_DECREASE];
                break;
            case ASSEMBLY_LEFT_BOTTOM:
                col = cl;
                r = 0;
                courses = [COLUMN_DECREASE, ROW_INCREASE, COLUMN_INCREASE, ROW_DECREASE];
                break;
            case ASSEMBLY_TOP_RIGHT:
                col = 0;
                r = rl;
                courses = [ROW_DECREASE, COLUMN_INCREASE, ROW_INCREASE, COLUMN_DECREASE];
                break;
            default:
                col = 0;
                r = 0;
                courses = [COLUMN_INCREASE, ROW_INCREASE, COLUMN_DECREASE, ROW_DECREASE];
                break; //ASSEMBLY_RIGHT_BOTTOM
        }
        i = 0;
        while (i < count) {
            cr = r + ',' + col;
            if (col >= 0 && col < cols && r >= 0 && r < rows && !hit[cr]) {
                //a[cr] = i++;
                hit[cr] = true;
                PushFormationOrder(a, i++, [r, col]);
            }
            else {
                switch (courses[course++ % courses.length]) {
                    case COLUMN_INCREASE:
                        col--;
                        break;
                    case ROW_INCREASE:
                        r--;
                        break;
                    case COLUMN_DECREASE:
                        col++;
                        break;
                    case ROW_DECREASE:
                        r++;
                        break;
                }
            }

            switch (courses[course % courses.length]) {
                case COLUMN_INCREASE:
                    col++;
                    break;
                case ROW_INCREASE:
                    r++;
                    break;
                case COLUMN_DECREASE:
                    col--;
                    break;
                case ROW_DECREASE:
                    r--;
                    break;
            }
        }
        return a;
    };

    _This.$FormationZigZag = function (transition) {
        var cols = transition.$Cols;
        var rows = transition.$Rows;
        var formationDirection = transition.$Assembly;
        var count = transition.$Count;
        var a = [];
        var i = 0;
        var col = 0;
        var r = 0;
        var cl = cols - 1;
        var rl = rows - 1;
        var il = count - 1;
        var cr;
        var courses;
        var course = 0;
        switch (formationDirection) {
            case ASSEMBLY_BOTTOM_LEFT:
                col = cl;
                r = 0;
                courses = [ROW_INCREASE, COLUMN_DECREASE, ROW_DECREASE, COLUMN_DECREASE];
                break;
            case ASSEMBLY_RIGHT_TOP:
                col = 0;
                r = rl;
                courses = [COLUMN_INCREASE, ROW_DECREASE, COLUMN_DECREASE, ROW_DECREASE];
                break;
            case ASSEMBLY_TOP_LEFT:
                col = cl;
                r = rl;
                courses = [ROW_DECREASE, COLUMN_DECREASE, ROW_INCREASE, COLUMN_DECREASE];
                break;
            case ASSEMBLY_LEFT_TOP:
                col = cl;
                r = rl;
                courses = [COLUMN_DECREASE, ROW_DECREASE, COLUMN_INCREASE, ROW_DECREASE];
                break;
            case ASSEMBLY_BOTTOM_RIGHT:
                col = 0;
                r = 0;
                courses = [ROW_INCREASE, COLUMN_INCREASE, ROW_DECREASE, COLUMN_INCREASE];
                break;
            case ASSEMBLY_LEFT_BOTTOM:
                col = cl;
                r = 0;
                courses = [COLUMN_DECREASE, ROW_INCREASE, COLUMN_INCREASE, ROW_INCREASE];
                break;
            case ASSEMBLY_TOP_RIGHT:
                col = 0;
                r = rl;
                courses = [ROW_DECREASE, COLUMN_INCREASE, ROW_INCREASE, COLUMN_INCREASE];
                break;
            default:
                col = 0;
                r = 0;
                courses = [COLUMN_INCREASE, ROW_INCREASE, COLUMN_DECREASE, ROW_INCREASE];
                break; //ASSEMBLY_RIGHT_BOTTOM
        }
        i = 0;
        while (i < count) {
            cr = r + ',' + col;
            if (col >= 0 && col < cols && r >= 0 && r < rows && typeof (a[cr]) == 'undefined') {
                PushFormationOrder(a, i++, [r, col]);
                //a[cr] = i++;
                switch (courses[course % courses.length]) {
                    case COLUMN_INCREASE:
                        col++;
                        break;
                    case ROW_INCREASE:
                        r++;
                        break;
                    case COLUMN_DECREASE:
                        col--;
                        break;
                    case ROW_DECREASE:
                        r--;
                        break;
                }
            }
            else {
                switch (courses[course++ % courses.length]) {
                    case COLUMN_INCREASE:
                        col--;
                        break;
                    case ROW_INCREASE:
                        r--;
                        break;
                    case COLUMN_DECREASE:
                        col++;
                        break;
                    case ROW_DECREASE:
                        r++;
                        break;
                }
                switch (courses[course++ % courses.length]) {
                    case COLUMN_INCREASE:
                        col++;
                        break;
                    case ROW_INCREASE:
                        r++;
                        break;
                    case COLUMN_DECREASE:
                        col--;
                        break;
                    case ROW_DECREASE:
                        r--;
                        break;
                }
            }
        }
        return a;
    };

    _This.$FormationStraightStairs = function (transition) {
        var cols = transition.$Cols;
        var rows = transition.$Rows;
        var formationDirection = transition.$Assembly;
        var count = transition.$Count;
        var a = [];
        var i = 0;
        var col = 0;
        var r = 0;
        var cl = cols - 1;
        var rl = rows - 1;
        var il = count - 1;
        var cr;
        switch (formationDirection) {
            case ASSEMBLY_BOTTOM_LEFT:
            case ASSEMBLY_TOP_RIGHT:
            case ASSEMBLY_TOP_LEFT:
            case ASSEMBLY_BOTTOM_RIGHT:
                var C = 0;
                var R = 0;
                break;
            case ASSEMBLY_LEFT_BOTTOM:
            case ASSEMBLY_RIGHT_TOP:
            case ASSEMBLY_LEFT_TOP:
            case ASSEMBLY_RIGHT_BOTTOM:
                var C = cl;
                var R = 0;
                break;
            default:
                formationDirection = ASSEMBLY_RIGHT_BOTTOM;
                var C = cl;
                var R = 0;
                break;
        }
        col = C;
        r = R;
        while (i < count) {
            cr = r + ',' + col;
            if (isToTop(formationDirection) || isToRight(formationDirection)) {
                PushFormationOrder(a, il - i++, [r, col]);
                //a[cr] = il - i++;
            }
            else {
                PushFormationOrder(a, i++, [r, col]);
                //a[cr] = i++;
            }
            switch (formationDirection) {
                case ASSEMBLY_BOTTOM_LEFT:
                case ASSEMBLY_TOP_RIGHT:
                    col--;
                    r++;
                    break;
                case ASSEMBLY_TOP_LEFT:
                case ASSEMBLY_BOTTOM_RIGHT:
                    col++;
                    r--;
                    break;
                case ASSEMBLY_LEFT_BOTTOM:
                case ASSEMBLY_RIGHT_TOP:
                    col--;
                    r--;
                    break;
                case ASSEMBLY_RIGHT_BOTTOM:
                case ASSEMBLY_LEFT_TOP:
                default:
                    col++;
                    r++;
                    break;
            }
            if (col < 0 || r < 0 || col > cl || r > rl) {
                switch (formationDirection) {
                    case ASSEMBLY_BOTTOM_LEFT:
                    case ASSEMBLY_TOP_RIGHT:
                        C++;
                        break;
                    case ASSEMBLY_LEFT_BOTTOM:
                    case ASSEMBLY_RIGHT_TOP:
                    case ASSEMBLY_TOP_LEFT:
                    case ASSEMBLY_BOTTOM_RIGHT:
                        R++;
                        break;
                    case ASSEMBLY_RIGHT_BOTTOM:
                    case ASSEMBLY_LEFT_TOP:
                    default:
                        C--;
                        break;
                }
                if (C < 0 || R < 0 || C > cl || R > rl) {
                    switch (formationDirection) {
                        case ASSEMBLY_BOTTOM_LEFT:
                        case ASSEMBLY_TOP_RIGHT:
                            C = cl;
                            R++;
                            break;
                        case ASSEMBLY_TOP_LEFT:
                        case ASSEMBLY_BOTTOM_RIGHT:
                            R = rl;
                            C++;
                            break;
                        case ASSEMBLY_LEFT_BOTTOM:
                        case ASSEMBLY_RIGHT_TOP: R = rl; C--;
                            break;
                        case ASSEMBLY_RIGHT_BOTTOM:
                        case ASSEMBLY_LEFT_TOP:
                        default:
                            C = 0;
                            R++;
                            break;
                    }
                    if (R > rl)
                        R = rl;
                    else if (R < 0)
                        R = 0;
                    else if (C > cl)
                        C = cl;
                    else if (C < 0)
                        C = 0;
                }
                r = R;
                col = C;
            }
        }
        return a;
    };

    _This.$FormationSquare = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var dc;
        var dr;
        var cr;
        dc = cols < rows ? (rows - cols) / 2 : 0;
        dr = cols > rows ? (cols - rows) / 2 : 0;
        cr = Math.round(Math.max(cols / 2, rows / 2)) + 1;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, cr - Math.min(col + 1 + dc, r + 1 + dr, cols - col + dc, rows - r + dr), [r, col]);
        }
        return arr;
    };

    _This.$FormationRectangle = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var cr;
        cr = Math.round(Math.min(cols / 2, rows / 2)) + 1;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, cr - Math.min(col + 1, r + 1, cols - col, rows - r), [r, col]);
        }
        return arr;
    };

    _This.$FormationRandom = function (transition) {
        var a = [];
        var r, col, i;
        for (r = 0; r < transition.$Rows; r++) {
            for (col = 0; col < transition.$Cols; col++)
                PushFormationOrder(a, Math.ceil(100000 * Math.random()) % 13, [r, col]);
        }

        return a;
    };

    _This.$FormationCircle = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var hc = cols / 2 - 0.5;
        var hr = rows / 2 - 0.5;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, Math.round(Math.sqrt(Math.pow(col - hc, 2) + Math.pow(r - hr, 2))), [r, col]);
        }
        return arr;
    };

    _This.$FormationCross = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var hc = cols / 2 - 0.5;
        var hr = rows / 2 - 0.5;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, Math.round(Math.min(Math.abs(col - hc), Math.abs(r - hr))), [r, col]);
        }
        return arr;
    };

    _This.$FormationRectangleCross = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var hc = cols / 2 - 0.5;
        var hr = rows / 2 - 0.5;
        var cr = Math.max(hc, hr) + 1;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, Math.round(cr - Math.max(hc - Math.abs(col - hc), hr - Math.abs(r - hr))) - 1, [r, col]);
        }
        return arr;
    };
};

var $JssorSlideshowRunner$ = window.$JssorSlideshowRunner$ = function (slideContainer, slideContainerWidth, slideContainerHeight, slideshowOptions, isTouchDevice) {

    var _SelfSlideshowRunner = this;

    //var _State = 0; //-1 fullfill, 0 clean, 1 initializing, 2 stay, 3 playing
    var _EndTime;

    var _SliderFrameCount;

    var _SlideshowPlayerBelow;
    var _SlideshowPlayerAbove;

    var _PrevItem;
    var _SlideItem;

    var _TransitionIndex = 0;
    var _TransitionsOrder = slideshowOptions.$TransitionsOrder;

    var _SlideshowTransition;

    var _SlideshowPerformance = 8;

    //#region Private Methods
    function EnsureTransitionInstance(options, slideshowInterval) {

        var slideshowTransition = {
            $Interval: slideshowInterval,  //Delay to play next frame
            $Duration: 1, //Duration to finish the entire transition
            $Delay: 0,  //Delay to assembly blocks
            $Cols: 1,   //Number of columns
            $Rows: 1,   //Number of rows
            $Opacity: 0,   //Fade block or not
            $Zoom: 0,   //Zoom block or not
            $Clip: 0,   //Clip block or not
            $Move: false,   //Move block or not
            $SlideOut: false,   //Slide the previous slide out to display next slide instead
            //$FlyDirection: 0,   //Specify fly transform with direction
            $Reverse: false,    //Reverse the assembly or not
            $Formation: $JssorSlideshowFormations$.$FormationRandom,    //Shape that assembly blocks as
            $Assembly: 0x0408,   //The way to assembly blocks ASSEMBLY_RIGHT_BOTTOM
            $ChessMode: { $Column: 0, $Row: 0 },    //Chess move or fly direction
            $Easing: $JssorEasing$.$EaseSwing,  //Specify variation of speed during transition
            $Round: {},
            $Blocks: [],
            $During: {}
        };

        $Jssor$.$Extend(slideshowTransition, options);

        slideshowTransition.$Count = slideshowTransition.$Cols * slideshowTransition.$Rows;
        if ($Jssor$.$IsFunction(slideshowTransition.$Easing))
            slideshowTransition.$Easing = { $Default: slideshowTransition.$Easing };

        slideshowTransition.$FramesCount = Math.ceil(slideshowTransition.$Duration / slideshowTransition.$Interval);

        slideshowTransition.$GetBlocks = function (width, height) {
            width /= slideshowTransition.$Cols;
            height /= slideshowTransition.$Rows;
            var wh = width + 'x' + height;
            if (!slideshowTransition.$Blocks[wh]) {
                slideshowTransition.$Blocks[wh] = { $Width: width, $Height: height };
                for (var col = 0; col < slideshowTransition.$Cols; col++) {
                    for (var r = 0; r < slideshowTransition.$Rows; r++)
                        slideshowTransition.$Blocks[wh][r + ',' + col] = { $Top: r * height, $Right: col * width + width, $Bottom: r * height + height, $Left: col * width };
                }
            }

            return slideshowTransition.$Blocks[wh];
        };

        if (slideshowTransition.$Brother) {
            slideshowTransition.$Brother = EnsureTransitionInstance(slideshowTransition.$Brother, slideshowInterval);
            slideshowTransition.$SlideOut = true;
        }

        return slideshowTransition;
    }
    //#endregion

    //#region Private Classes
    function JssorSlideshowPlayer(slideContainer, slideElement, slideTransition, beginTime, slideContainerWidth, slideContainerHeight) {
        var _Self = this;

        var _Block;
        var _StartStylesArr = {};
        var _AnimationStylesArrs = {};
        var _AnimationBlockItems = [];
        var _StyleStart;
        var _StyleEnd;
        var _StyleDif;
        var _ChessModeColumn = slideTransition.$ChessMode.$Column || 0;
        var _ChessModeRow = slideTransition.$ChessMode.$Row || 0;

        var _Blocks = slideTransition.$GetBlocks(slideContainerWidth, slideContainerHeight);
        var _FormationInstance = GetFormation(slideTransition);
        var _MaxOrder = _FormationInstance.length - 1;
        var _Period = slideTransition.$Duration + slideTransition.$Delay * _MaxOrder;
        var _EndTime = beginTime + _Period;

        var _SlideOut = slideTransition.$SlideOut;
        var _IsIn;

        //_EndTime += $Jssor$.$IsBrowserChrome() ? 260 : 50;
        _EndTime += 50;

        //#region Private Methods

        function GetFormation(transition) {

            var formationInstance = transition.$Formation(transition);

            return transition.$Reverse ? formationInstance.reverse() : formationInstance;

        }
        //#endregion

        _Self.$EndTime = _EndTime;

        _Self.$ShowFrame = function (time) {
            time -= beginTime;

            var isIn = time < _Period;

            if (isIn || _IsIn) {
                _IsIn = isIn;

                if (!_SlideOut)
                    time = _Period - time;

                var frameIndex = Math.ceil(time / slideTransition.$Interval);

                $Jssor$.$Each(_AnimationStylesArrs, function (value, index) {

                    var itemFrameIndex = Math.max(frameIndex, value.$Min);
                    itemFrameIndex = Math.min(itemFrameIndex, value.length - 1);

                    if (value.$LastFrameIndex != itemFrameIndex) {
                        if (!value.$LastFrameIndex && !_SlideOut) {
                            $Jssor$.$ShowElement(_AnimationBlockItems[index]);
                        }
                        else if (itemFrameIndex == value.$Max && _SlideOut) {
                            $Jssor$.$HideElement(_AnimationBlockItems[index]);
                        }
                        value.$LastFrameIndex = itemFrameIndex;
                        $Jssor$.$SetStylesEx(_AnimationBlockItems[index], value[itemFrameIndex]);
                    }
                });
            }
        };

        //constructor
        {
            slideElement = $Jssor$.$CloneNode(slideElement);
            //$Jssor$.$RemoveAttribute(slideElement, "id");
            if ($Jssor$.$IsBrowserIe9Earlier()) {
                var hasImage = !slideElement["no-image"];
                var slideChildElements = $Jssor$.$FindChildrenByTag(slideElement);
                $Jssor$.$Each(slideChildElements, function (slideChildElement) {
                    if (hasImage || slideChildElement["jssor-slider"])
                        $Jssor$.$CssOpacity(slideChildElement, $Jssor$.$CssOpacity(slideChildElement), true);
                });
            }

            $Jssor$.$Each(_FormationInstance, function (formationItems, order) {
                $Jssor$.$Each(formationItems, function (formationItem) {
                    var row = formationItem[0];
                    var col = formationItem[1];
                    {
                        var columnRow = row + ',' + col;

                        var chessHorizontal = false;
                        var chessVertical = false;
                        var chessRotate = false;

                        if (_ChessModeColumn && col % 2) {
                            if (_ChessModeColumn & 3/*$JssorDirection$.$IsHorizontal(_ChessModeColumn)*/) {
                                chessHorizontal = !chessHorizontal;
                            }
                            if (_ChessModeColumn & 12/*$JssorDirection$.$IsVertical(_ChessModeColumn)*/) {
                                chessVertical = !chessVertical;
                            }

                            if (_ChessModeColumn & 16)
                                chessRotate = !chessRotate;
                        }

                        if (_ChessModeRow && row % 2) {
                            if (_ChessModeRow & 3/*$JssorDirection$.$IsHorizontal(_ChessModeRow)*/) {
                                chessHorizontal = !chessHorizontal;
                            }
                            if (_ChessModeRow & 12/*$JssorDirection$.$IsVertical(_ChessModeRow)*/) {
                                chessVertical = !chessVertical;
                            }
                            if (_ChessModeRow & 16)
                                chessRotate = !chessRotate;
                        }

                        slideTransition.$Top = slideTransition.$Top || (slideTransition.$Clip & 4);
                        slideTransition.$Bottom = slideTransition.$Bottom || (slideTransition.$Clip & 8);
                        slideTransition.$Left = slideTransition.$Left || (slideTransition.$Clip & 1);
                        slideTransition.$Right = slideTransition.$Right || (slideTransition.$Clip & 2);

                        var topBenchmark = chessVertical ? slideTransition.$Bottom : slideTransition.$Top;
                        var bottomBenchmark = chessVertical ? slideTransition.$Top : slideTransition.$Bottom;
                        var leftBenchmark = chessHorizontal ? slideTransition.$Right : slideTransition.$Left;
                        var rightBenchmark = chessHorizontal ? slideTransition.$Left : slideTransition.$Right;

                        slideTransition.$Clip = topBenchmark || bottomBenchmark || leftBenchmark || rightBenchmark;

                        _StyleDif = {};
                        _StyleEnd = { $Top: 0, $Left: 0, $Opacity: 1, $Width: slideContainerWidth, $Height: slideContainerHeight };
                        _StyleStart = $Jssor$.$Extend({}, _StyleEnd);
                        _Block = $Jssor$.$Extend({}, _Blocks[columnRow]);

                        if (slideTransition.$Opacity) {
                            _StyleEnd.$Opacity = 2 - slideTransition.$Opacity;
                        }

                        if (slideTransition.$ZIndex) {
                            _StyleEnd.$ZIndex = slideTransition.$ZIndex;
                            _StyleStart.$ZIndex = 0;
                        }

                        var allowClip = slideTransition.$Cols * slideTransition.$Rows > 1 || slideTransition.$Clip;

                        if (slideTransition.$Zoom || slideTransition.$Rotate) {
                            var allowRotate = true;
                            if ($Jssor$.$IsBrowserIe9Earlier()) {
                                if (slideTransition.$Cols * slideTransition.$Rows > 1)
                                    allowRotate = false;
                                else
                                    allowClip = false;
                            }

                            if (allowRotate) {
                                _StyleEnd.$Zoom = slideTransition.$Zoom ? slideTransition.$Zoom - 1 : 1;
                                _StyleStart.$Zoom = 1;

                                if ($Jssor$.$IsBrowserIe9Earlier() || $Jssor$.$IsBrowserOpera())
                                    _StyleEnd.$Zoom = Math.min(_StyleEnd.$Zoom, 2);

                                var rotate = slideTransition.$Rotate;

                                _StyleEnd.$Rotate = rotate * 360 * ((chessRotate) ? -1 : 1);
                                _StyleStart.$Rotate = 0;
                            }
                        }

                        if (allowClip) {
                            if (slideTransition.$Clip) {
                                var clipScale = slideTransition.$ScaleClip || 1;
                                var blockOffset = _Block.$Offset = {};
                                if (topBenchmark && bottomBenchmark) {
                                    blockOffset.$Top = _Blocks.$Height / 2 * clipScale;
                                    blockOffset.$Bottom = -blockOffset.$Top;
                                }
                                else if (topBenchmark) {
                                    blockOffset.$Bottom = -_Blocks.$Height * clipScale;
                                }
                                else if (bottomBenchmark) {
                                    blockOffset.$Top = _Blocks.$Height * clipScale;
                                }

                                if (leftBenchmark && rightBenchmark) {
                                    blockOffset.$Left = _Blocks.$Width / 2 * clipScale;
                                    blockOffset.$Right = -blockOffset.$Left;
                                }
                                else if (leftBenchmark) {
                                    blockOffset.$Right = -_Blocks.$Width * clipScale;
                                }
                                else if (rightBenchmark) {
                                    blockOffset.$Left = _Blocks.$Width * clipScale;
                                }
                            }

                            _StyleDif.$Clip = _Block;
                            _StyleStart.$Clip = _Blocks[columnRow];
                        }

                        //fly
                        {
                            var chessHor = chessHorizontal ? 1 : -1;
                            var chessVer = chessVertical ? 1 : -1;

                            if (slideTransition.x)
                                _StyleEnd.$Left += slideContainerWidth * slideTransition.x * chessHor;

                            if (slideTransition.y)
                                _StyleEnd.$Top += slideContainerHeight * slideTransition.y * chessVer;
                        }

                        $Jssor$.$Each(_StyleEnd, function (propertyEnd, property) {
                            if ($Jssor$.$IsNumeric(propertyEnd)) {
                                if (propertyEnd != _StyleStart[property]) {
                                    _StyleDif[property] = propertyEnd - _StyleStart[property];
                                }
                            }
                        });

                        _StartStylesArr[columnRow] = _SlideOut ? _StyleStart : _StyleEnd;

                        var animationStylesArr = [];
                        var framesCount = slideTransition.$FramesCount;
                        var virtualFrameCount = Math.round(order * slideTransition.$Delay / slideTransition.$Interval);
                        _AnimationStylesArrs[columnRow] = new Array(virtualFrameCount);
                        _AnimationStylesArrs[columnRow].$Min = virtualFrameCount;
                        _AnimationStylesArrs[columnRow].$Max = virtualFrameCount + framesCount - 1;

                        for (var frameN = 0; frameN <= framesCount; frameN++) {
                            var styleFrameN = $Jssor$.$Cast(_StyleStart, _StyleDif, frameN / framesCount, slideTransition.$Easing, slideTransition.$During, slideTransition.$Round, { $Move: slideTransition.$Move, $OriginalWidth: slideContainerWidth, $OriginalHeight: slideContainerHeight })

                            styleFrameN.$ZIndex = styleFrameN.$ZIndex || 1;

                            _AnimationStylesArrs[columnRow].push(styleFrameN);
                        }

                    } //for
                });
            });

            _FormationInstance.reverse();
            $Jssor$.$Each(_FormationInstance, function (formationItems) {
                $Jssor$.$Each(formationItems, function (formationItem) {
                    var row = formationItem[0];
                    var col = formationItem[1];

                    var columnRow = row + ',' + col;

                    var image = slideElement;
                    if (col || row)
                        image = $Jssor$.$CloneNode(slideElement);

                    $Jssor$.$SetStyles(image, _StartStylesArr[columnRow]);
                    $Jssor$.$CssOverflow(image, "hidden");

                    $Jssor$.$CssPosition(image, "absolute");
                    slideContainer.$AddClipElement(image);
                    _AnimationBlockItems[columnRow] = image;
                    $Jssor$.$ShowElement(image, !_SlideOut);
                });
            });
        }
    }

    function SlideshowProcessor() {
        var _SelfSlideshowProcessor = this;
        var _CurrentTime = 0;

        $JssorAnimator$.call(_SelfSlideshowProcessor, 0, _EndTime);

        _SelfSlideshowProcessor.$OnPositionChange = function (oldPosition, newPosition) {
            if ((newPosition - _CurrentTime) > _SlideshowPerformance) {
                _CurrentTime = newPosition;

                _SlideshowPlayerAbove && _SlideshowPlayerAbove.$ShowFrame(newPosition);
                _SlideshowPlayerBelow && _SlideshowPlayerBelow.$ShowFrame(newPosition);
            }
        };

        _SelfSlideshowProcessor.$Transition = _SlideshowTransition;
    }
    //#endregion

    //member functions
    _SelfSlideshowRunner.$GetTransition = function (slideCount) {
        var n = 0;

        var transitions = slideshowOptions.$Transitions;

        var transitionCount = transitions.length;

        if (_TransitionsOrder) { /*Sequence*/
            //if (transitionCount > slideCount && ($Jssor$.$IsBrowserChrome() || $Jssor$.$IsBrowserSafari() || $Jssor$.$IsBrowserFireFox())) {
            //    transitionCount -= transitionCount % slideCount;
            //}
            n = _TransitionIndex++ % transitionCount;
        }
        else { /*Random*/
            n = Math.floor(Math.random() * transitionCount);
        }

        transitions[n] && (transitions[n].$Index = n);

        return transitions[n];
    };

    _SelfSlideshowRunner.$Initialize = function (slideIndex, prevIndex, slideItem, prevItem, slideshowTransition) {
        $JssorDebug$.$Execute(function () {
            if (_SlideshowPlayerBelow) {
                $JssorDebug$.$Fail("slideshow runner has not been cleared.");
            }
        });

        _SlideshowTransition = slideshowTransition;

        slideshowTransition = EnsureTransitionInstance(slideshowTransition, _SlideshowPerformance);

        _SlideItem = slideItem;
        _PrevItem = prevItem;

        var prevSlideElement = prevItem.$Item;
        var currentSlideElement = slideItem.$Item;
        prevSlideElement["no-image"] = !prevItem.$Image;
        currentSlideElement["no-image"] = !slideItem.$Image;

        var slideElementAbove = prevSlideElement;
        var slideElementBelow = currentSlideElement;

        var slideTransitionAbove = slideshowTransition;
        var slideTransitionBelow = slideshowTransition.$Brother || EnsureTransitionInstance({}, _SlideshowPerformance);

        if (!slideshowTransition.$SlideOut) {
            slideElementAbove = currentSlideElement;
            slideElementBelow = prevSlideElement;
        }

        var shift = slideTransitionBelow.$Shift || 0;

        _SlideshowPlayerBelow = new JssorSlideshowPlayer(slideContainer, slideElementBelow, slideTransitionBelow, Math.max(shift - slideTransitionBelow.$Interval, 0), slideContainerWidth, slideContainerHeight);
        _SlideshowPlayerAbove = new JssorSlideshowPlayer(slideContainer, slideElementAbove, slideTransitionAbove, Math.max(slideTransitionBelow.$Interval - shift, 0), slideContainerWidth, slideContainerHeight);

        _SlideshowPlayerBelow.$ShowFrame(0);
        _SlideshowPlayerAbove.$ShowFrame(0);

        _EndTime = Math.max(_SlideshowPlayerBelow.$EndTime, _SlideshowPlayerAbove.$EndTime);

        _SelfSlideshowRunner.$Index = slideIndex;
    };

    _SelfSlideshowRunner.$Clear = function () {
        slideContainer.$Clear();
        _SlideshowPlayerBelow = null;
        _SlideshowPlayerAbove = null;
    };

    _SelfSlideshowRunner.$GetProcessor = function () {
        var slideshowProcessor = null;

        if (_SlideshowPlayerAbove)
            slideshowProcessor = new SlideshowProcessor();

        return slideshowProcessor;
    };

    //Constructor
    {
        if ($Jssor$.$IsBrowserIe9Earlier() || $Jssor$.$IsBrowserOpera() || (isTouchDevice && $Jssor$.$WebKitVersion() < 537)) {
            _SlideshowPerformance = 16;
        }

        $JssorObject$.call(_SelfSlideshowRunner);
        $JssorAnimator$.call(_SelfSlideshowRunner, -10000000, 10000000);
    }
};

var $JssorSlider$ = window.$JssorSlider$ = function (elmt, options) {
    var _SelfSlider = this;

    //#region Private Classes
    //Conveyor
    function Conveyor() {
        var _SelfConveyor = this;
        $JssorAnimator$.call(_SelfConveyor, -100000000, 200000000);

        _SelfConveyor.$GetCurrentSlideInfo = function () {
            var positionDisplay = _SelfConveyor.$GetPosition_Display();
            var virtualIndex = Math.floor(positionDisplay);
            var slideIndex = GetRealIndex(virtualIndex);
            var slidePosition = positionDisplay - Math.floor(positionDisplay);

            return { $Index: slideIndex, $VirtualIndex: virtualIndex, $Position: slidePosition };
        };

        _SelfConveyor.$OnPositionChange = function (oldPosition, newPosition) {

            var index = Math.floor(newPosition);
            if (index != newPosition && newPosition > oldPosition)
                index++;

            ResetNavigator(index, true);

            _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_POSITION_CHANGE, GetRealIndex(newPosition), GetRealIndex(oldPosition), newPosition, oldPosition);
        };
    }
    //Conveyor

    //Carousel
    function Carousel() {
        var _SelfCarousel = this;

        $JssorAnimator$.call(_SelfCarousel, 0, 0, { $LoopLength: _SlideCount });

        //Carousel Constructor
        {
            $Jssor$.$Each(_SlideItems, function (slideItem) {
                (_Loop & 1) && slideItem.$SetLoopLength(_SlideCount);
                _SelfCarousel.$Chain(slideItem);
                slideItem.$Shift(_ParkingPosition / _StepLength);
            });
        }
    }
    //Carousel

    //Slideshow
    function Slideshow() {
        var _SelfSlideshow = this;
        var _Wrapper = _SlideContainer.$Elmt;

        $JssorAnimator$.call(_SelfSlideshow, -1, 2, { $Easing: $JssorEasing$.$EaseLinear, $Setter: { $Position: SetPosition }, $LoopLength: _SlideCount }, _Wrapper, { $Position: 1 }, { $Position: -2 });

        _SelfSlideshow.$Wrapper = _Wrapper;

        //Slideshow Constructor
        {
            $JssorDebug$.$Execute(function () {
                $Jssor$.$Attribute(_SlideContainer.$Elmt, "debug-id", "slide_container");
            });
        }
    }
    //Slideshow

    //CarouselPlayer
    function CarouselPlayer(carousel, slideshow) {
        var _SelfCarouselPlayer = this;
        var _FromPosition;
        var _ToPosition;
        var _Duration;
        var _StandBy;
        var _StandByPosition;

        $JssorAnimator$.call(_SelfCarouselPlayer, -100000000, 200000000, { $IntervalMax: 100 });

        _SelfCarouselPlayer.$OnStart = function () {
            _IsSliding = true;
            _LoadingTicket = null;

            //EVT_SWIPE_START
            _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_SWIPE_START, GetRealIndex(_Conveyor.$GetPosition()), _Conveyor.$GetPosition());
        };

        _SelfCarouselPlayer.$OnStop = function () {

            _IsSliding = false;
            _StandBy = false;

            var currentSlideInfo = _Conveyor.$GetCurrentSlideInfo();

            //EVT_SWIPE_END
            _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_SWIPE_END, GetRealIndex(_Conveyor.$GetPosition()), _Conveyor.$GetPosition());

            if (!currentSlideInfo.$Position) {
                OnPark(currentSlideInfo.$VirtualIndex, _CurrentSlideIndex);
            }
        };

        _SelfCarouselPlayer.$OnPositionChange = function (oldPosition, newPosition) {

            var toPosition;

            if (_StandBy)
                toPosition = _StandByPosition;
            else {
                toPosition = _ToPosition;

                if (_Duration) {
                    var interPosition = newPosition / _Duration;
                    toPosition = _Options.$SlideEasing(interPosition) * (_ToPosition - _FromPosition) + _FromPosition;
                }
            }

            _Conveyor.$GoToPosition(toPosition);
        };

        _SelfCarouselPlayer.$PlayCarousel = function (fromPosition, toPosition, duration, callback) {
            $JssorDebug$.$Execute(function () {
                if (_SelfCarouselPlayer.$IsPlaying())
                    $JssorDebug$.$Fail("The carousel is already playing.");
            });

            _FromPosition = fromPosition;
            _ToPosition = toPosition;
            _Duration = duration;

            _Conveyor.$GoToPosition(fromPosition);
            _SelfCarouselPlayer.$GoToPosition(0);

            _SelfCarouselPlayer.$PlayToPosition(duration, callback);
        };

        _SelfCarouselPlayer.$StandBy = function (standByPosition) {
            _StandBy = true;
            _StandByPosition = standByPosition;
            _SelfCarouselPlayer.$Play(standByPosition, null, true);
        };

        _SelfCarouselPlayer.$SetStandByPosition = function (standByPosition) {
            _StandByPosition = standByPosition;
        };

        _SelfCarouselPlayer.$MoveCarouselTo = function (position) {
            _Conveyor.$GoToPosition(position);
        };

        //CarouselPlayer Constructor
        {
            _Conveyor = new Conveyor();

            _Conveyor.$Combine(carousel);
            _Conveyor.$Combine(slideshow);
        }
    }
    //CarouselPlayer

    //SlideContainer
    function SlideContainer() {
        var _Self = this;
        var elmt = CreatePanel();

        $Jssor$.$CssZIndex(elmt, 0);
        $Jssor$.$Css(elmt, "pointerEvents", "none");

        _Self.$Elmt = elmt;

        _Self.$AddClipElement = function (clipElement) {
            $Jssor$.$AppendChild(elmt, clipElement);
            $Jssor$.$ShowElement(elmt);
        };

        _Self.$Clear = function () {
            $Jssor$.$HideElement(elmt);
            $Jssor$.$Empty(elmt);
        };
    }
    //SlideContainer

    //SlideItem
    function SlideItem(slideElmt, slideIndex) {

        var _SelfSlideItem = this;

        var _CaptionSliderIn;
        var _CaptionSliderOut;
        var _CaptionSliderCurrent;
        var _IsCaptionSliderPlayingWhenDragStart;

        var _Wrapper;
        var _BaseElement = slideElmt;

        var _LoadingScreen;

        var _ImageItem;
        var _ImageElmts = [];
        var _LinkItemOrigin;
        var _LinkItem;
        var _ImageLoading;
        var _ImageLoaded;
        var _ImageLazyLoading;
        var _ContentRefreshed;

        var _Processor;

        var _PlayerInstanceElement;
        var _PlayerInstance;

        var _SequenceNumber;    //for debug only

        $JssorAnimator$.call(_SelfSlideItem, -_DisplayPieces, _DisplayPieces + 1, { $SlideItemAnimator: true });

        function ResetCaptionSlider(fresh) {
            _CaptionSliderOut && _CaptionSliderOut.$Revert();
            _CaptionSliderIn && _CaptionSliderIn.$Revert();

            RefreshContent(slideElmt, fresh);
            _ContentRefreshed = true;

            _CaptionSliderIn = new _CaptionSliderOptions.$Class(slideElmt, _CaptionSliderOptions, 1);
            $JssorDebug$.$LiveStamp(_CaptionSliderIn, "caption_slider_" + _CaptionSliderCount + "_in");
            _CaptionSliderOut = new _CaptionSliderOptions.$Class(slideElmt, _CaptionSliderOptions);
            $JssorDebug$.$LiveStamp(_CaptionSliderOut, "caption_slider_" + _CaptionSliderCount + "_out");

            $JssorDebug$.$Execute(function () {
                _CaptionSliderCount++;
            });

            _CaptionSliderOut.$GoToPosition(0);
            _CaptionSliderIn.$GoToPosition(0);
        }

        function EnsureCaptionSliderVersion() {
            if (_CaptionSliderIn.$Version < _CaptionSliderOptions.$Version) {
                ResetCaptionSlider();
            }
        }

        //event handling begin
        function LoadImageCompleteEventHandler(completeCallback, loadingScreen, image) {
            if (!_ImageLoaded) {
                _ImageLoaded = true;

                if (_ImageItem && image) {
                    var imageWidth = image.width;
                    var imageHeight = image.height;
                    var fillWidth = imageWidth;
                    var fillHeight = imageHeight;

                    if (imageWidth && imageHeight && _Options.$FillMode) {

                        //0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, 5 contain for large image, actual size for small image, default value is 0
                        if (_Options.$FillMode & 3 && (!(_Options.$FillMode & 4) || imageWidth > _SlideWidth || imageHeight > _SlideHeight)) {
                            var fitHeight = false;
                            var ratio = _SlideWidth / _SlideHeight * imageHeight / imageWidth;

                            if (_Options.$FillMode & 1) {
                                fitHeight = (ratio > 1);
                            }
                            else if (_Options.$FillMode & 2) {
                                fitHeight = (ratio < 1);
                            }
                            fillWidth = fitHeight ? imageWidth * _SlideHeight / imageHeight : _SlideWidth;
                            fillHeight = fitHeight ? _SlideHeight : imageHeight * _SlideWidth / imageWidth;
                        }

                        $Jssor$.$CssWidth(_ImageItem, fillWidth);
                        $Jssor$.$CssHeight(_ImageItem, fillHeight);
                        $Jssor$.$CssTop(_ImageItem, (_SlideHeight - fillHeight) / 2);
                        $Jssor$.$CssLeft(_ImageItem, (_SlideWidth - fillWidth) / 2);
                    }

                    $Jssor$.$CssPosition(_ImageItem, "absolute");

                    _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_LOAD_END, slideIndex);
                }
            }

            $Jssor$.$HideElement(loadingScreen);
            completeCallback && completeCallback(_SelfSlideItem);
        }

        function LoadSlideshowImageCompleteEventHandler(nextIndex, nextItem, slideshowTransition, loadingTicket) {
            if (loadingTicket == _LoadingTicket && _CurrentSlideIndex == slideIndex && _AutoPlay) {
                if (!_Frozen) {
                    var nextRealIndex = GetRealIndex(nextIndex);
                    _SlideshowRunner.$Initialize(nextRealIndex, slideIndex, nextItem, _SelfSlideItem, slideshowTransition);
                    nextItem.$HideContentForSlideshow();
                    _Slideshow.$Locate(nextRealIndex, 1);
                    _Slideshow.$GoToPosition(nextRealIndex);
                    _CarouselPlayer.$PlayCarousel(nextIndex, nextIndex, 0);
                }
            }
        }

        function SlideReadyEventHandler(loadingTicket) {
            if (loadingTicket == _LoadingTicket && _CurrentSlideIndex == slideIndex) {

                if (!_Processor) {
                    var slideshowProcessor = null;
                    if (_SlideshowRunner) {
                        if (_SlideshowRunner.$Index == slideIndex)
                            slideshowProcessor = _SlideshowRunner.$GetProcessor();
                        else
                            _SlideshowRunner.$Clear();
                    }

                    EnsureCaptionSliderVersion();

                    _Processor = new Processor(slideElmt, slideIndex, slideshowProcessor, _SelfSlideItem.$GetCaptionSliderIn(), _SelfSlideItem.$GetCaptionSliderOut());
                    _Processor.$SetPlayer(_PlayerInstance);
                }

                !_Processor.$IsPlaying() && _Processor.$Replay();
            }
        }

        function ParkEventHandler(currentIndex, previousIndex, manualActivate) {
            if (currentIndex == slideIndex) {

                if (currentIndex != previousIndex)
                    _SlideItems[previousIndex] && _SlideItems[previousIndex].$ParkOut();
                else
                    !manualActivate && _Processor && _Processor.$AdjustIdleOnPark();

                _PlayerInstance && _PlayerInstance.$Enable();

                //park in
                var loadingTicket = _LoadingTicket = $Jssor$.$GetNow();
                _SelfSlideItem.$LoadImage($Jssor$.$CreateCallback(null, SlideReadyEventHandler, loadingTicket));
            }
            else {
                var distance = Math.abs(slideIndex - currentIndex);
                var loadRange = _DisplayPieces + _Options.$LazyLoading - 1;
                if (!_ImageLazyLoading || distance <= loadRange) {
                    _SelfSlideItem.$LoadImage();
                }
            }
        }

        function SwipeStartEventHandler() {
            if (_CurrentSlideIndex == slideIndex && _Processor) {
                _Processor.$Stop();
                _PlayerInstance && _PlayerInstance.$Quit();
                _PlayerInstance && _PlayerInstance.$Disable();
                _Processor.$OpenSlideshowPanel();
            }
        }

        function FreezeEventHandler() {
            if (_CurrentSlideIndex == slideIndex && _Processor) {
                _Processor.$Stop();
            }
        }

        function ContentClickEventHandler(event) {
            if (_LastDragSucceded) {
                $Jssor$.$StopEvent(event);

                var checkElement = $Jssor$.$EvtSrc(event);
                while (checkElement && slideElmt !== checkElement) {
                    if (checkElement.tagName == "A") {
                        $Jssor$.$CancelEvent(event);
                    }
                    try {
                        checkElement = checkElement.parentNode;
                    } catch (e) {
                        // Firefox sometimes fires events for XUL elements, which throws
                        // a "permission denied" error. so this is not a child.
                        break;
                    }
                }
            }
        }

        function SlideClickEventHandler(event) {
            if (!_LastDragSucceded) {
                _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_CLICK, slideIndex, event);
            }
        }

        function PlayerAvailableEventHandler() {
            _PlayerInstance = _PlayerInstanceElement.pInstance;
            _Processor && _Processor.$SetPlayer(_PlayerInstance);
        }

        _SelfSlideItem.$LoadImage = function (completeCallback, loadingScreen) {
            loadingScreen = loadingScreen || _LoadingScreen;

            if (_ImageElmts.length && !_ImageLoaded) {

                $Jssor$.$ShowElement(loadingScreen);

                if (!_ImageLoading) {
                    _ImageLoading = true;
                    _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_LOAD_START, slideIndex);

                    $Jssor$.$Each(_ImageElmts, function (imageElmt) {

                        if (!$Jssor$.$Attribute(imageElmt, "src")) {
                            imageElmt.src = $Jssor$.$AttributeEx(imageElmt, "src2");
                            $Jssor$.$CssDisplay(imageElmt, imageElmt["display-origin"]);
                        }
                    });
                }
                $Jssor$.$LoadImages(_ImageElmts, _ImageItem, $Jssor$.$CreateCallback(null, LoadImageCompleteEventHandler, completeCallback, loadingScreen));
            }
            else {
                LoadImageCompleteEventHandler(completeCallback, loadingScreen);
            }
        };

        _SelfSlideItem.$GoForNextSlide = function () {
            if (_SlideshowRunner) {
                var slideshowTransition = _SlideshowRunner.$GetTransition(_SlideCount);

                if (slideshowTransition) {
                    var loadingTicket = _LoadingTicket = $Jssor$.$GetNow();

                    var nextIndex = slideIndex + _PlayReverse;
                    var nextItem = _SlideItems[GetRealIndex(nextIndex)];
                    return nextItem.$LoadImage($Jssor$.$CreateCallback(null, LoadSlideshowImageCompleteEventHandler, nextIndex, nextItem, slideshowTransition, loadingTicket), _LoadingScreen);
                }
            }

            PlayTo(_CurrentSlideIndex + _Options.$AutoPlaySteps * _PlayReverse);
        };

        _SelfSlideItem.$TryActivate = function () {
            ParkEventHandler(slideIndex, slideIndex, true);
        };

        _SelfSlideItem.$ParkOut = function () {
            //park out
            _PlayerInstance && _PlayerInstance.$Quit();
            _PlayerInstance && _PlayerInstance.$Disable();
            _SelfSlideItem.$UnhideContentForSlideshow();
            _Processor && _Processor.$Abort();
            _Processor = null;
            ResetCaptionSlider();
        };

        //for debug only
        _SelfSlideItem.$StampSlideItemElements = function (stamp) {
            stamp = _SequenceNumber + "_" + stamp;

            $JssorDebug$.$Execute(function () {
                if (_ImageItem)
                    $Jssor$.$Attribute(_ImageItem, "debug-id", stamp + "_slide_item_image_id");

                $Jssor$.$Attribute(slideElmt, "debug-id", stamp + "_slide_item_item_id");
            });

            $JssorDebug$.$Execute(function () {
                $Jssor$.$Attribute(_Wrapper, "debug-id", stamp + "_slide_item_wrapper_id");
            });

            $JssorDebug$.$Execute(function () {
                $Jssor$.$Attribute(_LoadingScreen, "debug-id", stamp + "_loading_container_id");
            });
        };

        _SelfSlideItem.$HideContentForSlideshow = function () {
            $Jssor$.$HideElement(slideElmt);
        };

        _SelfSlideItem.$UnhideContentForSlideshow = function () {
            $Jssor$.$ShowElement(slideElmt);
        };

        _SelfSlideItem.$EnablePlayer = function () {
            _PlayerInstance && _PlayerInstance.$Enable();
        };

        function RefreshContent(elmt, fresh, level) {
            $JssorDebug$.$Execute(function () {
                if ($Jssor$.$Attribute(elmt, "jssor-slider"))
                    $JssorDebug$.$Log("Child slider found.");
            });

            if ($Jssor$.$Attribute(elmt, "jssor-slider"))
                return;

            level = level || 0;

            if (!_ContentRefreshed) {
                if (elmt.tagName == "IMG") {
                    _ImageElmts.push(elmt);

                    if (!$Jssor$.$Attribute(elmt, "src")) {
                        _ImageLazyLoading = true;
                        elmt["display-origin"] = $Jssor$.$CssDisplay(elmt);
                        $Jssor$.$HideElement(elmt);
                    }
                }
                if ($Jssor$.$IsBrowserIe9Earlier()) {
                    $Jssor$.$CssZIndex(elmt, ($Jssor$.$CssZIndex(elmt) || 0) + 1);
                }
                if (_Options.$HWA && $Jssor$.$WebKitVersion()) {
                    if ($Jssor$.$WebKitVersion() < 534 || (!_SlideshowEnabled && !$Jssor$.$IsBrowserChrome())) {
                        $Jssor$.$EnableHWA(elmt);
                    }
                }
            }

            var childElements = $Jssor$.$Children(elmt);

            $Jssor$.$Each(childElements, function (childElement, i) {

                var childTagName = childElement.tagName;
                var uAttribute = $Jssor$.$AttributeEx(childElement, "u");
                if (uAttribute == "player" && !_PlayerInstanceElement) {
                    _PlayerInstanceElement = childElement;
                    if (_PlayerInstanceElement.pInstance) {
                        PlayerAvailableEventHandler();
                    }
                    else {
                        $Jssor$.$AddEvent(_PlayerInstanceElement, "dataavailable", PlayerAvailableEventHandler);
                    }
                }

                if (uAttribute == "caption") {
                    if (!$Jssor$.$IsBrowserIE() && !fresh) {

                        //if (childTagName == "A") {
                        //    $Jssor$.$RemoveEvent(childElement, "click", ContentClickEventHandler);
                        //    $Jssor$.$Attribute(childElement, "jssor-content", null);
                        //}

                        var captionElement = $Jssor$.$CloneNode(childElement, false, true);
                        $Jssor$.$InsertBefore(captionElement, childElement, elmt);
                        $Jssor$.$RemoveElement(childElement, elmt);
                        childElement = captionElement;

                        fresh = true;
                    }
                }
                else if (!_ContentRefreshed && !level && !_ImageItem) {

                    if (childTagName == "A") {
                        if ($Jssor$.$AttributeEx(childElement, "u") == "image") {
                            _ImageItem = $Jssor$.$FindChildByTag(childElement, "IMG");

                            $JssorDebug$.$Execute(function () {
                                if (!_ImageItem) {
                                    $JssorDebug$.$Error("slide html code definition error, no 'IMG' found in a 'image with link' slide.\r\n" + elmt.outerHTML);
                                }
                            });
                        }
                        else {
                            _ImageItem = $Jssor$.$FindChild(childElement, "image", true);
                        }

                        if (_ImageItem) {
                            _LinkItemOrigin = childElement;
                            $Jssor$.$SetStyles(_LinkItemOrigin, _StyleDef);

                            _LinkItem = $Jssor$.$CloneNode(_LinkItemOrigin, true);
                            //$Jssor$.$AddEvent(_LinkItem, "click", ContentClickEventHandler);

                            $Jssor$.$CssDisplay(_LinkItem, "block");
                            $Jssor$.$SetStyles(_LinkItem, _StyleDef);
                            $Jssor$.$CssOpacity(_LinkItem, 0);
                            $Jssor$.$Css(_LinkItem, "backgroundColor", "#000");
                        }
                    }
                    else if (childTagName == "IMG" && $Jssor$.$AttributeEx(childElement, "u") == "image") {
                        _ImageItem = childElement;
                    }

                    if (_ImageItem) {
                        _ImageItem.border = 0;
                        $Jssor$.$SetStyles(_ImageItem, _StyleDef);
                    }
                }

                //if (!$Jssor$.$Attribute(childElement, "jssor-content")) {
                //    //cancel click event on <A> element when a drag of slide succeeded
                //    $Jssor$.$AddEvent(childElement, "click", ContentClickEventHandler);
                //    $Jssor$.$Attribute(childElement, "jssor-content", true);
                //}

                RefreshContent(childElement, fresh, level +1);
            });
        }

        _SelfSlideItem.$OnInnerOffsetChange = function (oldOffset, newOffset) {
            var slidePosition = _DisplayPieces - newOffset;

            SetPosition(_Wrapper, slidePosition);

            //following lines are for future usage, not ready yet
            //if (!_IsDragging || !_IsCaptionSliderPlayingWhenDragStart) {
            //    var _DealWithParallax;
            //    if (IsCurrentSlideIndex(slideIndex)) {
            //        if (_CaptionSliderOptions.$PlayOutMode == 2)
            //            _DealWithParallax = true;
            //    }
            //    else {
            //        if (!_CaptionSliderOptions.$PlayInMode) {
            //            //PlayInMode: 0 none
            //            _CaptionSliderIn.$GoToEnd();
            //        }
            //        //else if (_CaptionSliderOptions.$PlayInMode == 1) {
            //        //    //PlayInMode: 1 chain
            //        //    _CaptionSliderIn.$GoToPosition(0);
            //        //}
            //        else if (_CaptionSliderOptions.$PlayInMode == 2) {
            //            //PlayInMode: 2 parallel
            //            _DealWithParallax = true;
            //        }
            //    }

            //    if (_DealWithParallax) {
            //        _CaptionSliderIn.$GoToPosition((_CaptionSliderIn.$GetPosition_OuterEnd() - _CaptionSliderIn.$GetPosition_OuterBegin()) * Math.abs(newOffset - 1) * .8 + _CaptionSliderIn.$GetPosition_OuterBegin());
            //    }
            //}
        };

        _SelfSlideItem.$GetCaptionSliderIn = function () {
            return _CaptionSliderIn;
        };

        _SelfSlideItem.$GetCaptionSliderOut = function () {
            return _CaptionSliderOut;
        };

        _SelfSlideItem.$Index = slideIndex;

        $JssorObject$.call(_SelfSlideItem);

        //SlideItem Constructor
        {

            var thumb = $Jssor$.$FindChild(slideElmt, "thumb", true);
            if (thumb) {
                _SelfSlideItem.$Thumb = $Jssor$.$CloneNode(thumb);
                $Jssor$.$RemoveAttribute(thumb, "id");
                $Jssor$.$HideElement(thumb);
            }
            $Jssor$.$ShowElement(slideElmt);

            _LoadingScreen = $Jssor$.$CloneNode(_LoadingContainer);
            $Jssor$.$CssZIndex(_LoadingScreen, 1000);

            //cancel click event on <A> element when a drag of slide succeeded
            $Jssor$.$AddEvent(slideElmt, "click", SlideClickEventHandler);

            ResetCaptionSlider(true);

            _SelfSlideItem.$Image = _ImageItem;
            _SelfSlideItem.$Link = _LinkItem;

            _SelfSlideItem.$Item = slideElmt;

            _SelfSlideItem.$Wrapper = _Wrapper = slideElmt;
            $Jssor$.$AppendChild(_Wrapper, _LoadingScreen);

            _SelfSlider.$On(203, ParkEventHandler);
            _SelfSlider.$On(28, FreezeEventHandler);
            _SelfSlider.$On(24, SwipeStartEventHandler);

            $JssorDebug$.$Execute(function () {
                _SequenceNumber = _SlideItemCreatedCount++;
            });

            $JssorDebug$.$Execute(function () {
                $Jssor$.$Attribute(_Wrapper, "debug-id", "slide-" + slideIndex);
            });
        }
    }
    //SlideItem

    //Processor
    function Processor(slideElmt, slideIndex, slideshowProcessor, captionSliderIn, captionSliderOut) {

        var _SelfProcessor = this;

        var _ProgressBegin = 0;
        var _SlideshowBegin = 0;
        var _SlideshowEnd;
        var _CaptionInBegin;
        var _IdleBegin;
        var _IdleEnd;
        var _ProgressEnd;

        var _IsSlideshowRunning;
        var _IsRollingBack;

        var _PlayerInstance;
        var _IsPlayerOnService;

        var slideItem = _SlideItems[slideIndex];

        $JssorAnimator$.call(_SelfProcessor, 0, 0);

        function UpdateLink() {

            $Jssor$.$Empty(_LinkContainer);

            if (_ShowLink && _IsSlideshowRunning && slideItem.$Link) {
                $Jssor$.$AppendChild(_LinkContainer, slideItem.$Link);
            }

            $Jssor$.$ShowElement(_LinkContainer, !_IsSlideshowRunning && slideItem.$Image);
        }

        function ProcessCompleteEventHandler() {

            if (_IsRollingBack) {
                _IsRollingBack = false;
                _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_ROLLBACK_END, slideIndex, _IdleEnd, _ProgressBegin, _IdleBegin, _IdleEnd, _ProgressEnd);
                _SelfProcessor.$GoToPosition(_IdleBegin);
            }

            _SelfProcessor.$Replay();
        }

        function PlayerSwitchEventHandler(isOnService) {
            _IsPlayerOnService = isOnService;

            _SelfProcessor.$Stop();
            _SelfProcessor.$Replay();
        }

        _SelfProcessor.$Replay = function () {

            var currentPosition = _SelfProcessor.$GetPosition_Display();

            if (!_IsDragging && !_IsSliding && !_IsPlayerOnService && _CurrentSlideIndex == slideIndex) {

                if (!currentPosition) {
                    if (_SlideshowEnd && !_IsSlideshowRunning) {
                        _IsSlideshowRunning = true;

                        _SelfProcessor.$OpenSlideshowPanel(true);

                        _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_SLIDESHOW_START, slideIndex, _ProgressBegin, _SlideshowBegin, _SlideshowEnd, _ProgressEnd);
                    }

                    UpdateLink();
                }

                var toPosition;
                var stateEvent = $JssorSlider$.$EVT_STATE_CHANGE;

                if (currentPosition != _ProgressEnd) {
                    if (currentPosition == _IdleEnd) {
                        toPosition = _ProgressEnd;
                    }
                    else if (currentPosition == _IdleBegin) {
                        toPosition = _IdleEnd;
                    }
                    else if (!currentPosition) {
                        toPosition = _IdleBegin;
                    }
                    else if (currentPosition > _IdleEnd) {
                        _IsRollingBack = true;
                        toPosition = _IdleEnd;
                        stateEvent = $JssorSlider$.$EVT_ROLLBACK_START;
                    }
                    else {
                        //continue from break (by drag or lock)
                        toPosition = _SelfProcessor.$GetPlayToPosition();
                    }
                }

                _SelfSlider.$TriggerEvent(stateEvent, slideIndex, currentPosition, _ProgressBegin, _IdleBegin, _IdleEnd, _ProgressEnd);

                var allowAutoPlay = _AutoPlay && (!_HoverToPause || _NotOnHover);

                if (currentPosition == _ProgressEnd) {
                    (_IdleEnd != _ProgressEnd && !(_HoverToPause & 12) || allowAutoPlay) && slideItem.$GoForNextSlide();
                }
                else if (allowAutoPlay || currentPosition != _IdleEnd) {
                    _SelfProcessor.$PlayToPosition(toPosition, ProcessCompleteEventHandler);
                }
            }
        };

        _SelfProcessor.$AdjustIdleOnPark = function () {
            if (_IdleEnd == _ProgressEnd && _IdleEnd == _SelfProcessor.$GetPosition_Display())
                _SelfProcessor.$GoToPosition(_IdleBegin);
        };

        _SelfProcessor.$Abort = function () {
            _SlideshowRunner && _SlideshowRunner.$Index == slideIndex && _SlideshowRunner.$Clear();

            var currentPosition = _SelfProcessor.$GetPosition_Display();
            if (currentPosition < _ProgressEnd) {
                _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_STATE_CHANGE, slideIndex, -currentPosition - 1, _ProgressBegin, _IdleBegin, _IdleEnd, _ProgressEnd);
            }
        };

        _SelfProcessor.$OpenSlideshowPanel = function (open) {
            if (slideshowProcessor) {
                $Jssor$.$CssOverflow(_SlideshowPanel, open && slideshowProcessor.$Transition.$Outside ? "" : "hidden");
            }
        };

        _SelfProcessor.$OnInnerOffsetChange = function (oldPosition, newPosition) {

            if (_IsSlideshowRunning && newPosition >= _SlideshowEnd) {
                _IsSlideshowRunning = false;
                UpdateLink();
                slideItem.$UnhideContentForSlideshow();
                _SlideshowRunner.$Clear();

                _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_SLIDESHOW_END, slideIndex, _ProgressBegin, _SlideshowBegin, _SlideshowEnd, _ProgressEnd);
            }

            _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_PROGRESS_CHANGE, slideIndex, newPosition, _ProgressBegin, _IdleBegin, _IdleEnd, _ProgressEnd);
        };

        _SelfProcessor.$SetPlayer = function (playerInstance) {
            if (playerInstance && !_PlayerInstance) {
                _PlayerInstance = playerInstance;

                playerInstance.$On($JssorPlayer$.$EVT_SWITCH, PlayerSwitchEventHandler);
            }
        };

        //Processor Constructor
        {
            if (slideshowProcessor) {
                _SelfProcessor.$Chain(slideshowProcessor);
            }

            _SlideshowEnd = _SelfProcessor.$GetPosition_OuterEnd();
            _CaptionInBegin = _SelfProcessor.$GetPosition_OuterEnd();
            _SelfProcessor.$Chain(captionSliderIn);
            _IdleBegin = captionSliderIn.$GetPosition_OuterEnd();
            _IdleEnd = _IdleBegin + ($Jssor$.$ParseFloat($Jssor$.$AttributeEx(slideElmt, "idle")) || _AutoPlayInterval);

            captionSliderOut.$Shift(_IdleEnd);
            _SelfProcessor.$Combine(captionSliderOut);
            _ProgressEnd = _SelfProcessor.$GetPosition_OuterEnd();
        }
    }
    //Processor
    //#endregion

    function SetPosition(elmt, position) {
        var orientation = _DragOrientation > 0 ? _DragOrientation : _PlayOrientation;
        var x = _StepLengthX * position * (orientation & 1);
        var y = _StepLengthY * position * ((orientation >> 1) & 1);

        x = Math.round(x);
        y = Math.round(y);

        $Jssor$.$CssLeft(elmt, x);
        $Jssor$.$CssTop(elmt, y);
    }

    //#region Event handling begin

    function RecordFreezePoint() {
        _CarouselPlaying_OnFreeze = _IsSliding;
        _PlayToPosition_OnFreeze = _CarouselPlayer.$GetPlayToPosition();
        _Position_OnFreeze = _Conveyor.$GetPosition();
    }

    function Freeze() {
        RecordFreezePoint();

        if (_IsDragging || !_NotOnHover && (_HoverToPause & 12)) {
            _CarouselPlayer.$Stop();

            _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_FREEZE);
        }
    }

    function Unfreeze(byDrag) {

        if (!_IsDragging && (_NotOnHover || !(_HoverToPause & 12)) && !_CarouselPlayer.$IsPlaying()) {

            var currentPosition = _Conveyor.$GetPosition();
            var toPosition = Math.ceil(_Position_OnFreeze);

            if (byDrag && Math.abs(_DragOffsetTotal) >= _Options.$MinDragOffsetToSlide) {
                toPosition = Math.ceil(currentPosition);
                toPosition += _DragIndexAdjust;
            }

            if (!(_Loop & 1)) {
                toPosition = Math.min(_SlideCount - _DisplayPieces, Math.max(toPosition, 0));
            }

            var t = Math.abs(toPosition - currentPosition);
            t = 1 - Math.pow(1 - t, 5);

            if (!_LastDragSucceded && _CarouselPlaying_OnFreeze) {
                _CarouselPlayer.$Continue(_PlayToPosition_OnFreeze);
            }
            else if (currentPosition == toPosition) {
                _CurrentSlideItem.$EnablePlayer();
                _CurrentSlideItem.$TryActivate();
            }
            else {

                _CarouselPlayer.$PlayCarousel(currentPosition, toPosition, t * _SlideDuration);
            }
        }
    }

    function PreventDragSelectionEvent(event) {
        if (!$Jssor$.$AttributeEx($Jssor$.$EvtSrc(event), "nodrag")) {
            $Jssor$.$CancelEvent(event);
        }
    }

    function OnTouchStart(event) {
        OnDragStart(event, 1);
    }

    function OnDragStart(event, touch) {
        event = $Jssor$.$GetEvent(event);
        var eventSrc = $Jssor$.$EvtSrc(event);

        if (!_DragOrientationRegistered && !$Jssor$.$AttributeEx(eventSrc, "nodrag") && RegisterDrag() && (!touch || event.touches.length == 1)) {
            _IsDragging = true;
            _DragInvalid = false;
            _LoadingTicket = null;

            $Jssor$.$AddEvent(document, touch ? "touchmove" : "mousemove", OnDragMove);

            _LastTimeMoveByDrag = $Jssor$.$GetNow() - 50;

            _LastDragSucceded = 0;
            Freeze();

            if (!_CarouselPlaying_OnFreeze)
                _DragOrientation = 0;

            if (touch) {
                var touchPoint = event.touches[0];
                _DragStartMouseX = touchPoint.clientX;
                _DragStartMouseY = touchPoint.clientY;
            }
            else {
                var mousePoint = $Jssor$.$MousePosition(event);

                _DragStartMouseX = mousePoint.x;
                _DragStartMouseY = mousePoint.y;
            }

            _DragOffsetTotal = 0;
            _DragOffsetLastTime = 0;
            _DragIndexAdjust = 0;

            //Trigger EVT_DRAGSTART
            _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_DRAG_START, GetRealIndex(_Position_OnFreeze), _Position_OnFreeze, event);
        }
    }

    function OnDragMove(event) {
        if (_IsDragging) {
            event = $Jssor$.$GetEvent(event);

            var actionPoint;

            if (event.type != "mousemove") {
                var touch = event.touches[0];
                actionPoint = { x: touch.clientX, y: touch.clientY };
            }
            else {
                actionPoint = $Jssor$.$MousePosition(event);
            }

            if (actionPoint) {
                var distanceX = actionPoint.x - _DragStartMouseX;
                var distanceY = actionPoint.y - _DragStartMouseY;


                if (Math.floor(_Position_OnFreeze) != _Position_OnFreeze)
                    _DragOrientation = _DragOrientation || (_PlayOrientation & _DragOrientationRegistered);

                if ((distanceX || distanceY) && !_DragOrientation) {
                    if (_DragOrientationRegistered == 3) {
                        if (Math.abs(distanceY) > Math.abs(distanceX)) {
                            _DragOrientation = 2;
                        }
                        else
                            _DragOrientation = 1;
                    }
                    else {
                        _DragOrientation = _DragOrientationRegistered;
                    }

                    if (_IsTouchDevice && _DragOrientation == 1 && Math.abs(distanceY) - Math.abs(distanceX) > 3) {
                        _DragInvalid = true;
                    }
                }

                if (_DragOrientation) {
                    var distance = distanceY;
                    var stepLength = _StepLengthY;

                    if (_DragOrientation == 1) {
                        distance = distanceX;
                        stepLength = _StepLengthX;
                    }

                    if (!(_Loop & 1)) {
                        if (distance > 0) {
                            var normalDistance = stepLength * _CurrentSlideIndex;
                            var sqrtDistance = distance - normalDistance;
                            if (sqrtDistance > 0) {
                                distance = normalDistance + Math.sqrt(sqrtDistance) * 5;
                            }
                        }

                        if (distance < 0) {
                            var normalDistance = stepLength * (_SlideCount - _DisplayPieces - _CurrentSlideIndex);
                            var sqrtDistance = -distance - normalDistance;

                            if (sqrtDistance > 0) {
                                distance = -normalDistance - Math.sqrt(sqrtDistance) * 5;
                            }
                        }
                    }

                    if (_DragOffsetTotal - _DragOffsetLastTime < -2) {
                        _DragIndexAdjust = 0;
                    }
                    else if (_DragOffsetTotal - _DragOffsetLastTime > 2) {
                        _DragIndexAdjust = -1;
                    }

                    _DragOffsetLastTime = _DragOffsetTotal;
                    _DragOffsetTotal = distance;
                    _PositionToGoByDrag = _Position_OnFreeze - _DragOffsetTotal / stepLength / (_ScaleRatio || 1);

                    if (_DragOffsetTotal && _DragOrientation && !_DragInvalid) {
                        $Jssor$.$CancelEvent(event);
                        if (!_IsSliding) {
                            _CarouselPlayer.$StandBy(_PositionToGoByDrag);
                        }
                        else
                            _CarouselPlayer.$SetStandByPosition(_PositionToGoByDrag);
                    }
                }
            }
        }
    }

    function OnDragEnd() {
        UnregisterDrag();

        if (_IsDragging) {

            _IsDragging = false;

            _LastTimeMoveByDrag = $Jssor$.$GetNow();

            $Jssor$.$RemoveEvent(document, "mousemove", OnDragMove);
            $Jssor$.$RemoveEvent(document, "touchmove", OnDragMove);

            _LastDragSucceded = _DragOffsetTotal;

            _CarouselPlayer.$Stop();

            var currentPosition = _Conveyor.$GetPosition();

            //Trigger EVT_DRAG_END
            _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_DRAG_END, GetRealIndex(currentPosition), currentPosition, GetRealIndex(_Position_OnFreeze), _Position_OnFreeze);

            (_HoverToPause & 12) && RecordFreezePoint();

            Unfreeze(true);
        }
    }

    function SlidesClickEventHandler(event) {
        if (_LastDragSucceded) {
            $Jssor$.$StopEvent(event);

            var checkElement = $Jssor$.$EvtSrc(event);
            while (checkElement && _SlidesContainer !== checkElement) {
                if (checkElement.tagName == "A") {
                    $Jssor$.$CancelEvent(event);
                }
                try {
                    checkElement = checkElement.parentNode;
                } catch (e) {
                    // Firefox sometimes fires events for XUL elements, which throws
                    // a "permission denied" error. so this is not a child.
                    break;
                }
            }
        }
    }
    //#endregion

    function SetCurrentSlideIndex(index) {
        _PrevSlideItem = _SlideItems[_CurrentSlideIndex];
        _PreviousSlideIndex = _CurrentSlideIndex;
        _CurrentSlideIndex = GetRealIndex(index);
        _CurrentSlideItem = _SlideItems[_CurrentSlideIndex];
        ResetNavigator(index);
        return _CurrentSlideIndex;
    }

    function OnPark(slideIndex, prevIndex) {
        _DragOrientation = 0;

        SetCurrentSlideIndex(slideIndex);

        //Trigger EVT_PARK
        _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_PARK, GetRealIndex(slideIndex), prevIndex);
    }

    function ResetNavigator(index, temp) {
        _TempSlideIndex = index;
        $Jssor$.$Each(_Navigators, function (navigator) {
            navigator.$SetCurrentIndex(GetRealIndex(index), index, temp);
        });
    }

    function RegisterDrag() {
        var dragRegistry = $JssorSlider$.$DragRegistry || 0;
        var dragOrientation = _DragEnabled;
        if (_IsTouchDevice)
            (dragOrientation & 1) && (dragOrientation &= 1);
        $JssorSlider$.$DragRegistry |= dragOrientation;

        return (_DragOrientationRegistered = dragOrientation & ~dragRegistry);
    }

    function UnregisterDrag() {
        if (_DragOrientationRegistered) {
            $JssorSlider$.$DragRegistry &= ~_DragEnabled;
            _DragOrientationRegistered = 0;
        }
    }

    function CreatePanel() {
        var div = $Jssor$.$CreateDiv();

        $Jssor$.$SetStyles(div, _StyleDef);
        $Jssor$.$CssPosition(div, "absolute");

        return div;
    }

    function GetRealIndex(index) {
        return (index % _SlideCount + _SlideCount) % _SlideCount;
    }

    function IsCurrentSlideIndex(index) {
        return GetRealIndex(index) == _CurrentSlideIndex;
    }

    function IsPreviousSlideIndex(index) {
        return GetRealIndex(index) == _PreviousSlideIndex;
    }

    //Navigation Request Handler
    function NavigationClickHandler(index, relative) {
        if (relative) {
            if (!_Loop) {
                //Stop at threshold
                index = Math.min(Math.max(index + _TempSlideIndex, 0), _SlideCount - _DisplayPieces);
                relative = false;
            }
            else if (_Loop & 2) {
                //Rewind
                index = GetRealIndex(index + _TempSlideIndex);
                relative = false;
            }
        }
        PlayTo(index, _Options.$SlideDuration, relative);
    }

    function ShowNavigators() {
        $Jssor$.$Each(_Navigators, function (navigator) {
            navigator.$Show(navigator.$Options.$ChanceToShow <= _NotOnHover);
        });
    }

    function MainContainerMouseLeaveEventHandler() {
        if (!_NotOnHover) {

            //$JssorDebug$.$Log("mouseleave");

            _NotOnHover = 1;

            ShowNavigators();

            if (!_IsDragging) {
                (_HoverToPause & 12) && Unfreeze();
                (_HoverToPause & 3) && _SlideItems[_CurrentSlideIndex].$TryActivate();
            }
        }
    }

    function MainContainerMouseEnterEventHandler() {

        if (_NotOnHover) {

            //$JssorDebug$.$Log("mouseenter");

            _NotOnHover = 0;

            ShowNavigators();

            _IsDragging || !(_HoverToPause & 12) || Freeze();
        }
    }

    function AdjustSlidesContainerSize() {
        _StyleDef = { $Width: _SlideWidth, $Height: _SlideHeight, $Top: 0, $Left: 0 };

        $Jssor$.$Each(_SlideElmts, function (slideElmt, i) {

            $Jssor$.$SetStyles(slideElmt, _StyleDef);
            $Jssor$.$CssPosition(slideElmt, "absolute");
            $Jssor$.$CssOverflow(slideElmt, "hidden");

            $Jssor$.$HideElement(slideElmt);
        });

        $Jssor$.$SetStyles(_LoadingContainer, _StyleDef);
    }

    function PlayToOffset(offset, slideDuration) {
        PlayTo(offset, slideDuration, true);
    }

    function PlayTo(slideIndex, slideDuration, relative) {
        ///	<summary>
        ///		PlayTo( slideIndex [, slideDuration] ); //Play slider to position 'slideIndex' within a period calculated base on 'slideDuration'.
        ///	</summary>
        ///	<param name="slideIndex" type="Number">
        ///		slide slideIndex or position will be playing to
        ///	</param>
        ///	<param name="slideDuration" type="Number" optional="true">
        ///		base slide duration in milliseconds to calculate the whole duration to complete this play request.
        ///	    default value is '$SlideDuration' value which is specified when initialize the slider.
        ///	</param>
        /// http://msdn.microsoft.com/en-us/library/vstudio/bb385682.aspx
        /// http://msdn.microsoft.com/en-us/library/vstudio/hh542720.aspx
        if (_CarouselEnabled && (!_IsDragging || _Options.$NaviQuitDrag)) {
            _IsSliding = true;
            _IsDragging = false;
            _CarouselPlayer.$Stop();

            {
                //Slide Duration
                if (slideDuration == undefined)
                    slideDuration = _SlideDuration;

                var positionDisplay = _Carousel.$GetPosition_Display();
                var positionTo = slideIndex;
                if (relative) {
                    positionTo = positionDisplay + slideIndex;
                    if (slideIndex > 0)
                        positionTo = Math.ceil(positionTo);
                    else
                        positionTo = Math.floor(positionTo);
                }

                if (_Loop & 2) {
                    //Rewind
                    positionTo = GetRealIndex(positionTo);
                }
                if (!(_Loop & 1)) {
                    //Stop at threshold
                    positionTo = Math.max(0, Math.min(positionTo, _SlideCount - _DisplayPieces));
                }

                var positionOffset = (positionTo - positionDisplay) % _SlideCount;
                positionTo = positionDisplay + positionOffset;

                var duration = positionDisplay == positionTo ? 0 : slideDuration * Math.abs(positionOffset);
                duration = Math.min(duration, slideDuration * _DisplayPieces * 1.5);

                _CarouselPlayer.$PlayCarousel(positionDisplay, positionTo, duration || 1);
            }
        }
    }

    //private functions

    //member functions

    _SelfSlider.$PlayTo = PlayTo;

    _SelfSlider.$GoTo = function (slideIndex) {
        ///	<summary>
        ///		instance.$GoTo( slideIndex );   //Go to the specifed slide immediately with no play.
        ///	</summary>
        PlayTo(slideIndex, 1);
    };

    _SelfSlider.$Next = function () {
        ///	<summary>
        ///		instance.$Next();   //Play the slider to next slide.
        ///	</summary>
        PlayToOffset(1);
    };

    _SelfSlider.$Prev = function () {
        ///	<summary>
        ///		instance.$Prev();   //Play the slider to previous slide.
        ///	</summary>
        PlayToOffset(-1);
    };

    _SelfSlider.$Pause = function () {
        ///	<summary>
        ///		instance.$Pause();   //Pause the slider, prevent it from auto playing.
        ///	</summary>
        _AutoPlay = false;
    };

    _SelfSlider.$Play = function () {
        ///	<summary>
        ///		instance.$Play();   //Start auto play if the slider is currently paused.
        ///	</summary>
        if (!_AutoPlay) {
            _AutoPlay = true;
            _SlideItems[_CurrentSlideIndex] && _SlideItems[_CurrentSlideIndex].$TryActivate();
        }
    };

    _SelfSlider.$SetSlideshowTransitions = function (transitions) {
        ///	<summary>
        ///		instance.$SetSlideshowTransitions( transitions );   //Reset slideshow transitions for the slider.
        ///	</summary>
        $JssorDebug$.$Execute(function () {
            if (!transitions || !transitions.length) {
                $JssorDebug$.$Error("Can not set slideshow transitions, no transitions specified.");
            }
        });

        //$Jssor$.$TranslateTransitions(transitions);    //for old transition compatibility
        _Options.$SlideshowOptions.$Transitions = transitions;
    };

    _SelfSlider.$SetCaptionTransitions = function (transitions) {
        ///	<summary>
        ///		instance.$SetCaptionTransitions( transitions );   //Reset caption transitions for the slider.
        ///	</summary>
        $JssorDebug$.$Execute(function () {
            if (!transitions || !transitions.length) {
                $JssorDebug$.$Error("Can not set caption transitions, no transitions specified");
            }
        });

        //$Jssor$.$TranslateTransitions(transitions);    //for old transition compatibility
        _CaptionSliderOptions.$CaptionTransitions = transitions;
        _CaptionSliderOptions.$Version = $Jssor$.$GetNow();
    };

    _SelfSlider.$SlidesCount = function () {
        ///	<summary>
        ///		instance.$SlidesCount();   //Retrieve slides count of the slider.
        ///	</summary>
        return _SlideElmts.length;
    };

    _SelfSlider.$CurrentIndex = function () {
        ///	<summary>
        ///		instance.$CurrentIndex();   //Retrieve current slide index of the slider.
        ///	</summary>
        return _CurrentSlideIndex;
    };

    _SelfSlider.$IsAutoPlaying = function () {
        ///	<summary>
        ///		instance.$IsAutoPlaying();   //Retrieve auto play status of the slider.
        ///	</summary>
        return _AutoPlay;
    };

    _SelfSlider.$IsDragging = function () {
        ///	<summary>
        ///		instance.$IsDragging();   //Retrieve drag status of the slider.
        ///	</summary>
        return _IsDragging;
    };

    _SelfSlider.$IsSliding = function () {
        ///	<summary>
        ///		instance.$IsSliding();   //Retrieve right<-->left sliding status of the slider.
        ///	</summary>
        return _IsSliding;
    };

    _SelfSlider.$IsMouseOver = function () {
        ///	<summary>
        ///		instance.$IsMouseOver();   //Retrieve mouse over status of the slider.
        ///	</summary>
        return !_NotOnHover;
    };

    _SelfSlider.$LastDragSucceded = function () {
        ///	<summary>
        ///		instance.$IsLastDragSucceded();   //Retrieve last drag succeded status, returns 0 if failed, returns drag offset if succeded
        ///	</summary>
        return _LastDragSucceded;
    };

    function OriginalWidth() {
        ///	<summary>
        ///		instance.$OriginalWidth();   //Retrieve original width of the slider.
        ///	</summary>
        return $Jssor$.$CssWidth(_ScaleWrapper || elmt);
    }

    function OriginalHeight() {
        ///	<summary>
        ///		instance.$OriginalHeight();   //Retrieve original height of the slider.
        ///	</summary>
        return $Jssor$.$CssHeight(_ScaleWrapper || elmt);
    }

    _SelfSlider.$OriginalWidth = _SelfSlider.$GetOriginalWidth = OriginalWidth;

    _SelfSlider.$OriginalHeight = _SelfSlider.$GetOriginalHeight = OriginalHeight;

    function Scale(dimension, isHeight) {
        ///	<summary>
        ///		instance.$ScaleWidth();   //Retrieve scaled dimension the slider currently displays.
        ///		instance.$ScaleWidth( dimension );   //Scale the slider to new width and keep aspect ratio.
        ///	</summary>

        if (dimension == undefined)
            return $Jssor$.$CssWidth(elmt);

        if (!_ScaleWrapper) {
            $JssorDebug$.$Execute(function () {
                var originalWidthStr = $Jssor$.$Css(elmt, "width");
                var originalHeightStr = $Jssor$.$Css(elmt, "height");
                var originalWidth = $Jssor$.$CssP(elmt, "width");
                var originalHeight = $Jssor$.$CssP(elmt, "height");

                if (!originalWidthStr || originalWidthStr.indexOf("px") == -1) {
                    $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not specified. Please specify 'width' in pixel. e.g. 'width: 600px;'");
                }

                if (!originalHeightStr || originalHeightStr.indexOf("px") == -1) {
                    $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not specified. Please specify 'height' in pixel. e.g. 'height: 300px;'");
                }

                if (originalWidthStr.indexOf('%') != -1) {
                    $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not valid. Please specify 'width' in pixel. e.g. 'width: 600px;'");
                }

                if (originalHeightStr.indexOf('%') != -1) {
                    $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not valid. Please specify 'height' in pixel. e.g. 'height: 300px;'");
                }

                if (!originalWidth) {
                    $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not valid. 'width' of 'outer container' should be positive number. e.g. 'width: 600px;'");
                }

                if (!originalHeight) {
                    $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not valid. 'height' of 'outer container' should be positive number. e.g. 'height: 300px;'");
                }
            });

            var innerWrapper = $Jssor$.$CreateDiv(document);
            $Jssor$.$ClassName(innerWrapper, $Jssor$.$ClassName(elmt));
            $Jssor$.$CssCssText(innerWrapper, $Jssor$.$CssCssText(elmt));
            $Jssor$.$CssDisplay(innerWrapper, "block");

            $Jssor$.$CssPosition(innerWrapper, "relative");
            $Jssor$.$CssTop(innerWrapper, 0);
            $Jssor$.$CssLeft(innerWrapper, 0);
            $Jssor$.$CssOverflow(innerWrapper, "visible");

            _ScaleWrapper = $Jssor$.$CreateDiv(document);

            $Jssor$.$CssPosition(_ScaleWrapper, "absolute");
            $Jssor$.$CssTop(_ScaleWrapper, 0);
            $Jssor$.$CssLeft(_ScaleWrapper, 0);
            $Jssor$.$CssWidth(_ScaleWrapper, $Jssor$.$CssWidth(elmt));
            $Jssor$.$CssHeight(_ScaleWrapper, $Jssor$.$CssHeight(elmt));
            $Jssor$.$SetStyleTransformOrigin(_ScaleWrapper, "0 0");

            $Jssor$.$AppendChild(_ScaleWrapper, innerWrapper);

            var children = $Jssor$.$Children(elmt);
            $Jssor$.$AppendChild(elmt, _ScaleWrapper);

            $Jssor$.$Css(elmt, "backgroundImage", "");

            //var noMoveElmts = {
            //    "navigator": _BulletNavigatorOptions && _BulletNavigatorOptions.$Scale == false,
            //    "arrowleft": _ArrowNavigatorOptions && _ArrowNavigatorOptions.$Scale == false,
            //    "arrowright": _ArrowNavigatorOptions && _ArrowNavigatorOptions.$Scale == false,
            //    "thumbnavigator": _ThumbnailNavigatorOptions && _ThumbnailNavigatorOptions.$Scale == false,
            //    "thumbwrapper": _ThumbnailNavigatorOptions && _ThumbnailNavigatorOptions.$Scale == false
            //};

            $Jssor$.$Each(children, function (child) {
                $Jssor$.$AppendChild($Jssor$.$AttributeEx(child, "noscale") ? elmt : innerWrapper, child);
                //$Jssor$.$AppendChild(noMoveElmts[$Jssor$.$AttributeEx(child, "u")] ? elmt : innerWrapper, child);
            });
        }

        $JssorDebug$.$Execute(function () {
            if (!dimension || dimension < 0) {
                $JssorDebug$.$Fail("'$ScaleWidth' error, 'dimension' should be positive value.");
            }
        });

        $JssorDebug$.$Execute(function () {
            if (!_InitialScrollWidth) {
                _InitialScrollWidth = _SelfSlider.$Elmt.scrollWidth;
            }
        });

        _ScaleRatio = dimension / (isHeight ? $Jssor$.$CssHeight : $Jssor$.$CssWidth)(_ScaleWrapper);
        $Jssor$.$CssScale(_ScaleWrapper, _ScaleRatio);

        var scaleWidth = isHeight ? (_ScaleRatio * OriginalWidth()) : dimension;
        var scaleHeight = isHeight ? dimension : (_ScaleRatio * OriginalHeight());

        $Jssor$.$CssWidth(elmt, scaleWidth);
        $Jssor$.$CssHeight(elmt, scaleHeight);

        $Jssor$.$Each(_Navigators, function (navigator) {
            navigator.$Relocate(scaleWidth, scaleHeight);
        });
    }

    _SelfSlider.$ScaleHeight = _SelfSlider.$GetScaleHeight = function (height) {
        ///	<summary>
        ///		instance.$ScaleHeight();   //Retrieve scaled height the slider currently displays.
        ///		instance.$ScaleHeight( dimension );   //Scale the slider to new height and keep aspect ratio.
        ///	</summary>

        if (height == undefined)
            return $Jssor$.$CssHeight(elmt);

        Scale(height, true);
    };

    _SelfSlider.$ScaleWidth = _SelfSlider.$SetScaleWidth = _SelfSlider.$GetScaleWidth = Scale;

    _SelfSlider.$GetVirtualIndex = function (index) {
        var parkingIndex = Math.ceil(GetRealIndex(_ParkingPosition / _StepLength));
        var displayIndex = GetRealIndex(index - _CurrentSlideIndex + parkingIndex);

        if (displayIndex > _DisplayPieces) {
            if (index - _CurrentSlideIndex > _SlideCount / 2)
                index -= _SlideCount;
            else if (index - _CurrentSlideIndex <= -_SlideCount / 2)
                index += _SlideCount;
        }
        else {
            index = _CurrentSlideIndex + displayIndex - parkingIndex;
        }

        return index;
    };

    //member functions

    $JssorObject$.call(_SelfSlider);

    $JssorDebug$.$Execute(function () {
        var outerContainerElmt = $Jssor$.$GetElement(elmt);
        if (!outerContainerElmt)
            $JssorDebug$.$Fail("Outer container '" + elmt + "' not found.");
    });

    //initialize member variables
    _SelfSlider.$Elmt = elmt = $Jssor$.$GetElement(elmt);
    //initialize member variables

    var _InitialScrollWidth;    //for debug only
    var _CaptionSliderCount = 1;    //for debug only

    var _Options = $Jssor$.$Extend({
        $FillMode: 0,                   //[Optional] The way to fill image in slide, 0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, 5 contain for large image, actual size for small image, default value is 0
        $LazyLoading: 1,                //[Optional] For image with  lazy loading format (<IMG src2="url" .../>), by default it will be loaded only when the slide comes.
        //But an integer value (maybe 0, 1, 2 or 3) indicates that how far of nearby slides should be loaded immediately as well, default value is 1.
        $StartIndex: 0,                 //[Optional] Index of slide to display when initialize, default value is 0
        $AutoPlay: false,               //[Optional] Whether to auto play, default value is false
        $Loop: 1,                       //[Optional] Enable loop(circular) of carousel or not, 0: stop, 1: loop, 2 rewind, default value is 1
        $HWA: true,                     //[Optional] Enable hardware acceleration or not, default value is true
        $NaviQuitDrag: true,
        $AutoPlaySteps: 1,              //[Optional] Steps to go of every play (this options applys only when slideshow disabled), default value is 1
        $AutoPlayInterval: 3000,        //[Optional] Interval to play next slide since the previous stopped if a slideshow is auto playing, default value is 3000
        $PauseOnHover: 1,               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

        $SlideDuration: 500,            //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 400
        $SlideEasing: $JssorEasing$.$EaseOutQuad,   //[Optional] Specifies easing for right to left animation, default value is $JssorEasing$.$EaseOutQuad
        $MinDragOffsetToSlide: 20,      //[Optional] Minimum drag offset that trigger slide, default value is 20
        $SlideSpacing: 0, 				//[Optional] Space between each slide in pixels, default value is 0
        $DisplayPieces: 1,              //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), default value is 1
        $ParkingPosition: 0,            //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
        $UISearchMode: 1,               //[Optional] The way (0 parellel, 1 recursive, default value is recursive) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc.
        $PlayOrientation: 1,            //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
        $DragOrientation: 1             //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 both, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

    }, options);

    //going to use $Idle instead of $AutoPlayInterval
    if (_Options.$Idle != undefined)
        _Options.$AutoPlayInterval = _Options.$Idle;

    //going to use $Cols instead of $DisplayPieces
    if (_Options.$Cols != undefined)
        _Options.$DisplayPieces = _Options.$Cols;

    //Sodo statement for development time intellisence only
    $JssorDebug$.$Execute(function () {
        _Options = $Jssor$.$Extend({
            $ArrowKeyNavigation: undefined,
            $SlideWidth: undefined,
            $SlideHeight: undefined,
            $SlideshowOptions: undefined,
            $CaptionSliderOptions: undefined,
            $BulletNavigatorOptions: undefined,
            $ArrowNavigatorOptions: undefined,
            $ThumbnailNavigatorOptions: undefined
        },
        _Options);
    });

    var _PlayOrientation = _Options.$PlayOrientation & 3;
    var _PlayReverse = (_Options.$PlayOrientation & 4) / -4 || 1;

    var _SlideshowOptions = _Options.$SlideshowOptions;
    var _CaptionSliderOptions = $Jssor$.$Extend({ $Class: $JssorCaptionSliderBase$, $PlayInMode: 1, $PlayOutMode: 1 }, _Options.$CaptionSliderOptions);
    //$Jssor$.$TranslateTransitions(_CaptionSliderOptions.$CaptionTransitions); //for old transition compatibility
    var _BulletNavigatorOptions = _Options.$BulletNavigatorOptions;
    var _ArrowNavigatorOptions = _Options.$ArrowNavigatorOptions;
    var _ThumbnailNavigatorOptions = _Options.$ThumbnailNavigatorOptions;

    $JssorDebug$.$Execute(function () {
        if (_SlideshowOptions && !_SlideshowOptions.$Class) {
            $JssorDebug$.$Fail("Option $SlideshowOptions error, class not specified.");
        }
    });

    $JssorDebug$.$Execute(function () {
        if (_Options.$CaptionSliderOptions && !_Options.$CaptionSliderOptions.$Class) {
            $JssorDebug$.$Fail("Option $CaptionSliderOptions error, class not specified.");
        }
    });

    $JssorDebug$.$Execute(function () {
        if (_BulletNavigatorOptions && !_BulletNavigatorOptions.$Class) {
            $JssorDebug$.$Fail("Option $BulletNavigatorOptions error, class not specified.");
        }
    });

    $JssorDebug$.$Execute(function () {
        if (_ArrowNavigatorOptions && !_ArrowNavigatorOptions.$Class) {
            $JssorDebug$.$Fail("Option $ArrowNavigatorOptions error, class not specified.");
        }
    });

    $JssorDebug$.$Execute(function () {
        if (_ThumbnailNavigatorOptions && !_ThumbnailNavigatorOptions.$Class) {
            $JssorDebug$.$Fail("Option $ThumbnailNavigatorOptions error, class not specified.");
        }
    });

    var _UISearchNoDeep = !_Options.$UISearchMode;
    var _ScaleWrapper;
    var _SlidesContainer = $Jssor$.$FindChild(elmt, "slides", _UISearchNoDeep);
    var _LoadingContainer = $Jssor$.$FindChild(elmt, "loading", _UISearchNoDeep) || $Jssor$.$CreateDiv(document);

    var _BulletNavigatorContainer = $Jssor$.$FindChild(elmt, "navigator", _UISearchNoDeep);

    var _ArrowLeft = $Jssor$.$FindChild(elmt, "arrowleft", _UISearchNoDeep);
    var _ArrowRight = $Jssor$.$FindChild(elmt, "arrowright", _UISearchNoDeep);

    var _ThumbnailNavigatorContainer = $Jssor$.$FindChild(elmt, "thumbnavigator", _UISearchNoDeep);

    $JssorDebug$.$Execute(function () {
        //if (_BulletNavigatorOptions && !_BulletNavigatorContainer) {
        //    throw new Error("$BulletNavigatorOptions specified but bullet navigator container (<div u=\"navigator\" ...) not defined.");
        //}
        if (_BulletNavigatorContainer && !_BulletNavigatorOptions) {
            throw new Error("Bullet navigator container defined but $BulletNavigatorOptions not specified.");
        }

        //if (_ArrowNavigatorOptions) {
        //    if (!_ArrowLeft) {
        //        throw new Error("$ArrowNavigatorOptions specified, but arrowleft (<span u=\"arrowleft\" ...) not defined.");
        //    }

        //    if (!_ArrowRight) {
        //        throw new Error("$ArrowNavigatorOptions specified, but arrowright (<span u=\"arrowright\" ...) not defined.");
        //    }
        //}

        if ((_ArrowLeft || _ArrowRight) && !_ArrowNavigatorOptions) {
            throw new Error("arrowleft or arrowright defined, but $ArrowNavigatorOptions not specified.");
        }

        //if (_ThumbnailNavigatorOptions && !_ThumbnailNavigatorContainer) {
        //    throw new Error("$ThumbnailNavigatorOptions specified, but thumbnail navigator container (<div u=\"thumbnavigator\" ...) not defined.");
        //}

        if (_ThumbnailNavigatorContainer && !_ThumbnailNavigatorOptions) {
            throw new Error("Thumbnail navigator container defined, but $ThumbnailNavigatorOptions not specified.");
        }
    });

    var _SlidesContainerWidth = $Jssor$.$CssWidth(_SlidesContainer);
    var _SlidesContainerHeight = $Jssor$.$CssHeight(_SlidesContainer);

    $JssorDebug$.$Execute(function () {
        if (isNaN(_SlidesContainerWidth))
            $JssorDebug$.$Fail("Width of slides container wrong specification, it should be specified in pixel (like style='width: 600px;').");

        if (_SlidesContainerWidth == undefined)
            $JssorDebug$.$Fail("Width of slides container not specified, it should be specified in pixel (like style='width: 600px;').");

        if (isNaN(_SlidesContainerHeight))
            $JssorDebug$.$Fail("Height of slides container wrong specification, it should be specified in pixel (like style='height: 300px;').");

        if (_SlidesContainerHeight == undefined)
            $JssorDebug$.$Fail("Height of slides container not specified, it should be specified in pixel (like style='height: 300px;').");

        var slidesContainerOverflow = $Jssor$.$CssOverflow(_SlidesContainer);
        var slidesContainerOverflowX = $Jssor$.$Css(_SlidesContainer, "overflowX");
        var slidesContainerOverflowY = $Jssor$.$Css(_SlidesContainer, "overflowY");
        if (slidesContainerOverflow != "hidden" && (slidesContainerOverflowX != "hidden" || slidesContainerOverflowY != "hidden"))
            $JssorDebug$.$Fail("Overflow of slides container wrong specification, it should be specified as 'hidden' (style='overflow:hidden;').");
    });

    $JssorDebug$.$Execute(function () {
        if (!$Jssor$.$IsNumeric(_Options.$DisplayPieces))
            $JssorDebug$.$Fail("Option $DisplayPieces error, it should be a numeric value and greater than or equal to 1.");

        if (_Options.$DisplayPieces < 1)
            $JssorDebug$.$Fail("Option $DisplayPieces error, it should be greater than or equal to 1.");

        if (_Options.$DisplayPieces > 1 && _Options.$DragOrientation && _Options.$DragOrientation != _PlayOrientation)
            $JssorDebug$.$Fail("Option $DragOrientation error, it should be 0 or the same of $PlayOrientation when $DisplayPieces is greater than 1.");

        if (!$Jssor$.$IsNumeric(_Options.$ParkingPosition))
            $JssorDebug$.$Fail("Option $ParkingPosition error, it should be a numeric value.");

        if (_Options.$ParkingPosition && _Options.$DragOrientation && _Options.$DragOrientation != _PlayOrientation)
            $JssorDebug$.$Fail("Option $DragOrientation error, it should be 0 or the same of $PlayOrientation when $ParkingPosition is not equal to 0.");
    });

    var _StyleDef;

    var _SlideElmts = [];

    {
        var slideElmts = $Jssor$.$Children(_SlidesContainer);
        $Jssor$.$Each(slideElmts, function (slideElmt) {
            if (slideElmt.tagName == "DIV" && !$Jssor$.$AttributeEx(slideElmt, "u")) {
                _SlideElmts.push(slideElmt);
            }
            else if ($Jssor$.$IsBrowserIe9Earlier()) {
                $Jssor$.$CssZIndex(slideElmt, ($Jssor$.$CssZIndex(slideElmt) || 0) + 1);
            }
        });
    }

    $JssorDebug$.$Execute(function () {
        if (_SlideElmts.length < 1) {
            $JssorDebug$.$Error("Slides html code definition error, there must be at least 1 slide to initialize a slider.");
        }
    });

    var _SlideItemCreatedCount = 0; //for debug only
    var _SlideItemReleasedCount = 0;    //for debug only

    var _PreviousSlideIndex;
    var _CurrentSlideIndex = -1;
    var _TempSlideIndex;
    var _PrevSlideItem;
    var _CurrentSlideItem;
    var _SlideCount = _SlideElmts.length;

    var _SlideWidth = _Options.$SlideWidth || _SlidesContainerWidth;
    var _SlideHeight = _Options.$SlideHeight || _SlidesContainerHeight;

    var _SlideSpacing = _Options.$SlideSpacing;
    var _StepLengthX = _SlideWidth + _SlideSpacing;
    var _StepLengthY = _SlideHeight + _SlideSpacing;
    var _StepLength = (_PlayOrientation & 1) ? _StepLengthX : _StepLengthY;
    var _DisplayPieces = Math.min(_Options.$DisplayPieces, _SlideCount);

    var _SlideshowPanel;
    var _CurrentBoardIndex = 0;
    var _DragOrientation;
    var _DragOrientationRegistered;
    var _DragInvalid;

    var _Navigators = [];
    var _BulletNavigator;
    var _ArrowNavigator;
    var _ThumbnailNavigator;

    var _ShowLink;

    var _Frozen;
    var _AutoPlay;
    var _AutoPlaySteps = _Options.$AutoPlaySteps;
    var _HoverToPause = _Options.$PauseOnHover;
    var _AutoPlayInterval = _Options.$AutoPlayInterval;
    var _SlideDuration = _Options.$SlideDuration;

    var _SlideshowRunnerClass;
    var _TransitionsOrder;

    var _SlideshowEnabled;
    var _ParkingPosition;
    var _CarouselEnabled = _DisplayPieces < _SlideCount;
    var _Loop = _CarouselEnabled ? _Options.$Loop : 0;

    var _DragEnabled;
    var _LastDragSucceded;

    var _NotOnHover = 1;   //0 Hovering, 1 Not hovering

    //Variable Definition
    var _IsSliding;
    var _IsDragging;
    var _LoadingTicket;

    //The X position of mouse/touch when a drag start
    var _DragStartMouseX = 0;
    //The Y position of mouse/touch when a drag start
    var _DragStartMouseY = 0;
    var _DragOffsetTotal;
    var _DragOffsetLastTime;
    var _DragIndexAdjust;

    var _Carousel;
    var _Conveyor;
    var _Slideshow;
    var _CarouselPlayer;
    var _SlideContainer = new SlideContainer();
    var _ScaleRatio;

    //$JssorSlider$ Constructor
    {
        _AutoPlay = _Options.$AutoPlay;
        _SelfSlider.$Options = options;

        AdjustSlidesContainerSize();

        $Jssor$.$Attribute(elmt, "jssor-slider", true);

        $Jssor$.$CssZIndex(_SlidesContainer, $Jssor$.$CssZIndex(_SlidesContainer) || 0);
        $Jssor$.$CssPosition(_SlidesContainer, "absolute");
        _SlideshowPanel = $Jssor$.$CloneNode(_SlidesContainer, true);
        $Jssor$.$InsertBefore(_SlideshowPanel, _SlidesContainer);

        if (_SlideshowOptions) {
            _ShowLink = _SlideshowOptions.$ShowLink;
            _SlideshowRunnerClass = _SlideshowOptions.$Class;

            $JssorDebug$.$Execute(function () {
                if (!_SlideshowOptions.$Transitions || !_SlideshowOptions.$Transitions.length) {
                    $JssorDebug$.$Error("Invalid '$SlideshowOptions', no '$Transitions' specified.");
                }
            });

            _SlideshowEnabled = _DisplayPieces == 1 && _SlideCount > 1 && _SlideshowRunnerClass && (!$Jssor$.$IsBrowserIE() || $Jssor$.$BrowserVersion() >= 8);
        }

        _ParkingPosition = (_SlideshowEnabled || _DisplayPieces >= _SlideCount || !(_Loop & 1)) ? 0 : _Options.$ParkingPosition;

        _DragEnabled = ((_DisplayPieces > 1 || _ParkingPosition) ? _PlayOrientation : -1) & _Options.$DragOrientation;

        //SlideBoard
        var _SlideboardElmt = _SlidesContainer;
        var _SlideItems = [];

        var _SlideshowRunner;
        var _LinkContainer;

        var _Device = $Jssor$.$Device();
        var _IsTouchDevice = _Device.$Touchable;

        var _LastTimeMoveByDrag;
        var _Position_OnFreeze;
        var _CarouselPlaying_OnFreeze;
        var _PlayToPosition_OnFreeze;
        var _PositionToGoByDrag;

        //SlideBoard Constructor
        {
            if (_Device.$TouchActionAttr) {
                $Jssor$.$Css(_SlideboardElmt, _Device.$TouchActionAttr, [null, "pan-y", "pan-x", "none"][_DragEnabled] || "");
            }

            _Slideshow = new Slideshow();

            if (_SlideshowEnabled)
                _SlideshowRunner = new _SlideshowRunnerClass(_SlideContainer, _SlideWidth, _SlideHeight, _SlideshowOptions, _IsTouchDevice);

            $Jssor$.$AppendChild(_SlideshowPanel, _Slideshow.$Wrapper);
            $Jssor$.$CssOverflow(_SlidesContainer, "hidden");

            //link container
            {
                _LinkContainer = CreatePanel();
                $Jssor$.$Css(_LinkContainer, "backgroundColor", "#000");
                $Jssor$.$CssOpacity(_LinkContainer, 0);
                $Jssor$.$InsertBefore(_LinkContainer, _SlideboardElmt.firstChild, _SlideboardElmt);
            }

            for (var i = 0; i < _SlideElmts.length; i++) {
                var slideElmt = _SlideElmts[i];
                var slideItem = new SlideItem(slideElmt, i);
                _SlideItems.push(slideItem);
            }

            $Jssor$.$HideElement(_LoadingContainer);

            $JssorDebug$.$Execute(function () {
                $Jssor$.$Attribute(_LoadingContainer, "debug-id", "loading-container");
            });

            _Carousel = new Carousel();
            _CarouselPlayer = new CarouselPlayer(_Carousel, _Slideshow);

            $JssorDebug$.$Execute(function () {
                $Jssor$.$Attribute(_SlideboardElmt, "debug-id", "slide-board");
            });

            if (_DragEnabled) {
                $Jssor$.$AddEvent(_SlidesContainer, "mousedown", OnDragStart);
                $Jssor$.$AddEvent(_SlidesContainer, "touchstart", OnTouchStart);
                $Jssor$.$AddEvent(_SlidesContainer, "dragstart", PreventDragSelectionEvent);
                $Jssor$.$AddEvent(_SlidesContainer, "selectstart", PreventDragSelectionEvent);
                $Jssor$.$AddEvent(document, "mouseup", OnDragEnd);
                $Jssor$.$AddEvent(document, "touchend", OnDragEnd);
                $Jssor$.$AddEvent(document, "touchcancel", OnDragEnd);
                $Jssor$.$AddEvent(window, "blur", OnDragEnd);
            }
        }
        //SlideBoard

        _HoverToPause &= (_IsTouchDevice ? 10 : 5);

        //Bullet Navigator
        if (_BulletNavigatorContainer && _BulletNavigatorOptions) {
            _BulletNavigator = new _BulletNavigatorOptions.$Class(_BulletNavigatorContainer, _BulletNavigatorOptions, OriginalWidth(), OriginalHeight());
            _Navigators.push(_BulletNavigator);
        }

        //Arrow Navigator
        if (_ArrowNavigatorOptions && _ArrowLeft && _ArrowRight) {
            _ArrowNavigatorOptions.$Loop = _Loop;
            _ArrowNavigatorOptions.$DisplayPieces = _DisplayPieces;
            _ArrowNavigator = new _ArrowNavigatorOptions.$Class(_ArrowLeft, _ArrowRight, _ArrowNavigatorOptions, OriginalWidth(), OriginalHeight());
            _Navigators.push(_ArrowNavigator);
        }

        //Thumbnail Navigator
        if (_ThumbnailNavigatorContainer && _ThumbnailNavigatorOptions) {
            _ThumbnailNavigatorOptions.$StartIndex = _Options.$StartIndex;
            _ThumbnailNavigator = new _ThumbnailNavigatorOptions.$Class(_ThumbnailNavigatorContainer, _ThumbnailNavigatorOptions);
            _Navigators.push(_ThumbnailNavigator);
        }

        $Jssor$.$Each(_Navigators, function (navigator) {
            navigator.$Reset(_SlideCount, _SlideItems, _LoadingContainer);
            navigator.$On($JssorNavigatorEvents$.$NAVIGATIONREQUEST, NavigationClickHandler);
        });

        Scale(OriginalWidth());

        $Jssor$.$AddEvent(_SlidesContainer, "click", SlidesClickEventHandler);
        $Jssor$.$AddEvent(elmt, "mouseout", $Jssor$.$MouseOverOutFilter(MainContainerMouseLeaveEventHandler, elmt));
        $Jssor$.$AddEvent(elmt, "mouseover", $Jssor$.$MouseOverOutFilter(MainContainerMouseEnterEventHandler, elmt));

        ShowNavigators();

        //Keyboard Navigation
        if (_Options.$ArrowKeyNavigation) {
            $Jssor$.$AddEvent(document, "keydown", function (e) {
                if (e.keyCode == 37/*$JssorKeyCode$.$LEFT*/) {
                    //Arrow Left
                    PlayToOffset(-1);
                }
                else if (e.keyCode == 39/*$JssorKeyCode$.$RIGHT*/) {
                    //Arrow Right
                    PlayToOffset(1);
                }
            });
        }

        var startPosition = _Options.$StartIndex;
        if (!(_Loop & 1)) {
            startPosition = Math.max(0, Math.min(startPosition, _SlideCount - _DisplayPieces));
        }
        _CarouselPlayer.$PlayCarousel(startPosition, startPosition, 0);
    }
};
var $JssorSlideo$ = window.$JssorSlideo$ = $JssorSlider$;

$JssorSlider$.$EVT_CLICK = 21;
$JssorSlider$.$EVT_DRAG_START = 22;
$JssorSlider$.$EVT_DRAG_END = 23;
$JssorSlider$.$EVT_SWIPE_START = 24;
$JssorSlider$.$EVT_SWIPE_END = 25;

$JssorSlider$.$EVT_LOAD_START = 26;
$JssorSlider$.$EVT_LOAD_END = 27;
$JssorSlider$.$EVT_FREEZE = 28;

$JssorSlider$.$EVT_POSITION_CHANGE = 202;
$JssorSlider$.$EVT_PARK = 203;

$JssorSlider$.$EVT_SLIDESHOW_START = 206;
$JssorSlider$.$EVT_SLIDESHOW_END = 207;

$JssorSlider$.$EVT_PROGRESS_CHANGE = 208;
$JssorSlider$.$EVT_STATE_CHANGE = 209;
$JssorSlider$.$EVT_ROLLBACK_START = 210;
$JssorSlider$.$EVT_ROLLBACK_END = 211;

//(function ($) {
//    jQuery.fn.jssorSlider = function (options) {
//        return this.each(function () {
//            return $(this).data('jssorSlider') || $(this).data('jssorSlider', new $JssorSlider$(this, options));
//        });
//    };
//})(jQuery);

//window.jQuery && (jQuery.fn.jssorSlider = function (options) {
//    return this.each(function () {
//        return jQuery(this).data('jssorSlider') || jQuery(this).data('jssorSlider', new $JssorSlider$(this, options));
//    });
//});

//$JssorBulletNavigator$
var $JssorNavigatorEvents$ = {
    $NAVIGATIONREQUEST: 1,
    $INDEXCHANGE: 2,
    $RESET: 3
};

var $JssorBulletNavigator$ = window.$JssorBulletNavigator$ = function (elmt, options, containerWidth, containerHeight) {
    var self = this;
    $JssorObject$.call(self);

    elmt = $Jssor$.$GetElement(elmt);

    var _Count;
    var _Length;
    var _Width;
    var _Height;
    var _CurrentIndex;
    var _CurrentInnerIndex = 0;
    var _Options;
    var _Steps;
    var _Lanes;
    var _SpacingX;
    var _SpacingY;
    var _Orientation;
    var _ItemPrototype;
    var _PrototypeWidth;
    var _PrototypeHeight;

    var _ButtonElements = [];
    var _Buttons = [];

    function Highlight(index) {
        if (index != -1)
            _Buttons[index].$Selected(index == _CurrentInnerIndex);
    }

    function OnNavigationRequest(index) {
        self.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, index * _Steps);
    }

    self.$Elmt = elmt;
    self.$GetCurrentIndex = function () {
        return _CurrentIndex;
    };

    self.$SetCurrentIndex = function (index) {
        if (index != _CurrentIndex) {
            var lastInnerIndex = _CurrentInnerIndex;
            var innerIndex = Math.floor(index / _Steps);
            _CurrentInnerIndex = innerIndex;
            _CurrentIndex = index;

            Highlight(lastInnerIndex);
            Highlight(innerIndex);

            //self.$TriggerEvent($JssorNavigatorEvents$.$INDEXCHANGE, index);
        }
    };

    self.$Show = function (hide) {
        $Jssor$.$ShowElement(elmt, hide);
    };

    var _Located;
    self.$Relocate = function (containerWidth, containerHeight) {
        if (!_Located || _Options.$Scale == false) {
            var containerWidth = $Jssor$.$ParentNode(elmt).clientWidth;
            var containerHeight = $Jssor$.$ParentNode(elmt).clientHeight;

            if (_Options.$AutoCenter & 1) {
                $Jssor$.$CssLeft(elmt, (containerWidth - _Width) / 2);
            }
            if (_Options.$AutoCenter & 2) {
                $Jssor$.$CssTop(elmt, (containerHeight - _Height) / 2);
            }

            _Located = true;
        }
    };

    var _Initialized;
    self.$Reset = function (length) {
        if (!_Initialized) {
            _Length = length;
            _Count = Math.ceil(length / _Steps);
            _CurrentInnerIndex = 0;

            var itemOffsetX = _PrototypeWidth + _SpacingX;
            var itemOffsetY = _PrototypeHeight + _SpacingY;

            var maxIndex = Math.ceil(_Count / _Lanes) - 1;

            _Width = _PrototypeWidth + itemOffsetX * (!_Orientation ? maxIndex : _Lanes - 1);
            _Height = _PrototypeHeight + itemOffsetY * (_Orientation ? maxIndex : _Lanes - 1);

            $Jssor$.$CssWidth(elmt, _Width);
            $Jssor$.$CssHeight(elmt, _Height);

            for (var buttonIndex = 0; buttonIndex < _Count; buttonIndex++) {

                var numberDiv = $Jssor$.$CreateSpan();
                $Jssor$.$InnerText(numberDiv, buttonIndex + 1);

                var div = $Jssor$.$BuildElement(_ItemPrototype, "numbertemplate", numberDiv, true);
                $Jssor$.$CssPosition(div, "absolute");

                var columnIndex = buttonIndex % (maxIndex + 1);
                $Jssor$.$CssLeft(div, !_Orientation ? itemOffsetX * columnIndex : buttonIndex % _Lanes * itemOffsetX);
                $Jssor$.$CssTop(div, _Orientation ? itemOffsetY * columnIndex : Math.floor(buttonIndex / (maxIndex + 1)) * itemOffsetY);

                $Jssor$.$AppendChild(elmt, div);
                _ButtonElements[buttonIndex] = div;

                if (_Options.$ActionMode & 1)
                    $Jssor$.$AddEvent(div, "click", $Jssor$.$CreateCallback(null, OnNavigationRequest, buttonIndex));

                if (_Options.$ActionMode & 2)
                    $Jssor$.$AddEvent(div, "mouseover", $Jssor$.$MouseOverOutFilter($Jssor$.$CreateCallback(null, OnNavigationRequest, buttonIndex), div));

                _Buttons[buttonIndex] = $Jssor$.$Buttonize(div);
            }

            //self.$TriggerEvent($JssorNavigatorEvents$.$RESET);
            _Initialized = true;
        }
    };

    //JssorBulletNavigator Constructor
    {
        self.$Options = _Options = $Jssor$.$Extend({
            $SpacingX: 0,
            $SpacingY: 0,
            $Orientation: 1,
            $ActionMode: 1
        }, options);

        //Sodo statement for development time intellisence only
        $JssorDebug$.$Execute(function () {
            _Options = $Jssor$.$Extend({
                $Steps: undefined,
                $Lanes: undefined
            }, _Options);
        });

        _ItemPrototype = $Jssor$.$FindChild(elmt, "prototype");

        $JssorDebug$.$Execute(function () {
            if (!_ItemPrototype)
                $JssorDebug$.$Fail("Navigator item prototype not defined.");

            if (isNaN($Jssor$.$CssWidth(_ItemPrototype))) {
                $JssorDebug$.$Fail("Width of 'navigator item prototype' not specified.");
            }

            if (isNaN($Jssor$.$CssHeight(_ItemPrototype))) {
                $JssorDebug$.$Fail("Height of 'navigator item prototype' not specified.");
            }
        });

        _PrototypeWidth = $Jssor$.$CssWidth(_ItemPrototype);
        _PrototypeHeight = $Jssor$.$CssHeight(_ItemPrototype);

        $Jssor$.$RemoveElement(_ItemPrototype, elmt);

        _Steps = _Options.$Steps || 1;
        _Lanes = _Options.$Lanes || 1;
        _SpacingX = _Options.$SpacingX;
        _SpacingY = _Options.$SpacingY;
        _Orientation = _Options.$Orientation - 1;

        if (_Options.$Scale == false) {
            $Jssor$.$Attribute(elmt, "noscale", true);
        }
    }
};

var $JssorArrowNavigator$ = window.$JssorArrowNavigator$ = function (arrowLeft, arrowRight, options, containerWidth, containerHeight) {
    var self = this;
    $JssorObject$.call(self);

    $JssorDebug$.$Execute(function () {

        if (!arrowLeft)
            $JssorDebug$.$Fail("Option '$ArrowNavigatorOptions' spepcified, but UI 'arrowleft' not defined. Define 'arrowleft' to enable direct navigation, or remove option '$ArrowNavigatorOptions' to disable direct navigation.");

        if (!arrowRight)
            $JssorDebug$.$Fail("Option '$ArrowNavigatorOptions' spepcified, but UI 'arrowright' not defined. Define 'arrowright' to enable direct navigation, or remove option '$ArrowNavigatorOptions' to disable direct navigation.");

        if (isNaN($Jssor$.$CssWidth(arrowLeft))) {
            $JssorDebug$.$Fail("Width of 'arrow left' not specified.");
        }

        if (isNaN($Jssor$.$CssWidth(arrowRight))) {
            $JssorDebug$.$Fail("Width of 'arrow right' not specified.");
        }

        if (isNaN($Jssor$.$CssHeight(arrowLeft))) {
            $JssorDebug$.$Fail("Height of 'arrow left' not specified.");
        }

        if (isNaN($Jssor$.$CssHeight(arrowRight))) {
            $JssorDebug$.$Fail("Height of 'arrow right' not specified.");
        }
    });

    var _Hide;
    var _Length;
    var _CurrentIndex;
    var _Options;
    var _Steps;
    var _ArrowWidth = $Jssor$.$CssWidth(arrowLeft);
    var _ArrowHeight = $Jssor$.$CssHeight(arrowLeft);

    function OnNavigationRequest(steps) {
        self.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, steps, true);
    }

    function ShowArrows(hide) {
        $Jssor$.$ShowElement(arrowLeft, hide || !options.$Loop && _CurrentIndex == 0);
        $Jssor$.$ShowElement(arrowRight, hide || !options.$Loop && _CurrentIndex >= _Length - options.$DisplayPieces);

        _Hide = hide;
    }

    self.$GetCurrentIndex = function () {
        return _CurrentIndex;
    };

    self.$SetCurrentIndex = function (index, virtualIndex, temp) {
        if (temp) {
            _CurrentIndex = virtualIndex;
        }
        else {
            _CurrentIndex = index;

            ShowArrows(_Hide);
        }
        //self.$TriggerEvent($JssorNavigatorEvents$.$INDEXCHANGE, index);
    };

    self.$Show = ShowArrows;

    var _Located;
    self.$Relocate = function (conainerWidth, containerHeight) {
        if (!_Located || _Options.$Scale == false) {

            var containerWidth = $Jssor$.$ParentNode(arrowLeft).clientWidth;
            var containerHeight = $Jssor$.$ParentNode(arrowLeft).clientHeight;

            if (_Options.$AutoCenter & 1) {
                $Jssor$.$CssLeft(arrowLeft, (containerWidth - _ArrowWidth) / 2);
                $Jssor$.$CssLeft(arrowRight, (containerWidth - _ArrowWidth) / 2);
            }

            if (_Options.$AutoCenter & 2) {
                $Jssor$.$CssTop(arrowLeft, (containerHeight - _ArrowHeight) / 2);
                $Jssor$.$CssTop(arrowRight, (containerHeight - _ArrowHeight) / 2);
            }

            _Located = true;
        }
    };

    var _Initialized;
    self.$Reset = function (length) {
        _Length = length;
        _CurrentIndex = 0;

        if (!_Initialized) {

            $Jssor$.$AddEvent(arrowLeft, "click", $Jssor$.$CreateCallback(null, OnNavigationRequest, -_Steps));
            $Jssor$.$AddEvent(arrowRight, "click", $Jssor$.$CreateCallback(null, OnNavigationRequest, _Steps));

            $Jssor$.$Buttonize(arrowLeft);
            $Jssor$.$Buttonize(arrowRight);

            _Initialized = true;
        }

        //self.$TriggerEvent($JssorNavigatorEvents$.$RESET);
    };

    //JssorArrowNavigator Constructor
    {
        self.$Options = _Options = $Jssor$.$Extend({
            $Steps: 1
        }, options);

        _Steps = _Options.$Steps;

        if (_Options.$Scale == false) {
            $Jssor$.$Attribute(arrowLeft, "noscale", true);
            $Jssor$.$Attribute(arrowRight, "noscale", true);
        }
    }
};

//$JssorThumbnailNavigator$
var $JssorThumbnailNavigator$ = window.$JssorThumbnailNavigator$ = function (elmt, options) {
    var _Self = this;
    var _Length;
    var _Count;
    var _CurrentIndex;
    var _Options;
    var _NavigationItems = [];

    var _Width;
    var _Height;
    var _Lanes;
    var _SpacingX;
    var _SpacingY;
    var _PrototypeWidth;
    var _PrototypeHeight;
    var _DisplayPieces;

    var _Slider;
    var _CurrentMouseOverIndex = -1;

    var _SlidesContainer;
    var _ThumbnailPrototype;

    $JssorObject$.call(_Self);
    elmt = $Jssor$.$GetElement(elmt);

    function NavigationItem(item, index) {
        var self = this;
        var _Wrapper;
        var _Button;
        var _Thumbnail;

        function Highlight(mouseStatus) {
            _Button.$Selected(_CurrentIndex == index);
        }

        function OnNavigationRequest(event) {
            if (!_Slider.$LastDragSucceded()) {
                var tail = _Lanes - index % _Lanes;
                var slideVirtualIndex = _Slider.$GetVirtualIndex((index + tail) / _Lanes - 1);
                var itemVirtualIndex = slideVirtualIndex * _Lanes + _Lanes - tail;
                _Self.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, itemVirtualIndex);
            }

            //$JssorDebug$.$Log("navigation request");
        }

        $JssorDebug$.$Execute(function () {
            self.$Wrapper = undefined;
        });

        self.$Index = index;

        self.$Highlight = Highlight;

        //NavigationItem Constructor
        {
            _Thumbnail = item.$Thumb || item.$Image || $Jssor$.$CreateDiv();
            self.$Wrapper = _Wrapper = $Jssor$.$BuildElement(_ThumbnailPrototype, "thumbnailtemplate", _Thumbnail, true);

            _Button = $Jssor$.$Buttonize(_Wrapper);
            if (_Options.$ActionMode & 1)
                $Jssor$.$AddEvent(_Wrapper, "click", OnNavigationRequest);
            if (_Options.$ActionMode & 2)
                $Jssor$.$AddEvent(_Wrapper, "mouseover", $Jssor$.$MouseOverOutFilter(OnNavigationRequest, _Wrapper));
        }
    }

    _Self.$GetCurrentIndex = function () {
        return _CurrentIndex;
    };

    _Self.$SetCurrentIndex = function (index, virtualIndex, temp) {
        var oldIndex = _CurrentIndex;
        _CurrentIndex = index;
        if (oldIndex != -1)
            _NavigationItems[oldIndex].$Highlight();
        _NavigationItems[index].$Highlight();

        if (!temp) {
            _Slider.$PlayTo(_Slider.$GetVirtualIndex(Math.floor(virtualIndex / _Lanes)));
        }
    };

    _Self.$Show = function (hide) {
        $Jssor$.$ShowElement(elmt, hide);
    };

    _Self.$Relocate = $Jssor$.$EmptyFunction;

    var _Initialized;
    _Self.$Reset = function (length, items, loadingContainer) {
        if (!_Initialized) {
            _Length = length;
            _Count = Math.ceil(_Length / _Lanes);
            _CurrentIndex = -1;
            _DisplayPieces = Math.min(_DisplayPieces, items.length);

            var horizontal = _Options.$Orientation & 1;

            var slideWidth = _PrototypeWidth + (_PrototypeWidth + _SpacingX) * (_Lanes - 1) * (1 - horizontal);
            var slideHeight = _PrototypeHeight + (_PrototypeHeight + _SpacingY) * (_Lanes - 1) * horizontal;

            var slidesContainerWidth = slideWidth + (slideWidth + _SpacingX) * (_DisplayPieces - 1) * horizontal;
            var slidesContainerHeight = slideHeight + (slideHeight + _SpacingY) * (_DisplayPieces - 1) * (1 - horizontal);

            $Jssor$.$CssPosition(_SlidesContainer, "absolute");
            $Jssor$.$CssOverflow(_SlidesContainer, "hidden");
            if (_Options.$AutoCenter & 1) {
                $Jssor$.$CssLeft(_SlidesContainer, (_Width - slidesContainerWidth) / 2);
            }
            if (_Options.$AutoCenter & 2) {
                $Jssor$.$CssTop(_SlidesContainer, (_Height - slidesContainerHeight) / 2);
            }
            //$JssorDebug$.$Execute(function () {
            //    if (!_Options.$AutoCenter) {
            //        var slidesContainerTop = $Jssor$.$CssTop(_SlidesContainer);
            //        var slidesContainerLeft = $Jssor$.$CssLeft(_SlidesContainer);

            //        if (isNaN(slidesContainerTop)) {
            //            $JssorDebug$.$Fail("Position 'top' wrong specification of thumbnail navigator slides container (<div u=\"thumbnavigator\">...<div u=\"slides\">), \r\nwhen option $ThumbnailNavigatorOptions.$AutoCenter set to 0, it should be specified in pixel (like <div u=\"slides\" style=\"top: 0px;\">)");
            //        }

            //        if (isNaN(slidesContainerLeft)) {
            //            $JssorDebug$.$Fail("Position 'left' wrong specification of thumbnail navigator slides container (<div u=\"thumbnavigator\">...<div u=\"slides\">), \r\nwhen option $ThumbnailNavigatorOptions.$AutoCenter set to 0, it should be specified in pixel (like <div u=\"slides\" style=\"left: 0px;\">)");
            //        }
            //    }
            //});
            $Jssor$.$CssWidth(_SlidesContainer, slidesContainerWidth);
            $Jssor$.$CssHeight(_SlidesContainer, slidesContainerHeight);

            var slideItemElmts = [];
            $Jssor$.$Each(items, function (item, index) {
                var navigationItem = new NavigationItem(item, index);
                var navigationItemWrapper = navigationItem.$Wrapper;

                var columnIndex = Math.floor(index / _Lanes);
                var laneIndex = index % _Lanes;

                $Jssor$.$CssLeft(navigationItemWrapper, (_PrototypeWidth + _SpacingX) * laneIndex * (1 - horizontal));
                $Jssor$.$CssTop(navigationItemWrapper, (_PrototypeHeight + _SpacingY) * laneIndex * horizontal);

                if (!slideItemElmts[columnIndex]) {
                    slideItemElmts[columnIndex] = $Jssor$.$CreateDiv();
                    $Jssor$.$AppendChild(_SlidesContainer, slideItemElmts[columnIndex]);
                }

                $Jssor$.$AppendChild(slideItemElmts[columnIndex], navigationItemWrapper);

                _NavigationItems.push(navigationItem);
            });

            var thumbnailSliderOptions = $Jssor$.$Extend({
                $HWA: false,
                $AutoPlay: false,
                $NaviQuitDrag: false,
                $SlideWidth: slideWidth,
                $SlideHeight: slideHeight,
                $SlideSpacing: _SpacingX * horizontal + _SpacingY * (1 - horizontal),
                $MinDragOffsetToSlide: 12,
                $SlideDuration: 200,
                $PauseOnHover: 1,
                $PlayOrientation: _Options.$Orientation,
                $DragOrientation: _Options.$DisableDrag ? 0 : _Options.$Orientation
            }, _Options);

            _Slider = new $JssorSlider$(elmt, thumbnailSliderOptions);

            _Initialized = true;
        }

        //_Self.$TriggerEvent($JssorNavigatorEvents$.$RESET);
    };

    //JssorThumbnailNavigator Constructor
    {
        _Self.$Options = _Options = $Jssor$.$Extend({
            $SpacingX: 3,
            $SpacingY: 3,
            $DisplayPieces: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, options);

        //going to use $Rows instead of $Lanes
        if (_Options.$Rows != undefined)
            _Options.$Lanes = _Options.$Rows;

        //Sodo statement for development time intellisence only
        $JssorDebug$.$Execute(function () {
            _Options = $Jssor$.$Extend({
                $Lanes: undefined,
                $Width: undefined,
                $Height: undefined
            }, _Options);
        });

        _Width = $Jssor$.$CssWidth(elmt);
        _Height = $Jssor$.$CssHeight(elmt);

        $JssorDebug$.$Execute(function () {
            if (!_Width)
                $JssorDebug$.$Fail("width of 'thumbnavigator' container not specified.");
            if (!_Height)
                $JssorDebug$.$Fail("height of 'thumbnavigator' container not specified.");
        });

        _SlidesContainer = $Jssor$.$FindChild(elmt, "slides", true);
        _ThumbnailPrototype = $Jssor$.$FindChild(_SlidesContainer, "prototype");

        $JssorDebug$.$Execute(function () {
            if (!_ThumbnailPrototype)
                $JssorDebug$.$Fail("prototype of 'thumbnavigator' not defined.");
        });

        _PrototypeWidth = $Jssor$.$CssWidth(_ThumbnailPrototype);
        _PrototypeHeight = $Jssor$.$CssHeight(_ThumbnailPrototype);

        $Jssor$.$RemoveElement(_ThumbnailPrototype, _SlidesContainer);

        _Lanes = _Options.$Lanes || 1;
        _SpacingX = _Options.$SpacingX;
        _SpacingY = _Options.$SpacingY;
        _DisplayPieces = _Options.$DisplayPieces;

        if (_Options.$Scale == false) {
            $Jssor$.$Attribute(elmt, "noscale", true);
        }
    }
};

//$JssorCaptionSliderBase$
function $JssorCaptionSliderBase$() {
    $JssorAnimator$.call(this, 0, 0);
    this.$Revert = $Jssor$.$EmptyFunction;
}

var $JssorCaptionSlider$ = window.$JssorCaptionSlider$ = function (container, captionSlideOptions, playIn) {
    $JssorDebug$.$Execute(function () {
        if (!captionSlideOptions.$CaptionTransitions) {
            $JssorDebug$.$Error("'$CaptionSliderOptions' option error, '$CaptionSliderOptions.$CaptionTransitions' not specified.");
        }
    });

    var _Self = this;
    var _ImmediateOutCaptionHanger;
    var _PlayMode = playIn ? captionSlideOptions.$PlayInMode : captionSlideOptions.$PlayOutMode;

    var _CaptionTransitions = captionSlideOptions.$CaptionTransitions;
    var _CaptionTuningFetcher = { $Transition: "t", $Delay: "d", $Duration: "du", x: "x", y: "y", $Rotate: "r", $Zoom: "z", $Opacity: "f", $BeginTime: "b" };
    var _CaptionTuningTransfer = {
        $Default: function (value, tuningValue) {
            if (!isNaN(tuningValue.$Value))
                value = tuningValue.$Value;
            else
                value *= tuningValue.$Percent;

            return value;
        },
        $Opacity: function (value, tuningValue) {
            return this.$Default(value - 1, tuningValue);
        }
    };
    _CaptionTuningTransfer.$Zoom = _CaptionTuningTransfer.$Opacity;

    $JssorAnimator$.call(_Self, 0, 0);

    function GetCaptionItems(element, level) {

        var itemsToPlay = [];
        var lastTransitionName;
        var namedTransitions = [];
        var namedTransitionOrders = [];

        function FetchRawTransition(captionElmt, index) {
            var rawTransition = {};

            $Jssor$.$Each(_CaptionTuningFetcher, function (fetchAttribute, fetchProperty) {
                var attributeValue = $Jssor$.$AttributeEx(captionElmt, fetchAttribute + (index || ""));
                if (attributeValue) {
                    var propertyValue = {};

                    if (fetchAttribute == "t") {
                        propertyValue.$Value = attributeValue;
                    }
                    else if (attributeValue.indexOf("%") + 1)
                        propertyValue.$Percent = $Jssor$.$ParseFloat(attributeValue) / 100;
                    else
                        propertyValue.$Value = $Jssor$.$ParseFloat(attributeValue);

                    rawTransition[fetchProperty] = propertyValue;
                }
            });

            return rawTransition;
        }

        function GetRandomTransition() {
            return _CaptionTransitions[Math.floor(Math.random() * _CaptionTransitions.length)];
        }

        function EvaluateCaptionTransition(transitionName) {

            var transition;

            if (transitionName == "*") {
                transition = GetRandomTransition();
            }
            else if (transitionName) {

                //indexed transition allowed, just the same as named transition
                var tempTransition = _CaptionTransitions[$Jssor$.$ParseInt(transitionName)] || _CaptionTransitions[transitionName];

                if ($Jssor$.$IsArray(tempTransition)) {
                    if (transitionName != lastTransitionName) {
                        lastTransitionName = transitionName;
                        namedTransitionOrders[transitionName] = 0;

                        namedTransitions[transitionName] = tempTransition[Math.floor(Math.random() * tempTransition.length)];
                    }
                    else {
                        namedTransitionOrders[transitionName]++;
                    }

                    tempTransition = namedTransitions[transitionName];

                    if ($Jssor$.$IsArray(tempTransition)) {
                        tempTransition = tempTransition.length && tempTransition[namedTransitionOrders[transitionName] % tempTransition.length];

                        if ($Jssor$.$IsArray(tempTransition)) {
                            //got transition from array level 3, random for all captions
                            tempTransition = tempTransition[Math.floor(Math.random() * tempTransition.length)];
                        }
                        //else {
                        //    //got transition from array level 2, in sequence for all adjacent captions with same name specified
                        //    transition = tempTransition;
                        //}
                    }
                    //else {
                    //    //got transition from array level 1, random but same for all adjacent captions with same name specified
                    //    transition = tempTransition;
                    //}
                }
                //else {
                //    //got transition directly from a simple transition object
                //    transition = tempTransition;
                //}

                transition = tempTransition;

                if ($Jssor$.$IsString(transition))
                    transition = EvaluateCaptionTransition(transition);
            }

            return transition;
        }

        var captionElmts = $Jssor$.$Children(element);
        $Jssor$.$Each(captionElmts, function (captionElmt, i) {

            var transitionsWithTuning = [];
            transitionsWithTuning.$Elmt = captionElmt;
            var isCaption = $Jssor$.$AttributeEx(captionElmt, "u") == "caption";

            $Jssor$.$Each(playIn ? [0, 3] : [2], function (j, k) {

                if (isCaption) {
                    var transition;
                    var rawTransition;

                    if (j != 2 || !$Jssor$.$AttributeEx(captionElmt, "t3")) {
                        rawTransition = FetchRawTransition(captionElmt, j);

                        if (j == 2 && !rawTransition.$Transition) {
                            rawTransition.$Delay = rawTransition.$Delay || { $Value: 0 };
                            rawTransition = $Jssor$.$Extend(FetchRawTransition(captionElmt, 0), rawTransition);
                        }
                    }

                    if (rawTransition && rawTransition.$Transition) {

                        transition = EvaluateCaptionTransition(rawTransition.$Transition.$Value);

                        if (transition) {

                            //var transitionWithTuning = $Jssor$.$Extend({ $Delay: 0, $ScaleHorizontal: 1, $ScaleVertical: 1 }, transition);
                            var transitionWithTuning = $Jssor$.$Extend({ $Delay: 0 }, transition);

                            $Jssor$.$Each(rawTransition, function (rawPropertyValue, propertyName) {
                                var tuningPropertyValue = (_CaptionTuningTransfer[propertyName] || _CaptionTuningTransfer.$Default).apply(_CaptionTuningTransfer, [transitionWithTuning[propertyName], rawTransition[propertyName]]);
                                if (!isNaN(tuningPropertyValue))
                                    transitionWithTuning[propertyName] = tuningPropertyValue;
                            });

                            if (!k) {
                                if (rawTransition.$BeginTime)
                                    transitionWithTuning.$BeginTime = rawTransition.$BeginTime.$Value || 0;
                                else if ((_PlayMode) & 2)
                                    transitionWithTuning.$BeginTime = 0;
                            }
                        }
                    }

                    transitionsWithTuning.push(transitionWithTuning);
                }

                if ((level % 2) && !k) {
                    transitionsWithTuning.$Children = GetCaptionItems(captionElmt, level + 1);
                }
            });

            itemsToPlay.push(transitionsWithTuning);
        });

        return itemsToPlay;
    }

    function CreateAnimator(item, transition, immediateOut) {

        var animatorOptions = {
            $Easing: transition.$Easing,
            $Round: transition.$Round,
            $During: transition.$During,
            $Reverse: playIn && !immediateOut
        };

        $JssorDebug$.$Execute(function () {
            animatorOptions.$CaptionAnimator = true;
        });

        var captionItem = item;
        var captionParent = $Jssor$.$ParentNode(item);

        var captionItemWidth = $Jssor$.$CssWidth(captionItem);
        var captionItemHeight = $Jssor$.$CssHeight(captionItem);
        var captionParentWidth = $Jssor$.$CssWidth(captionParent);
        var captionParentHeight = $Jssor$.$CssHeight(captionParent);

        var fromStyles = {};
        var difStyles = {};
        var scaleClip = transition.$ScaleClip || 1;

        //Opacity
        if (transition.$Opacity) {
            difStyles.$Opacity = 1 - transition.$Opacity;
        }

        animatorOptions.$OriginalWidth = captionItemWidth;
        animatorOptions.$OriginalHeight = captionItemHeight;

        //Transform
        if (transition.$Zoom || transition.$Rotate) {
            difStyles.$Zoom = (transition.$Zoom || 2) - 2;

            if ($Jssor$.$IsBrowserIe9Earlier() || $Jssor$.$IsBrowserOpera()) {
                difStyles.$Zoom = Math.min(difStyles.$Zoom, 1);
            }

            fromStyles.$Zoom = 1;

            var rotate = transition.$Rotate || 0;

            difStyles.$Rotate = rotate * 360;
            fromStyles.$Rotate = 0;
        }
            //Clip
        else if (transition.$Clip) {
            var fromStyleClip = { $Top: 0, $Right: captionItemWidth, $Bottom: captionItemHeight, $Left: 0 };
            var toStyleClip = $Jssor$.$Extend({}, fromStyleClip);

            var blockOffset = toStyleClip.$Offset = {};

            var topBenchmark = transition.$Clip & 4;
            var bottomBenchmark = transition.$Clip & 8;
            var leftBenchmark = transition.$Clip & 1;
            var rightBenchmark = transition.$Clip & 2;

            if (topBenchmark && bottomBenchmark) {
                blockOffset.$Top = captionItemHeight / 2 * scaleClip;
                blockOffset.$Bottom = -blockOffset.$Top;
            }
            else if (topBenchmark)
                blockOffset.$Bottom = -captionItemHeight * scaleClip;
            else if (bottomBenchmark)
                blockOffset.$Top = captionItemHeight * scaleClip;

            if (leftBenchmark && rightBenchmark) {
                blockOffset.$Left = captionItemWidth / 2 * scaleClip;
                blockOffset.$Right = -blockOffset.$Left;
            }
            else if (leftBenchmark)
                blockOffset.$Right = -captionItemWidth * scaleClip;
            else if (rightBenchmark)
                blockOffset.$Left = captionItemWidth * scaleClip;

            animatorOptions.$Move = transition.$Move;
            difStyles.$Clip = toStyleClip;
            fromStyles.$Clip = fromStyleClip;
        }

        //Fly
        {
            var toLeft = 0;
            var toTop = 0;

            if (transition.x)
                toLeft -= captionParentWidth * transition.x;

            if (transition.y)
                toTop -= captionParentHeight * transition.y;

            if (toLeft || toTop || animatorOptions.$Move) {
                difStyles.$Left = toLeft;
                difStyles.$Top = toTop;
            }
        }

        //duration
        var duration = transition.$Duration;

        fromStyles = $Jssor$.$Extend(fromStyles, $Jssor$.$GetStyles(captionItem, difStyles));

        animatorOptions.$Setter = $Jssor$.$StyleSetterEx();

        return new $JssorAnimator$(transition.$Delay, duration, animatorOptions, captionItem, fromStyles, difStyles);
    }

    function CreateAnimators(streamLineLength, captionItems) {

        $Jssor$.$Each(captionItems, function (captionItem, i) {

            $JssorDebug$.$Execute(function () {
                if (captionItem.length) {
                    var top = $Jssor$.$CssTop(captionItem.$Elmt);
                    var left = $Jssor$.$CssLeft(captionItem.$Elmt);
                    var width = $Jssor$.$CssWidth(captionItem.$Elmt);
                    var height = $Jssor$.$CssHeight(captionItem.$Elmt);

                    var error = null;

                    if (isNaN(top))
                        error = "Style 'top' for caption not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'.";
                    else if (isNaN(left))
                        error = "Style 'left' not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'.";
                    else if (isNaN(width))
                        error = "Style 'width' not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'.";
                    else if (isNaN(height))
                        error = "Style 'height' not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'.";

                    if (error)
                        $JssorDebug$.$Error("Caption " + (i + 1) + " definition error, \r\n" + error + "\r\n" + captionItem.$Elmt.outerHTML);
                }
            });

            var animator;
            var captionElmt = captionItem.$Elmt;
            var transition = captionItem[0];
            var transition3 = captionItem[1];

            if (transition) {

                animator = CreateAnimator(captionElmt, transition);
                streamLineLength = animator.$Locate(transition.$BeginTime == undefined ? streamLineLength : transition.$BeginTime, 1);
            }

            streamLineLength = CreateAnimators(streamLineLength, captionItem.$Children);

            if (transition3) {
                var animator3 = CreateAnimator(captionElmt, transition3, 1);
                animator3.$Locate(streamLineLength, 1);
                _Self.$Combine(animator3);
                _ImmediateOutCaptionHanger.$Combine(animator3);
            }

            if (animator)
                _Self.$Combine(animator);
        });

        return streamLineLength;
    }

    _Self.$Revert = function () {
        _Self.$GoToPosition(_Self.$GetPosition_OuterEnd() * (playIn || 0));
        _ImmediateOutCaptionHanger.$GoToPosition(0);
    };

    //Constructor
    {
        _ImmediateOutCaptionHanger = new $JssorAnimator$(0, 0);

        CreateAnimators(0, _PlayMode ? GetCaptionItems(container, 1) : []);
    }
};

var $JssorCaptionSlideo$ = function (container, captionSlideoOptions, playIn) {
    $JssorDebug$.$Execute(function () {
        if (!captionSlideoOptions.$CaptionTransitions) {
            $JssorDebug$.$Error("'$CaptionSlideoOptions' option error, '$CaptionSlideoOptions.$CaptionTransitions' not specified.");
        }
        else if (!$Jssor$.$IsArray(captionSlideoOptions.$CaptionTransitions)) {
            $JssorDebug$.$Error("'$CaptionSlideoOptions' option error, '$CaptionSlideoOptions.$CaptionTransitions' is not an array.");
        }
    });

    var _This = this;

    var _Easings;
    var _TransitionConverter = {};
    var _CaptionTransitions = captionSlideoOptions.$CaptionTransitions;

    $JssorAnimator$.call(_This, 0, 0);

    function ConvertTransition(transition, isEasing) {
        $Jssor$.$Each(transition, function (property, name) {
            var performName = _TransitionConverter[name];
            if (performName) {
                if (isEasing || name == "e") {
                    if ($Jssor$.$IsNumeric(property)) {
                        property = _Easings[property];
                    }
                    else if ($Jssor$.$IsPlainObject(property)) {
                        ConvertTransition(property, true);
                    }
                }

                transition[performName] = property;
                delete transition[name];
            }
        });
    }

    function GetCaptionItems(element, level) {

        var itemsToPlay = [];

        var captionElmts = $Jssor$.$Children(element);
        $Jssor$.$Each(captionElmts, function (captionElmt, i) {
            var isCaption = $Jssor$.$AttributeEx(captionElmt, "u") == "caption";
            if (isCaption) {
                var transitionName = $Jssor$.$AttributeEx(captionElmt, "t");
                var transition = _CaptionTransitions[$Jssor$.$ParseInt(transitionName)] || _CaptionTransitions[transitionName];

                var transitionName2 = $Jssor$.$AttributeEx(captionElmt, "t2");
                var transition2 = _CaptionTransitions[$Jssor$.$ParseInt(transitionName2)] || _CaptionTransitions[transitionName2];

                var itemToPlay = { $Elmt: captionElmt, $Transition: transition, $Transition2: transition2 };
                if (level < 3) {
                    itemsToPlay.concat(GetCaptionItems(captionElmt, level + 1));
                }
                itemsToPlay.push(itemToPlay);
            }
        });

        return itemsToPlay;
    }

    function CreateAnimator(captionElmt, transitions, lastStyles, forIn) {

        $Jssor$.$Each(transitions, function (transition) {
            ConvertTransition(transition);

            var animatorOptions = {
                $Easing: transition.$Easing,
                $Round: transition.$Round,
                $During: transition.$During,
                $Setter: $Jssor$.$StyleSetterEx()
            };

            var fromStyles = $Jssor$.$Extend($Jssor$.$GetStyles(captionItem, transition), lastStyles);

            var animator = new $JssorAnimator$(transition.b || 0, transition.d, animatorOptions, captionElmt, fromStyles, transition);

            !forIn == !playIn && _This.$Combine(animator);

            var castOptions;
            lastStyles = $Jssor$.$Extend(lastStyles, $Jssor$.$Cast(fromStyles, transition, 1, animatorOptions.$Easing, animatorOptions.$During, animatorOptions.$Round, animatorOptions, castOptions));
        });

        return lastStyles;
    }

    function CreateAnimators(captionItems) {

        $Jssor$.$Each(captionItems, function (captionItem, i) {

            $JssorDebug$.$Execute(function () {
                if (captionItem.length) {
                    var top = $Jssor$.$CssTop(captionItem.$Elmt);
                    var left = $Jssor$.$CssLeft(captionItem.$Elmt);
                    var width = $Jssor$.$CssWidth(captionItem.$Elmt);
                    var height = $Jssor$.$CssHeight(captionItem.$Elmt);

                    var error = null;

                    if (isNaN(top))
                        error = "style 'top' not specified";
                    else if (isNaN(left))
                        error = "style 'left' not specified";
                    else if (isNaN(width))
                        error = "style 'width' not specified";
                    else if (isNaN(height))
                        error = "style 'height' not specified";

                    if (error)
                        throw new Error("Caption " + (i + 1) + " definition error, " + error + ".\r\n" + captionItem.$Elmt.outerHTML);
                }
            });

            var captionElmt = captionItem.$Elmt;

            var captionItemWidth = $Jssor$.$CssWidth(captionItem);
            var captionItemHeight = $Jssor$.$CssHeight(captionItem);
            var captionParentWidth = $Jssor$.$CssWidth(captionParent);
            var captionParentHeight = $Jssor$.$CssHeight(captionParent);

            var lastStyles = { $Zoom: 1, $Rotate: 0, $Clip: { $Top: 0, $Right: captionItemWidth, $Bottom: captionItemHeight, $Left: 0 } };

            lastStyles = CreateAnimator(captionElmt, captionItem.$Transition, lastStyles, true);
            CreateAnimator(captionElmt, captionItem.$Transition2, lastStyles, false);
        });
    }

    _This.$Revert = function () {
        _This.$GoToPosition(-1, true);
    }

    //Constructor
    {
        _Easings = [
            $JssorEasing$.$EaseSwing,
            $JssorEasing$.$EaseLinear,
            $JssorEasing$.$EaseInQuad,
            $JssorEasing$.$EaseOutQuad,
            $JssorEasing$.$EaseInOutQuad,
            $JssorEasing$.$EaseInCubic,
            $JssorEasing$.$EaseOutCubic,
            $JssorEasing$.$EaseInOutCubic,
            $JssorEasing$.$EaseInQuart,
            $JssorEasing$.$EaseOutQuart,
            $JssorEasing$.$EaseInOutQuart,
            $JssorEasing$.$EaseInQuint,
            $JssorEasing$.$EaseOutQuint,
            $JssorEasing$.$EaseInOutQuint,
            $JssorEasing$.$EaseInSine,
            $JssorEasing$.$EaseOutSine,
            $JssorEasing$.$EaseInOutSine,
            $JssorEasing$.$EaseInExpo,
            $JssorEasing$.$EaseOutExpo,
            $JssorEasing$.$EaseInOutExpo,
            $JssorEasing$.$EaseInCirc,
            $JssorEasing$.$EaseOutCirc,
            $JssorEasing$.$EaseInOutCirc,
            $JssorEasing$.$EaseInElastic,
            $JssorEasing$.$EaseOutElastic,
            $JssorEasing$.$EaseInOutElastic,
            $JssorEasing$.$EaseInBack,
            $JssorEasing$.$EaseOutBack,
            $JssorEasing$.$EaseInOutBack,
            $JssorEasing$.$EaseInBounce,
            $JssorEasing$.$EaseOutBounce,
            $JssorEasing$.$EaseInOutBounce//,
            //$JssorEasing$.$EaseGoBack,
            //$JssorEasing$.$EaseInWave,
            //$JssorEasing$.$EaseOutWave,
            //$JssorEasing$.$EaseOutJump,
            //$JssorEasing$.$EaseInJump
        ];

        var translater = {
            $Top: "y",          //top
            $Left: "x",         //left
            $Bottom: "m",       //bottom
            $Right: "t",        //right
            $Zoom: "s",         //zoom/scale
            $Rotate: "r",       //rotate
            $Opacity: "o",      //opacity
            $Easing: "e",       //easing
            $ZIndex: "i",       //zindex
            $Round: "rd",       //round
            $During: "du",      //during
            $Duration: "d"//,   //duration
            //$Begin: "b"
        };

        $Jssor$.$Each(translater, function (prop, newProp) {
            _TransitionConverter[prop] = newProp;
        });

        CreateAnimators(GetCaptionItems(container, 1));
    }
};

//Event Table

//$EVT_CLICK = 21;			    function(slideIndex[, event])
//$EVT_DRAG_START = 22;		    function(position[, virtualPosition, event])
//$EVT_DRAG_END = 23;		    function(position, startPosition[, virtualPosition, virtualStartPosition, event])
//$EVT_SWIPE_START = 24;		function(position[, virtualPosition])
//$EVT_SWIPE_END = 25;		    function(position[, virtualPosition])

//$EVT_LOAD_START = 26;			function(slideIndex)
//$EVT_LOAD_END = 27;			function(slideIndex)

//$EVT_POSITION_CHANGE = 202;	function(position, fromPosition[, virtualPosition, virtualFromPosition])
//$EVT_PARK = 203;			    function(slideIndex, fromIndex)

//$EVT_PROGRESS_CHANGE = 208;	function(slideIndex, progress[, progressBegin, idleBegin, idleEnd, progressEnd])
//$EVT_STATE_CHANGE = 209;	    function(slideIndex, progress[, progressBegin, idleBegin, idleEnd, progressEnd])

//$EVT_ROLLBACK_START = 210;	function(slideIndex, progress[, progressBegin, idleBegin, idleEnd, progressEnd])
//$EVT_ROLLBACK_END = 211;	    function(slideIndex, progress[, progressBegin, idleBegin, idleEnd, progressEnd])

//$EVT_SLIDESHOW_START = 206;   function(slideIndex[, progressBegin, slideshowBegin, slideshowEnd, progressEnd])
//$EVT_SLIDESHOW_END = 207;     function(slideIndex[, progressBegin, slideshowBegin, slideshowEnd, progressEnd])

//http://www.jssor.com/development/reference-api.html




