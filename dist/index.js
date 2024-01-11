import { jsx as ze, Fragment as Bt, jsxs as Gt } from "react/jsx-runtime";
import we, { useRef as St, useDebugValue as nt, createElement as Ht, useContext as qt, useState as Wt, useEffect as rt } from "react";
var z = function() {
  return z = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, z.apply(this, arguments);
};
function ie(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)
      (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function Ut(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Yt = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Kt = /* @__PURE__ */ Ut(
  function(e) {
    return Yt.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), E = "-ms-", ve = "-moz-", w = "-webkit-", kt = "comm", _e = "rule", Qe = "decl", Zt = "@import", Ct = "@keyframes", Qt = "@layer", Jt = Math.abs, Je = String.fromCharCode, Ge = Object.assign;
function Xt(e, t) {
  return D(e, 0) ^ 45 ? (((t << 2 ^ D(e, 0)) << 2 ^ D(e, 1)) << 2 ^ D(e, 2)) << 2 ^ D(e, 3) : 0;
}
function Et(e) {
  return e.trim();
}
function U(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function d(e, t, n) {
  return e.replace(t, n);
}
function Ee(e, t) {
  return e.indexOf(t);
}
function D(e, t) {
  return e.charCodeAt(t) | 0;
}
function ce(e, t, n) {
  return e.slice(t, n);
}
function q(e) {
  return e.length;
}
function At(e) {
  return e.length;
}
function ye(e, t) {
  return t.push(e), e;
}
function en(e, t) {
  return e.map(t).join("");
}
function ot(e, t) {
  return e.filter(function(n) {
    return !U(n, t);
  });
}
var xe = 1, le = 1, Pt = 0, V = 0, x = 0, fe = "";
function Re(e, t, n, r, o, s, a, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: s, line: xe, column: le, length: a, return: "", siblings: l };
}
function Q(e, t) {
  return Ge(Re("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function ae(e) {
  for (; e.root; )
    e = Q(e.root, { children: [e] });
  ye(e, e.siblings);
}
function tn() {
  return x;
}
function nn() {
  return x = V > 0 ? D(fe, --V) : 0, le--, x === 10 && (le = 1, xe--), x;
}
function B() {
  return x = V < Pt ? D(fe, V++) : 0, le++, x === 10 && (le = 1, xe++), x;
}
function ne() {
  return D(fe, V);
}
function Ae() {
  return V;
}
function De(e, t) {
  return ce(fe, e, t);
}
function He(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function rn(e) {
  return xe = le = 1, Pt = q(fe = e), V = 0, [];
}
function on(e) {
  return fe = "", e;
}
function Le(e) {
  return Et(De(V - 1, qe(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function sn(e) {
  for (; (x = ne()) && x < 33; )
    B();
  return He(e) > 2 || He(x) > 3 ? "" : " ";
}
function an(e, t) {
  for (; --t && B() && !(x < 48 || x > 102 || x > 57 && x < 65 || x > 70 && x < 97); )
    ;
  return De(e, Ae() + (t < 6 && ne() == 32 && B() == 32));
}
function qe(e) {
  for (; B(); )
    switch (x) {
      case e:
        return V;
      case 34:
      case 39:
        e !== 34 && e !== 39 && qe(x);
        break;
      case 40:
        e === 41 && qe(e);
        break;
      case 92:
        B();
        break;
    }
  return V;
}
function cn(e, t) {
  for (; B() && e + x !== 57; )
    if (e + x === 84 && ne() === 47)
      break;
  return "/*" + De(t, V - 1) + "*" + Je(e === 47 ? e : B());
}
function ln(e) {
  for (; !He(ne()); )
    B();
  return De(e, V);
}
function un(e) {
  return on(Pe("", null, null, null, [""], e = rn(e), 0, [0], e));
}
function Pe(e, t, n, r, o, s, a, l, c) {
  for (var u = 0, g = 0, h = a, m = 0, y = 0, S = 0, I = 1, $ = 1, N = 1, A = 0, k = "", b = o, P = s, f = r, p = k; $; )
    switch (S = A, A = B()) {
      case 40:
        if (S != 108 && D(p, h - 1) == 58) {
          Ee(p += d(Le(A), "&", "&\f"), "&\f") != -1 && (N = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        p += Le(A);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        p += sn(S);
        break;
      case 92:
        p += an(Ae() - 1, 7);
        continue;
      case 47:
        switch (ne()) {
          case 42:
          case 47:
            ye(pn(cn(B(), Ae()), t, n, c), c);
            break;
          default:
            p += "/";
        }
        break;
      case 123 * I:
        l[u++] = q(p) * N;
      case 125 * I:
      case 59:
      case 0:
        switch (A) {
          case 0:
          case 125:
            $ = 0;
          case 59 + g:
            N == -1 && (p = d(p, /\f/g, "")), y > 0 && q(p) - h && ye(y > 32 ? at(p + ";", r, n, h - 1, c) : at(d(p, " ", "") + ";", r, n, h - 2, c), c);
            break;
          case 59:
            p += ";";
          default:
            if (ye(f = st(p, t, n, u, g, o, l, k, b = [], P = [], h, s), s), A === 123)
              if (g === 0)
                Pe(p, t, f, f, b, s, h, l, P);
              else
                switch (m === 99 && D(p, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Pe(e, f, f, r && ye(st(e, f, f, 0, 0, o, l, k, o, b = [], h, P), P), o, P, h, l, r ? b : P);
                    break;
                  default:
                    Pe(p, f, f, f, [""], P, 0, l, P);
                }
        }
        u = g = y = 0, I = N = 1, k = p = "", h = a;
        break;
      case 58:
        h = 1 + q(p), y = S;
      default:
        if (I < 1) {
          if (A == 123)
            --I;
          else if (A == 125 && I++ == 0 && nn() == 125)
            continue;
        }
        switch (p += Je(A), A * I) {
          case 38:
            N = g > 0 ? 1 : (p += "\f", -1);
            break;
          case 44:
            l[u++] = (q(p) - 1) * N, N = 1;
            break;
          case 64:
            ne() === 45 && (p += Le(B())), m = ne(), g = h = q(k = p += ln(Ae())), A++;
            break;
          case 45:
            S === 45 && q(p) == 2 && (I = 0);
        }
    }
  return s;
}
function st(e, t, n, r, o, s, a, l, c, u, g, h) {
  for (var m = o - 1, y = o === 0 ? s : [""], S = At(y), I = 0, $ = 0, N = 0; I < r; ++I)
    for (var A = 0, k = ce(e, m + 1, m = Jt($ = a[I])), b = e; A < S; ++A)
      (b = Et($ > 0 ? y[A] + " " + k : d(k, /&\f/g, y[A]))) && (c[N++] = b);
  return Re(e, t, n, o === 0 ? _e : l, c, u, g, h);
}
function pn(e, t, n, r) {
  return Re(e, t, n, kt, Je(tn()), ce(e, 2, -2), 0, r);
}
function at(e, t, n, r, o) {
  return Re(e, t, n, Qe, ce(e, 0, r), ce(e, r + 1, -1), r, o);
}
function It(e, t, n) {
  switch (Xt(e, t)) {
    case 5103:
      return w + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return w + e + e;
    case 4789:
      return ve + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return w + e + ve + e + E + e + e;
    case 5936:
      switch (D(e, t + 11)) {
        case 114:
          return w + e + E + d(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return w + e + E + d(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return w + e + E + d(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return w + e + E + e + e;
    case 6165:
      return w + e + E + "flex-" + e + e;
    case 5187:
      return w + e + d(e, /(\w+).+(:[^]+)/, w + "box-$1$2" + E + "flex-$1$2") + e;
    case 5443:
      return w + e + E + "flex-item-" + d(e, /flex-|-self/g, "") + (U(e, /flex-|baseline/) ? "" : E + "grid-row-" + d(e, /flex-|-self/g, "")) + e;
    case 4675:
      return w + e + E + "flex-line-pack" + d(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return w + e + E + d(e, "shrink", "negative") + e;
    case 5292:
      return w + e + E + d(e, "basis", "preferred-size") + e;
    case 6060:
      return w + "box-" + d(e, "-grow", "") + w + e + E + d(e, "grow", "positive") + e;
    case 4554:
      return w + d(e, /([^-])(transform)/g, "$1" + w + "$2") + e;
    case 6187:
      return d(d(d(e, /(zoom-|grab)/, w + "$1"), /(image-set)/, w + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return d(e, /(image-set\([^]*)/, w + "$1$`$1");
    case 4968:
      return d(d(e, /(.+:)(flex-)?(.*)/, w + "box-pack:$3" + E + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + w + e + e;
    case 4200:
      if (!U(e, /flex-|baseline/))
        return E + "grid-column-align" + ce(e, t) + e;
      break;
    case 2592:
    case 3360:
      return E + d(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, U(r.props, /grid-\w+-end/);
      }) ? ~Ee(e + (n = n[t].value), "span") ? e : E + d(e, "-start", "") + e + E + "grid-row-span:" + (~Ee(n, "span") ? U(n, /\d+/) : +U(n, /\d+/) - +U(e, /\d+/)) + ";" : E + d(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return U(r.props, /grid-\w+-start/);
      }) ? e : E + d(d(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return d(e, /(.+)-inline(.+)/, w + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (q(e) - 1 - t > 6)
        switch (D(e, t + 1)) {
          case 109:
            if (D(e, t + 4) !== 45)
              break;
          case 102:
            return d(e, /(.+:)(.+)-([^]+)/, "$1" + w + "$2-$3$1" + ve + (D(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ee(e, "stretch") ? It(d(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return d(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, s, a, l, c, u) {
        return E + o + ":" + s + u + (a ? E + o + "-span:" + (l ? c : +c - +s) + u : "") + e;
      });
    case 4949:
      if (D(e, t + 6) === 121)
        return d(e, ":", ":" + w) + e;
      break;
    case 6444:
      switch (D(e, D(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return d(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + w + (D(e, 14) === 45 ? "inline-" : "") + "box$3$1" + w + "$2$3$1" + E + "$2box$3") + e;
        case 100:
          return d(e, ":", ":" + E) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return d(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Oe(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function dn(e, t, n, r) {
  switch (e.type) {
    case Qt:
      if (e.children.length)
        break;
    case Zt:
    case Qe:
      return e.return = e.return || e.value;
    case kt:
      return "";
    case Ct:
      return e.return = e.value + "{" + Oe(e.children, r) + "}";
    case _e:
      if (!q(e.value = e.props.join(",")))
        return "";
  }
  return q(n = Oe(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function fn(e) {
  var t = At(e);
  return function(n, r, o, s) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](n, r, o, s) || "";
    return a;
  };
}
function hn(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function gn(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Qe:
        e.return = It(e.value, e.length, n);
        return;
      case Ct:
        return Oe([Q(e, { value: d(e.value, "@", "@" + w) })], r);
      case _e:
        if (e.length)
          return en(n = e.props, function(o) {
            switch (U(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ae(Q(e, { props: [d(o, /:(read-\w+)/, ":" + ve + "$1")] })), ae(Q(e, { props: [o] })), Ge(e, { props: ot(n, r) });
                break;
              case "::placeholder":
                ae(Q(e, { props: [d(o, /:(plac\w+)/, ":" + w + "input-$1")] })), ae(Q(e, { props: [d(o, /:(plac\w+)/, ":" + ve + "$1")] })), ae(Q(e, { props: [d(o, /:(plac\w+)/, E + "input-$1")] })), ae(Q(e, { props: [o] })), Ge(e, { props: ot(n, r) });
                break;
            }
            return "";
          });
    }
}
var mn = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, oe = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Xe = typeof window < "u" && "HTMLElement" in window, yn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), it = /invalid hook call/i, Se = /* @__PURE__ */ new Set(), vn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var s = !0;
      console.error = function(a) {
        for (var l = [], c = 1; c < arguments.length; c++)
          l[c - 1] = arguments[c];
        it.test(a) ? (s = !1, Se.delete(r)) : o.apply(void 0, ie([a], l, !1));
      }, St(), s && !Se.has(r) && (console.warn(r), Se.add(r));
    } catch (a) {
      it.test(a.message) && Se.delete(r);
    } finally {
      console.error = o;
    }
  }
}, $e = Object.freeze([]), ue = Object.freeze({});
function wn(e, t, n) {
  return n === void 0 && (n = ue), e.theme !== n.theme && e.theme || t || n.theme;
}
var We = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), bn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Sn = /(^-|-$)/g;
function ct(e) {
  return e.replace(bn, "-").replace(Sn, "");
}
var kn = /(a)(d)/gi, lt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ue(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = lt(t % 52) + n;
  return (lt(t % 52) + n).replace(kn, "$1-$2");
}
var Fe, ee = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Nt = function(e) {
  return ee(5381, e);
};
function Cn(e) {
  return Ue(Nt(e) >>> 0);
}
function Ot(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ve(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Tt = typeof Symbol == "function" && Symbol.for, _t = Tt ? Symbol.for("react.memo") : 60115, En = Tt ? Symbol.for("react.forward_ref") : 60112, An = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Pn = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, xt = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, In = ((Fe = {})[En] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Fe[_t] = xt, Fe);
function ut(e) {
  return ("type" in (t = e) && t.type.$$typeof) === _t ? xt : "$$typeof" in e ? In[e.$$typeof] : An;
  var t;
}
var Nn = Object.defineProperty, On = Object.getOwnPropertyNames, pt = Object.getOwnPropertySymbols, Tn = Object.getOwnPropertyDescriptor, _n = Object.getPrototypeOf, dt = Object.prototype;
function Rt(e, t, n) {
  if (typeof t != "string") {
    if (dt) {
      var r = _n(t);
      r && r !== dt && Rt(e, r, n);
    }
    var o = On(t);
    pt && (o = o.concat(pt(t)));
    for (var s = ut(e), a = ut(t), l = 0; l < o.length; ++l) {
      var c = o[l];
      if (!(c in Pn || n && n[c] || a && c in a || s && c in s)) {
        var u = Tn(t, c);
        try {
          Nn(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
function pe(e) {
  return typeof e == "function";
}
function et(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function te(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ft(e, t) {
  if (e.length === 0)
    return "";
  for (var n = e[0], r = 1; r < e.length; r++)
    n += t ? t + e[r] : e[r];
  return n;
}
function de(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Ye(e, t, n) {
  if (n === void 0 && (n = !1), !n && !de(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++)
      e[r] = Ye(e[r], t[r]);
  else if (de(t))
    for (var r in t)
      e[r] = Ye(e[r], t[r]);
  return e;
}
function tt(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var xn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Rn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, s = e.length; o < s; o += 1)
    r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function he(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Rn.apply(void 0, ie([xn[e]], t, !1)).trim());
}
var Dn = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++)
      n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, s = o; t >= s; )
        if ((s <<= 1) < 0)
          throw he(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(r), this.length = s;
      for (var a = o; a < s; a++)
        this.groupSizes[a] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), c = (a = 0, n.length); a < c; a++)
      this.tag.insertRule(l, n[a]) && (this.groupSizes[t]++, l++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var s = r; s < o; s++)
        this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), s = o + r, a = o; a < s; a++)
      n += "".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);
    return n;
  }, e;
}(), Ie = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), Ne = 1, ke = function(e) {
  if (Ie.has(e))
    return Ie.get(e);
  for (; Te.has(Ne); )
    Ne++;
  var t = Ne++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw he(16, "".concat(t));
  return Ie.set(e, t), Te.set(t, e), t;
}, $n = function(e, t) {
  Ne = t + 1, Ie.set(e, t), Te.set(t, e);
}, Mn = "style[".concat(oe, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), jn = new RegExp("^".concat(oe, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), zn = function(e, t, n) {
  for (var r, o = n.split(","), s = 0, a = o.length; s < a; s++)
    (r = o[s]) && e.registerName(t, r);
}, Ln = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), o = [], s = 0, a = r.length; s < a; s++) {
    var l = r[s].trim();
    if (l) {
      var c = l.match(jn);
      if (c) {
        var u = 0 | parseInt(c[1], 10), g = c[2];
        u !== 0 && ($n(g, u), zn(e, g, c[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else
        o.push(l);
    }
  }
};
function Fn() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Dt = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(l) {
    var c = Array.from(l.querySelectorAll("style[".concat(oe, "]")));
    return c[c.length - 1];
  }(n), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(oe, "active"), r.setAttribute("data-styled-version", "6.1.1");
  var a = Fn();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, s), r;
}, Vn = function() {
  function e(t) {
    this.element = Dt(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var r = document.styleSheets, o = 0, s = r.length; o < s; o++) {
        var a = r[o];
        if (a.ownerNode === n)
          return a;
      }
      throw he(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), Bn = function() {
  function e(t) {
    this.element = Dt(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var r = document.createTextNode(n);
      return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Gn = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), ht = Xe, Hn = { isServer: !Xe, useCSSOMInjection: !yn }, $t = function() {
  function e(t, n, r) {
    t === void 0 && (t = ue), n === void 0 && (n = {});
    var o = this;
    this.options = z(z({}, Hn), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && Xe && ht && (ht = !1, function(s) {
      for (var a = document.querySelectorAll(Mn), l = 0, c = a.length; l < c; l++) {
        var u = a[l];
        u && u.getAttribute(oe) !== "active" && (Ln(s, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), tt(this, function() {
      return function(s) {
        for (var a = s.getTag(), l = a.length, c = "", u = function(h) {
          var m = function(N) {
            return Te.get(N);
          }(h);
          if (m === void 0)
            return "continue";
          var y = s.names.get(m), S = a.getGroup(h);
          if (y === void 0 || S.length === 0)
            return "continue";
          var I = "".concat(oe, ".g").concat(h, '[id="').concat(m, '"]'), $ = "";
          y !== void 0 && y.forEach(function(N) {
            N.length > 0 && ($ += "".concat(N, ","));
          }), c += "".concat(S).concat(I, '{content:"').concat($, '"}').concat(`/*!sc*/
`);
        }, g = 0; g < l; g++)
          u(g);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return ke(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(z(z({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Gn(o) : r ? new Vn(o) : new Bn(o);
    }(this.options), new Dn(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (ke(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(ke(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(ke(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), qn = /&/g, Wn = /^\s*\/\/.*$/gm;
function Mt(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Mt(n.children, t)), n;
  });
}
function Un(e) {
  var t, n, r, o = e === void 0 ? ue : e, s = o.options, a = s === void 0 ? ue : s, l = o.plugins, c = l === void 0 ? $e : l, u = function(m, y, S) {
    return S === n || S.startsWith(n) && S.endsWith(n) && S.replaceAll(n, "").length > 0 ? ".".concat(t) : m;
  }, g = c.slice();
  g.push(function(m) {
    m.type === _e && m.value.includes("&") && (m.props[0] = m.props[0].replace(qn, n).replace(r, u));
  }), a.prefix && g.push(gn), g.push(dn);
  var h = function(m, y, S, I) {
    y === void 0 && (y = ""), S === void 0 && (S = ""), I === void 0 && (I = "&"), t = I, n = y, r = new RegExp("\\".concat(n, "\\b"), "g");
    var $ = m.replace(Wn, ""), N = un(S || y ? "".concat(S, " ").concat(y, " { ").concat($, " }") : $);
    a.namespace && (N = Mt(N, a.namespace));
    var A = [];
    return Oe(N, fn(g.concat(hn(function(k) {
      return A.push(k);
    })))), A;
  };
  return h.hash = c.length ? c.reduce(function(m, y) {
    return y.name || he(15), ee(m, y.name);
  }, 5381).toString() : "", h;
}
var Yn = new $t(), Ke = Un(), jt = we.createContext({ shouldForwardProp: void 0, styleSheet: Yn, stylis: Ke });
jt.Consumer;
we.createContext(void 0);
function gt() {
  return qt(jt);
}
var mt = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Ke);
      var a = r.name + s.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, s(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, tt(this, function() {
      throw he(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ke), this.name + t.hash;
  }, e;
}(), Kn = function(e) {
  return e >= "A" && e <= "Z";
};
function yt(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-")
      return e;
    Kn(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var zt = function(e) {
  return e == null || e === !1 || e === "";
}, Lt = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var s = e[o];
    e.hasOwnProperty(o) && !zt(s) && (Array.isArray(s) && s.isCss || pe(s) ? r.push("".concat(yt(o), ":"), s, ";") : de(s) ? r.push.apply(r, ie(ie(["".concat(o, " {")], Lt(s), !1), ["}"], !1)) : r.push("".concat(yt(o), ": ").concat((t = o, (n = s) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in mn || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function re(e, t, n, r) {
  if (zt(e))
    return [];
  if (et(e))
    return [".".concat(e.styledComponentId)];
  if (pe(e)) {
    if (!pe(s = e) || s.prototype && s.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof mt || de(o) || o === null || console.error("".concat(Ot(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), re(o, t, n, r);
  }
  var s;
  return e instanceof mt ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : de(e) ? Lt(e) : Array.isArray(e) ? Array.prototype.concat.apply($e, e.map(function(a) {
    return re(a, t, n, r);
  })) : [e.toString()];
}
function Zn(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (pe(n) && !et(n))
      return !1;
  }
  return !0;
}
var Qn = Nt("6.1.1"), Jn = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Zn(t), this.componentId = n, this.baseHash = ee(Qn, n), this.baseStyle = r, $t.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        o = te(o, this.staticRulesId);
      else {
        var s = ft(re(this.rules, t, n, r)), a = Ue(ee(this.baseHash, s) >>> 0);
        if (!n.hasNameForId(this.componentId, a)) {
          var l = r(s, ".".concat(a), void 0, this.componentId);
          n.insertRules(this.componentId, a, l);
        }
        o = te(o, a), this.staticRulesId = a;
      }
    else {
      for (var c = ee(this.baseHash, r.hash), u = "", g = 0; g < this.rules.length; g++) {
        var h = this.rules[g];
        if (typeof h == "string")
          u += h, process.env.NODE_ENV !== "production" && (c = ee(c, h));
        else if (h) {
          var m = ft(re(h, t, n, r));
          c = ee(c, m + g), u += m;
        }
      }
      if (u) {
        var y = Ue(c >>> 0);
        n.hasNameForId(this.componentId, y) || n.insertRules(this.componentId, y, r(u, ".".concat(y), void 0, this.componentId)), o = te(o, y);
      }
    }
    return o;
  }, e;
}(), Ft = we.createContext(void 0);
Ft.Consumer;
var Be = {}, vt = /* @__PURE__ */ new Set();
function Xn(e, t, n) {
  var r = et(e), o = e, s = !Ve(e), a = t.attrs, l = a === void 0 ? $e : a, c = t.componentId, u = c === void 0 ? function(b, P) {
    var f = typeof b != "string" ? "sc" : ct(b);
    Be[f] = (Be[f] || 0) + 1;
    var p = "".concat(f, "-").concat(Cn("6.1.1" + f + Be[f]));
    return P ? "".concat(P, "-").concat(p) : p;
  }(t.displayName, t.parentComponentId) : c, g = t.displayName, h = g === void 0 ? function(b) {
    return Ve(b) ? "styled.".concat(b) : "Styled(".concat(Ot(b), ")");
  }(e) : g, m = t.displayName && t.componentId ? "".concat(ct(t.displayName), "-").concat(t.componentId) : t.componentId || u, y = r && o.attrs ? o.attrs.concat(l).filter(Boolean) : l, S = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var I = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var $ = t.shouldForwardProp;
      S = function(b, P) {
        return I(b, P) && $(b, P);
      };
    } else
      S = I;
  }
  var N = new Jn(n, m, r ? o.componentStyle : void 0);
  function A(b, P) {
    return function(f, p, G) {
      var Y = f.attrs, ge = f.componentStyle, se = f.defaultProps, i = f.foldedComponentIds, C = f.styledComponentId, O = f.target, R = we.useContext(Ft), me = gt(), K = f.shouldForwardProp || me.shouldForwardProp;
      process.env.NODE_ENV !== "production" && nt(C);
      var T = function(_, F, j) {
        for (var L, X = z(z({}, F), { className: void 0, theme: j }), je = 0; je < _.length; je += 1) {
          var be = pe(L = _[je]) ? L(X) : L;
          for (var Z in be)
            X[Z] = Z === "className" ? te(X[Z], be[Z]) : Z === "style" ? z(z({}, X[Z]), be[Z]) : be[Z];
        }
        return F.className && (X.className = te(X.className, F.className)), X;
      }(Y, p, wn(p, R, se) || ue), H = T.as || O, W = {};
      for (var M in T)
        T[M] === void 0 || M[0] === "$" || M === "as" || M === "theme" || (M === "forwardedAs" ? W.as = T.forwardedAs : K && !K(M, H) || (W[M] = T[M], K || process.env.NODE_ENV !== "development" || Kt(M) || vt.has(M) || !We.has(H) || (vt.add(M), console.warn('styled-components: it looks like an unknown prop "'.concat(M, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var J = function(_, F) {
        var j = gt(), L = _.generateAndInjectStyles(F, j.styleSheet, j.stylis);
        return process.env.NODE_ENV !== "production" && nt(L), L;
      }(ge, T);
      process.env.NODE_ENV !== "production" && f.warnTooManyClasses && f.warnTooManyClasses(J);
      var v = te(i, C);
      return J && (v += " " + J), T.className && (v += " " + T.className), W[Ve(H) && !We.has(H) ? "class" : "className"] = v, W.ref = G, Ht(H, W);
    }(k, b, P);
  }
  A.displayName = h;
  var k = we.forwardRef(A);
  return k.attrs = y, k.componentStyle = N, k.displayName = h, k.shouldForwardProp = S, k.foldedComponentIds = r ? te(o.foldedComponentIds, o.styledComponentId) : "", k.styledComponentId = m, k.target = r ? o.target : e, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = r ? function(P) {
      for (var f = [], p = 1; p < arguments.length; p++)
        f[p - 1] = arguments[p];
      for (var G = 0, Y = f; G < Y.length; G++)
        Ye(P, Y[G], !0);
      return P;
    }({}, o.defaultProps, b) : b;
  } }), process.env.NODE_ENV !== "production" && (vn(h, m), k.warnTooManyClasses = /* @__PURE__ */ function(b, P) {
    var f = {}, p = !1;
    return function(G) {
      if (!p && (f[G] = !0, Object.keys(f).length >= 200)) {
        var Y = P ? ' with the id of "'.concat(P, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(b).concat(Y, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), p = !0, f = {};
      }
    };
  }(h, m)), tt(k, function() {
    return ".".concat(k.styledComponentId);
  }), s && Rt(k, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), k;
}
function wt(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var bt = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function er(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (pe(e) || de(e)) {
    var r = e;
    return bt(re(wt($e, ie([r], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? re(o) : bt(re(wt(o, t)));
}
function Ze(e, t, n) {
  if (n === void 0 && (n = ue), !t)
    throw he(1, t);
  var r = function(o) {
    for (var s = [], a = 1; a < arguments.length; a++)
      s[a - 1] = arguments[a];
    return e(t, n, er.apply(void 0, ie([o], s, !1)));
  };
  return r.attrs = function(o) {
    return Ze(e, t, z(z({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Ze(e, t, z(z({}, n), o));
  }, r;
}
var Vt = function(e) {
  return Ze(Xn, e);
}, Me = Vt;
We.forEach(function(e) {
  Me[e] = Vt(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ce = "__sc-".concat(oe, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ce] || (window[Ce] = 0), window[Ce] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ce] += 1);
const tr = Me.div`
  width: ${(e) => e.width}px;
  height: ${(e) => e.height}px;
  overflow: hidden;
  position: relative;
`, nr = Me.canvas.attrs((e) => ({
  style: {
    transform: `rotate(${e.$rotationAngle}deg)`,
    transformStyle: "preserve-3d",
    width: `${e.width}px`,
    height: `${e.height}px`
  }
}))``, rr = Me.div`
  position: absolute;
  top: 50%;
  right: 0px;
  width: 24px;
  height: 24px;
  margin-top: -12px;
  margin-right: 9px;
  background-image: url(/arrow.png);
  background-size: cover;
`, ar = ({
  innerRadius: e,
  outerRadius: t,
  innerColor: n,
  innerBorderWidth: r,
  outerBorderWidth: o,
  dividerWidth: s,
  innerBorderColor: a,
  outerBorderColor: l,
  dividerColor: c,
  options: u,
  stopIndex: g,
  onSpinEnd: h,
  shouldSpin: m = !1,
  textColor: y = "#fff",
  textFontSize: S = 20,
  textDistanceFromCenter: I,
  centerText: $,
  centerImage: N,
  showCenterTextOverImage: A = !1,
  centerTextFontSize: k
}) => {
  const b = St(null), P = 48, f = t * 2 + o * 2 + P, [p, G] = Wt(0), Y = () => {
    const ge = Date.now(), se = 10, i = se * 1e3, C = 360 / u.length, O = Math.random() * C, R = se * 360 - C * g - O, me = (T) => T < 0.5 ? 4 * T * T * T : (T - 1) * (2 * T - 2) * (2 * T - 2) + 1, K = () => {
      const H = Date.now() - ge;
      if (H < i) {
        const W = H / i, J = me(W) * R;
        G(J), requestAnimationFrame(K);
      } else
        G(R), h && h(g);
    };
    K();
  };
  return rt(() => {
    if (b.current) {
      const i = b.current, C = i.getContext("2d");
      if (C) {
        const O = i.width / 2, R = i.height / 2;
        ge(C, O, R), se(C, O, R);
      }
    }
    function ge(i, C, O) {
      i.save(), i.beginPath(), i.arc(C, O, t + o, 0, 2 * Math.PI), i.fillStyle = l, i.fill(), i.restore();
    }
    function se(i, C, O) {
      const R = 2 * Math.PI / u.length, me = u.map((v, _) => new Promise((F, j) => {
        if (v.image) {
          const L = new Image();
          L.src = v.image, L.onload = () => {
            H(_, L), v.showTextOverImage && T(_), F();
          }, L.onerror = j;
        } else
          K(_), T(_), F();
      }));
      Promise.all(me).then(() => {
        for (let v = 0; v < u.length; v++)
          W(v);
        M(), J();
      });
      function K(v) {
        i.save(), i.beginPath(), i.moveTo(C, O), i.arc(
          C,
          O,
          t,
          R * v,
          R * (v + 1),
          !1
        ), i.fillStyle = u[v].color, i.fill(), i.restore();
      }
      function T(v) {
        i.save(), i.translate(C, O), i.rotate(R * (v + 0.5)), i.textAlign = "center", i.fillStyle = u[v].textColor || y, i.font = `${u[v].textFontSize || S}px sans-serif`;
        const _ = u[v].text, j = i.measureText(_).width, L = e + r + j / 2 + (I ?? t / 3);
        i.fillText(_, L, 4), i.restore();
      }
      function H(v, _) {
        i.save(), i.beginPath(), i.moveTo(C, O), i.arc(C, O, t, R * v, R * (v + 1)), i.closePath(), i.clip(), i.translate(
          C + Math.cos(R * v + R / 2) * t,
          O + Math.sin(R * v + R / 2) * t
        ), i.drawImage(
          _,
          -_.width / 2,
          -_.height / 2,
          _.width,
          _.height
        ), i.restore();
      }
      function W(v) {
        s > 0 && (i.save(), i.beginPath(), i.moveTo(C, O), i.lineTo(
          C + Math.cos(R * v) * t,
          O + Math.sin(R * v) * t
        ), i.strokeStyle = c, i.lineWidth = s, i.stroke(), i.restore());
      }
      function M() {
        r > 0 && (i.save(), i.beginPath(), i.arc(
          C,
          O,
          e + r,
          0,
          2 * Math.PI
        ), i.fillStyle = a, i.fill(), i.restore());
      }
      function J() {
        if (N) {
          const j = new Image();
          j.src = N, j.onload = () => {
            v(j), A && F();
          };
        } else
          _(), F();
        function v(j) {
          i.save(), i.beginPath(), i.arc(C, O, e, 0, 2 * Math.PI), i.closePath(), i.clip(), i.drawImage(
            j,
            C - e,
            O - e,
            e * 2,
            e * 2
          ), i.restore();
        }
        function _() {
          i.save(), i.beginPath(), i.arc(C, O, e, 0, 2 * Math.PI), i.fillStyle = n, i.fill(), i.restore();
        }
        function F() {
          $ && (i.save(), i.textAlign = "center", i.fillStyle = y, i.font = `${k || S}px sans-serif`, i.fillText($, C, O + 8), i.restore());
        }
      }
    }
  }, []), rt(() => {
    m && Y();
  }, [m]), /* @__PURE__ */ ze(Bt, { children: /* @__PURE__ */ Gt(
    tr,
    {
      width: f,
      height: f,
      $rotationAngle: p,
      children: [
        /* @__PURE__ */ ze(
          nr,
          {
            ref: b,
            width: f,
            height: f,
            $rotationAngle: p
          }
        ),
        /* @__PURE__ */ ze(rr, {})
      ]
    }
  ) });
};
export {
  ar as Wheel
};
