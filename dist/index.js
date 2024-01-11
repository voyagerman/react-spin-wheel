import { jsx as Qe, Fragment as Gt, jsxs as Yt } from "react/jsx-runtime";
import ye, { useRef as bt, useDebugValue as nt, createElement as Xt, useContext as Jt, useState as Kt, useEffect as rt } from "react";
var x = function() {
  return x = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, x.apply(this, arguments);
};
function ae(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)
      (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function qt(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Zt = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Wt = /* @__PURE__ */ qt(
  function(e) {
    return Zt.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), D = "-ms-", me = "-moz-", w = "-webkit-", Et = "comm", Ie = "rule", Ue = "decl", Vt = "@import", Pt = "@keyframes", Ut = "@layer", _t = Math.abs, _e = String.fromCharCode, Ye = Object.assign;
function $t(e, t) {
  return R(e, 0) ^ 45 ? (((t << 2 ^ R(e, 0)) << 2 ^ R(e, 1)) << 2 ^ R(e, 2)) << 2 ^ R(e, 3) : 0;
}
function Dt(e) {
  return e.trim();
}
function Z(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function f(e, t, n) {
  return e.replace(t, n);
}
function Pe(e, t) {
  return e.indexOf(t);
}
function R(e, t) {
  return e.charCodeAt(t) | 0;
}
function ce(e, t, n) {
  return e.slice(t, n);
}
function K(e) {
  return e.length;
}
function Bt(e) {
  return e.length;
}
function ge(e, t) {
  return t.push(e), e;
}
function en(e, t) {
  return e.map(t).join("");
}
function ot(e, t) {
  return e.filter(function(n) {
    return !Z(n, t);
  });
}
var Oe = 1, Ae = 1, Ct = 0, L = 0, O = 0, pe = "";
function Me(e, t, n, r, o, s, i, A) {
  return { value: e, root: t, parent: n, type: r, props: o, children: s, line: Oe, column: Ae, length: i, return: "", siblings: A };
}
function V(e, t) {
  return Ye(Me("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function ie(e) {
  for (; e.root; )
    e = V(e.root, { children: [e] });
  ge(e, e.siblings);
}
function tn() {
  return O;
}
function nn() {
  return O = L > 0 ? R(pe, --L) : 0, Ae--, O === 10 && (Ae = 1, Oe--), O;
}
function Y() {
  return O = L < Ct ? R(pe, L++) : 0, Ae++, O === 10 && (Ae = 1, Oe++), O;
}
function te() {
  return R(pe, L);
}
function De() {
  return L;
}
function Re(e, t) {
  return ce(pe, e, t);
}
function Xe(e) {
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
  return Oe = Ae = 1, Ct = K(pe = e), L = 0, [];
}
function on(e) {
  return pe = "", e;
}
function xe(e) {
  return Dt(Re(L - 1, Je(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function sn(e) {
  for (; (O = te()) && O < 33; )
    Y();
  return Xe(e) > 2 || Xe(O) > 3 ? "" : " ";
}
function an(e, t) {
  for (; --t && Y() && !(O < 48 || O > 102 || O > 57 && O < 65 || O > 70 && O < 97); )
    ;
  return Re(e, De() + (t < 6 && te() == 32 && Y() == 32));
}
function Je(e) {
  for (; Y(); )
    switch (O) {
      case e:
        return L;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Je(O);
        break;
      case 40:
        e === 41 && Je(e);
        break;
      case 92:
        Y();
        break;
    }
  return L;
}
function cn(e, t) {
  for (; Y() && e + O !== 57; )
    if (e + O === 84 && te() === 47)
      break;
  return "/*" + Re(t, L - 1) + "*" + _e(e === 47 ? e : Y());
}
function An(e) {
  for (; !Xe(te()); )
    Y();
  return Re(e, L);
}
function ln(e) {
  return on(Be("", null, null, null, [""], e = rn(e), 0, [0], e));
}
function Be(e, t, n, r, o, s, i, A, c) {
  for (var u = 0, h = 0, d = i, g = 0, m = 0, b = 0, S = 1, H = 1, N = 1, B = 0, E = "", v = o, P = s, p = r, l = E; H; )
    switch (b = B, B = Y()) {
      case 40:
        if (b != 108 && R(l, d - 1) == 58) {
          Pe(l += f(xe(B), "&", "&\f"), "&\f") != -1 && (N = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        l += xe(B);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        l += sn(b);
        break;
      case 92:
        l += an(De() - 1, 7);
        continue;
      case 47:
        switch (te()) {
          case 42:
          case 47:
            ge(un(cn(Y(), De()), t, n, c), c);
            break;
          default:
            l += "/";
        }
        break;
      case 123 * S:
        A[u++] = K(l) * N;
      case 125 * S:
      case 59:
      case 0:
        switch (B) {
          case 0:
          case 125:
            H = 0;
          case 59 + h:
            N == -1 && (l = f(l, /\f/g, "")), m > 0 && K(l) - d && ge(m > 32 ? it(l + ";", r, n, d - 1, c) : it(f(l, " ", "") + ";", r, n, d - 2, c), c);
            break;
          case 59:
            l += ";";
          default:
            if (ge(p = st(l, t, n, u, h, o, A, E, v = [], P = [], d, s), s), B === 123)
              if (h === 0)
                Be(l, t, p, p, v, s, d, A, P);
              else
                switch (g === 99 && R(l, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Be(e, p, p, r && ge(st(e, p, p, 0, 0, o, A, E, o, v = [], d, P), P), o, P, d, A, r ? v : P);
                    break;
                  default:
                    Be(l, p, p, p, [""], P, 0, A, P);
                }
        }
        u = h = m = 0, S = N = 1, E = l = "", d = i;
        break;
      case 58:
        d = 1 + K(l), m = b;
      default:
        if (S < 1) {
          if (B == 123)
            --S;
          else if (B == 125 && S++ == 0 && nn() == 125)
            continue;
        }
        switch (l += _e(B), B * S) {
          case 38:
            N = h > 0 ? 1 : (l += "\f", -1);
            break;
          case 44:
            A[u++] = (K(l) - 1) * N, N = 1;
            break;
          case 64:
            te() === 45 && (l += xe(Y())), g = te(), h = d = K(E = l += An(De())), B++;
            break;
          case 45:
            b === 45 && K(l) == 2 && (S = 0);
        }
    }
  return s;
}
function st(e, t, n, r, o, s, i, A, c, u, h, d) {
  for (var g = o - 1, m = o === 0 ? s : [""], b = Bt(m), S = 0, H = 0, N = 0; S < r; ++S)
    for (var B = 0, E = ce(e, g + 1, g = _t(H = i[S])), v = e; B < b; ++B)
      (v = Dt(H > 0 ? m[B] + " " + E : f(E, /&\f/g, m[B]))) && (c[N++] = v);
  return Me(e, t, n, o === 0 ? Ie : A, c, u, h, d);
}
function un(e, t, n, r) {
  return Me(e, t, n, Et, _e(tn()), ce(e, 2, -2), 0, r);
}
function it(e, t, n, r, o) {
  return Me(e, t, n, Ue, ce(e, 0, r), ce(e, r + 1, -1), r, o);
}
function St(e, t, n) {
  switch ($t(e, t)) {
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
      return me + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return w + e + me + e + D + e + e;
    case 5936:
      switch (R(e, t + 11)) {
        case 114:
          return w + e + D + f(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return w + e + D + f(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return w + e + D + f(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return w + e + D + e + e;
    case 6165:
      return w + e + D + "flex-" + e + e;
    case 5187:
      return w + e + f(e, /(\w+).+(:[^]+)/, w + "box-$1$2" + D + "flex-$1$2") + e;
    case 5443:
      return w + e + D + "flex-item-" + f(e, /flex-|-self/g, "") + (Z(e, /flex-|baseline/) ? "" : D + "grid-row-" + f(e, /flex-|-self/g, "")) + e;
    case 4675:
      return w + e + D + "flex-line-pack" + f(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return w + e + D + f(e, "shrink", "negative") + e;
    case 5292:
      return w + e + D + f(e, "basis", "preferred-size") + e;
    case 6060:
      return w + "box-" + f(e, "-grow", "") + w + e + D + f(e, "grow", "positive") + e;
    case 4554:
      return w + f(e, /([^-])(transform)/g, "$1" + w + "$2") + e;
    case 6187:
      return f(f(f(e, /(zoom-|grab)/, w + "$1"), /(image-set)/, w + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return f(e, /(image-set\([^]*)/, w + "$1$`$1");
    case 4968:
      return f(f(e, /(.+:)(flex-)?(.*)/, w + "box-pack:$3" + D + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + w + e + e;
    case 4200:
      if (!Z(e, /flex-|baseline/))
        return D + "grid-column-align" + ce(e, t) + e;
      break;
    case 2592:
    case 3360:
      return D + f(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Z(r.props, /grid-\w+-end/);
      }) ? ~Pe(e + (n = n[t].value), "span") ? e : D + f(e, "-start", "") + e + D + "grid-row-span:" + (~Pe(n, "span") ? Z(n, /\d+/) : +Z(n, /\d+/) - +Z(e, /\d+/)) + ";" : D + f(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Z(r.props, /grid-\w+-start/);
      }) ? e : D + f(f(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return f(e, /(.+)-inline(.+)/, w + "$1$2") + e;
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
      if (K(e) - 1 - t > 6)
        switch (R(e, t + 1)) {
          case 109:
            if (R(e, t + 4) !== 45)
              break;
          case 102:
            return f(e, /(.+:)(.+)-([^]+)/, "$1" + w + "$2-$3$1" + me + (R(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Pe(e, "stretch") ? St(f(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return f(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, s, i, A, c, u) {
        return D + o + ":" + s + u + (i ? D + o + "-span:" + (A ? c : +c - +s) + u : "") + e;
      });
    case 4949:
      if (R(e, t + 6) === 121)
        return f(e, ":", ":" + w) + e;
      break;
    case 6444:
      switch (R(e, R(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return f(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + w + (R(e, 14) === 45 ? "inline-" : "") + "box$3$1" + w + "$2$3$1" + D + "$2box$3") + e;
        case 100:
          return f(e, ":", ":" + D) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return f(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Ne(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function fn(e, t, n, r) {
  switch (e.type) {
    case Ut:
      if (e.children.length)
        break;
    case Vt:
    case Ue:
      return e.return = e.return || e.value;
    case Et:
      return "";
    case Pt:
      return e.return = e.value + "{" + Ne(e.children, r) + "}";
    case Ie:
      if (!K(e.value = e.props.join(",")))
        return "";
  }
  return K(n = Ne(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function pn(e) {
  var t = Bt(e);
  return function(n, r, o, s) {
    for (var i = "", A = 0; A < t; A++)
      i += e[A](n, r, o, s) || "";
    return i;
  };
}
function dn(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function hn(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Ue:
        e.return = St(e.value, e.length, n);
        return;
      case Pt:
        return Ne([V(e, { value: f(e.value, "@", "@" + w) })], r);
      case Ie:
        if (e.length)
          return en(n = e.props, function(o) {
            switch (Z(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ie(V(e, { props: [f(o, /:(read-\w+)/, ":" + me + "$1")] })), ie(V(e, { props: [o] })), Ye(e, { props: ot(n, r) });
                break;
              case "::placeholder":
                ie(V(e, { props: [f(o, /:(plac\w+)/, ":" + w + "input-$1")] })), ie(V(e, { props: [f(o, /:(plac\w+)/, ":" + me + "$1")] })), ie(V(e, { props: [f(o, /:(plac\w+)/, D + "input-$1")] })), ie(V(e, { props: [o] })), Ye(e, { props: ot(n, r) });
                break;
            }
            return "";
          });
    }
}
var gn = {
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
}, re = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", $e = typeof window < "u" && "HTMLElement" in window, mn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), at = /invalid hook call/i, ve = /* @__PURE__ */ new Set(), yn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var s = !0;
      console.error = function(i) {
        for (var A = [], c = 1; c < arguments.length; c++)
          A[c - 1] = arguments[c];
        at.test(i) ? (s = !1, ve.delete(r)) : o.apply(void 0, ae([i], A, !1));
      }, bt(), s && !ve.has(r) && (console.warn(r), ve.add(r));
    } catch (i) {
      at.test(i.message) && ve.delete(r);
    } finally {
      console.error = o;
    }
  }
}, ze = Object.freeze([]), le = Object.freeze({});
function wn(e, t, n) {
  return n === void 0 && (n = le), e.theme !== n.theme && e.theme || t || n.theme;
}
var Ke = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), vn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, bn = /(^-|-$)/g;
function ct(e) {
  return e.replace(vn, "-").replace(bn, "");
}
var En = /(a)(d)/gi, At = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function qe(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = At(t % 52) + n;
  return (At(t % 52) + n).replace(En, "$1-$2");
}
var Fe, $ = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Nt = function(e) {
  return $(5381, e);
};
function Pn(e) {
  return qe(Nt(e) >>> 0);
}
function kt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Le(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var It = typeof Symbol == "function" && Symbol.for, Ot = It ? Symbol.for("react.memo") : 60115, Dn = It ? Symbol.for("react.forward_ref") : 60112, Bn = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Cn = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Mt = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Sn = ((Fe = {})[Dn] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Fe[Ot] = Mt, Fe);
function lt(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Ot ? Mt : "$$typeof" in e ? Sn[e.$$typeof] : Bn;
  var t;
}
var Nn = Object.defineProperty, kn = Object.getOwnPropertyNames, ut = Object.getOwnPropertySymbols, In = Object.getOwnPropertyDescriptor, On = Object.getPrototypeOf, ft = Object.prototype;
function Rt(e, t, n) {
  if (typeof t != "string") {
    if (ft) {
      var r = On(t);
      r && r !== ft && Rt(e, r, n);
    }
    var o = kn(t);
    ut && (o = o.concat(ut(t)));
    for (var s = lt(e), i = lt(t), A = 0; A < o.length; ++A) {
      var c = o[A];
      if (!(c in Cn || n && n[c] || i && c in i || s && c in s)) {
        var u = In(t, c);
        try {
          Nn(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
function ue(e) {
  return typeof e == "function";
}
function et(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ee(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function pt(e, t) {
  if (e.length === 0)
    return "";
  for (var n = e[0], r = 1; r < e.length; r++)
    n += t ? t + e[r] : e[r];
  return n;
}
function fe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Ze(e, t, n) {
  if (n === void 0 && (n = !1), !n && !fe(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++)
      e[r] = Ze(e[r], t[r]);
  else if (fe(t))
    for (var r in t)
      e[r] = Ze(e[r], t[r]);
  return e;
}
function tt(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Mn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
  return r.forEach(function(i) {
    n = n.replace(/%[a-z]/, i);
  }), n;
}
function de(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Rn.apply(void 0, ae([Mn[e]], t, !1)).trim());
}
var zn = function() {
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
          throw de(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(r), this.length = s;
      for (var i = o; i < s; i++)
        this.groupSizes[i] = 0;
    }
    for (var A = this.indexOfGroup(t + 1), c = (i = 0, n.length); i < c; i++)
      this.tag.insertRule(A, n[i]) && (this.groupSizes[t]++, A++);
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), s = o + r, i = o; i < s; i++)
      n += "".concat(this.tag.getRule(i)).concat(`/*!sc*/
`);
    return n;
  }, e;
}(), Ce = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Se = 1, be = function(e) {
  if (Ce.has(e))
    return Ce.get(e);
  for (; ke.has(Se); )
    Se++;
  var t = Se++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw de(16, "".concat(t));
  return Ce.set(e, t), ke.set(t, e), t;
}, Hn = function(e, t) {
  Se = t + 1, Ce.set(e, t), ke.set(t, e);
}, jn = "style[".concat(re, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), Tn = new RegExp("^".concat(re, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Qn = function(e, t, n) {
  for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++)
    (r = o[s]) && e.registerName(t, r);
}, xn = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), o = [], s = 0, i = r.length; s < i; s++) {
    var A = r[s].trim();
    if (A) {
      var c = A.match(Tn);
      if (c) {
        var u = 0 | parseInt(c[1], 10), h = c[2];
        u !== 0 && (Hn(h, u), Qn(e, h, c[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else
        o.push(A);
    }
  }
};
function Fn() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var zt = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(A) {
    var c = Array.from(A.querySelectorAll("style[".concat(re, "]")));
    return c[c.length - 1];
  }(n), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(re, "active"), r.setAttribute("data-styled-version", "6.1.1");
  var i = Fn();
  return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
}, Ln = function() {
  function e(t) {
    this.element = zt(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var r = document.styleSheets, o = 0, s = r.length; o < s; o++) {
        var i = r[o];
        if (i.ownerNode === n)
          return i;
      }
      throw de(17);
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
}(), Gn = function() {
  function e(t) {
    this.element = zt(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Yn = function() {
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
}(), dt = $e, Xn = { isServer: !$e, useCSSOMInjection: !mn }, Ht = function() {
  function e(t, n, r) {
    t === void 0 && (t = le), n === void 0 && (n = {});
    var o = this;
    this.options = x(x({}, Xn), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && $e && dt && (dt = !1, function(s) {
      for (var i = document.querySelectorAll(jn), A = 0, c = i.length; A < c; A++) {
        var u = i[A];
        u && u.getAttribute(re) !== "active" && (xn(s, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), tt(this, function() {
      return function(s) {
        for (var i = s.getTag(), A = i.length, c = "", u = function(d) {
          var g = function(N) {
            return ke.get(N);
          }(d);
          if (g === void 0)
            return "continue";
          var m = s.names.get(g), b = i.getGroup(d);
          if (m === void 0 || b.length === 0)
            return "continue";
          var S = "".concat(re, ".g").concat(d, '[id="').concat(g, '"]'), H = "";
          m !== void 0 && m.forEach(function(N) {
            N.length > 0 && (H += "".concat(N, ","));
          }), c += "".concat(b).concat(S, '{content:"').concat(H, '"}').concat(`/*!sc*/
`);
        }, h = 0; h < A; h++)
          u(h);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return be(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(x(x({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Yn(o) : r ? new Ln(o) : new Gn(o);
    }(this.options), new zn(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (be(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(be(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(be(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Jn = /&/g, Kn = /^\s*\/\/.*$/gm;
function jt(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = jt(n.children, t)), n;
  });
}
function qn(e) {
  var t, n, r, o = e === void 0 ? le : e, s = o.options, i = s === void 0 ? le : s, A = o.plugins, c = A === void 0 ? ze : A, u = function(g, m, b) {
    return b === n || b.startsWith(n) && b.endsWith(n) && b.replaceAll(n, "").length > 0 ? ".".concat(t) : g;
  }, h = c.slice();
  h.push(function(g) {
    g.type === Ie && g.value.includes("&") && (g.props[0] = g.props[0].replace(Jn, n).replace(r, u));
  }), i.prefix && h.push(hn), h.push(fn);
  var d = function(g, m, b, S) {
    m === void 0 && (m = ""), b === void 0 && (b = ""), S === void 0 && (S = "&"), t = S, n = m, r = new RegExp("\\".concat(n, "\\b"), "g");
    var H = g.replace(Kn, ""), N = ln(b || m ? "".concat(b, " ").concat(m, " { ").concat(H, " }") : H);
    i.namespace && (N = jt(N, i.namespace));
    var B = [];
    return Ne(N, pn(h.concat(dn(function(E) {
      return B.push(E);
    })))), B;
  };
  return d.hash = c.length ? c.reduce(function(g, m) {
    return m.name || de(15), $(g, m.name);
  }, 5381).toString() : "", d;
}
var Zn = new Ht(), We = qn(), Tt = ye.createContext({ shouldForwardProp: void 0, styleSheet: Zn, stylis: We });
Tt.Consumer;
ye.createContext(void 0);
function ht() {
  return Jt(Tt);
}
var gt = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, s) {
      s === void 0 && (s = We);
      var i = r.name + s.hash;
      o.hasNameForId(r.id, i) || o.insertRules(r.id, i, s(r.rules, i, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, tt(this, function() {
      throw de(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = We), this.name + t.hash;
  }, e;
}(), Wn = function(e) {
  return e >= "A" && e <= "Z";
};
function mt(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-")
      return e;
    Wn(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Qt = function(e) {
  return e == null || e === !1 || e === "";
}, xt = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var s = e[o];
    e.hasOwnProperty(o) && !Qt(s) && (Array.isArray(s) && s.isCss || ue(s) ? r.push("".concat(mt(o), ":"), s, ";") : fe(s) ? r.push.apply(r, ae(ae(["".concat(o, " {")], xt(s), !1), ["}"], !1)) : r.push("".concat(mt(o), ": ").concat((t = o, (n = s) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in gn || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function ne(e, t, n, r) {
  if (Qt(e))
    return [];
  if (et(e))
    return [".".concat(e.styledComponentId)];
  if (ue(e)) {
    if (!ue(s = e) || s.prototype && s.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof gt || fe(o) || o === null || console.error("".concat(kt(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ne(o, t, n, r);
  }
  var s;
  return e instanceof gt ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : fe(e) ? xt(e) : Array.isArray(e) ? Array.prototype.concat.apply(ze, e.map(function(i) {
    return ne(i, t, n, r);
  })) : [e.toString()];
}
function Vn(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ue(n) && !et(n))
      return !1;
  }
  return !0;
}
var Un = Nt("6.1.1"), _n = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Vn(t), this.componentId = n, this.baseHash = $(Un, n), this.baseStyle = r, Ht.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        o = ee(o, this.staticRulesId);
      else {
        var s = pt(ne(this.rules, t, n, r)), i = qe($(this.baseHash, s) >>> 0);
        if (!n.hasNameForId(this.componentId, i)) {
          var A = r(s, ".".concat(i), void 0, this.componentId);
          n.insertRules(this.componentId, i, A);
        }
        o = ee(o, i), this.staticRulesId = i;
      }
    else {
      for (var c = $(this.baseHash, r.hash), u = "", h = 0; h < this.rules.length; h++) {
        var d = this.rules[h];
        if (typeof d == "string")
          u += d, process.env.NODE_ENV !== "production" && (c = $(c, d));
        else if (d) {
          var g = pt(ne(d, t, n, r));
          c = $(c, g + h), u += g;
        }
      }
      if (u) {
        var m = qe(c >>> 0);
        n.hasNameForId(this.componentId, m) || n.insertRules(this.componentId, m, r(u, ".".concat(m), void 0, this.componentId)), o = ee(o, m);
      }
    }
    return o;
  }, e;
}(), Ft = ye.createContext(void 0);
Ft.Consumer;
var Ge = {}, yt = /* @__PURE__ */ new Set();
function $n(e, t, n) {
  var r = et(e), o = e, s = !Le(e), i = t.attrs, A = i === void 0 ? ze : i, c = t.componentId, u = c === void 0 ? function(v, P) {
    var p = typeof v != "string" ? "sc" : ct(v);
    Ge[p] = (Ge[p] || 0) + 1;
    var l = "".concat(p, "-").concat(Pn("6.1.1" + p + Ge[p]));
    return P ? "".concat(P, "-").concat(l) : l;
  }(t.displayName, t.parentComponentId) : c, h = t.displayName, d = h === void 0 ? function(v) {
    return Le(v) ? "styled.".concat(v) : "Styled(".concat(kt(v), ")");
  }(e) : h, g = t.displayName && t.componentId ? "".concat(ct(t.displayName), "-").concat(t.componentId) : t.componentId || u, m = r && o.attrs ? o.attrs.concat(A).filter(Boolean) : A, b = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var S = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var H = t.shouldForwardProp;
      b = function(v, P) {
        return S(v, P) && H(v, P);
      };
    } else
      b = S;
  }
  var N = new _n(n, g, r ? o.componentStyle : void 0);
  function B(v, P) {
    return function(p, l, X) {
      var q = p.attrs, je = p.componentStyle, he = p.defaultProps, oe = p.foldedComponentIds, a = p.styledComponentId, C = p.target, k = ye.useContext(Ft), M = ht(), U = p.shouldForwardProp || M.shouldForwardProp;
      process.env.NODE_ENV !== "production" && nt(a);
      var F = function(y, I, G) {
        for (var T, Q = x(x({}, I), { className: void 0, theme: G }), Te = 0; Te < y.length; Te += 1) {
          var we = ue(T = y[Te]) ? T(Q) : T;
          for (var W in we)
            Q[W] = W === "className" ? ee(Q[W], we[W]) : W === "style" ? x(x({}, Q[W]), we[W]) : we[W];
        }
        return I.className && (Q.className = ee(Q.className, I.className)), Q;
      }(q, l, wn(l, k, he) || le), z = F.as || C, J = {};
      for (var j in F)
        F[j] === void 0 || j[0] === "$" || j === "as" || j === "theme" || (j === "forwardedAs" ? J.as = F.forwardedAs : U && !U(j, z) || (J[j] = F[j], U || process.env.NODE_ENV !== "development" || Wt(j) || yt.has(j) || !Ke.has(z) || (yt.add(j), console.warn('styled-components: it looks like an unknown prop "'.concat(j, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var se = function(y, I) {
        var G = ht(), T = y.generateAndInjectStyles(I, G.styleSheet, G.stylis);
        return process.env.NODE_ENV !== "production" && nt(T), T;
      }(je, F);
      process.env.NODE_ENV !== "production" && p.warnTooManyClasses && p.warnTooManyClasses(se);
      var _ = ee(oe, a);
      return se && (_ += " " + se), F.className && (_ += " " + F.className), J[Le(z) && !Ke.has(z) ? "class" : "className"] = _, J.ref = X, Xt(z, J);
    }(E, v, P);
  }
  B.displayName = d;
  var E = ye.forwardRef(B);
  return E.attrs = m, E.componentStyle = N, E.displayName = d, E.shouldForwardProp = b, E.foldedComponentIds = r ? ee(o.foldedComponentIds, o.styledComponentId) : "", E.styledComponentId = g, E.target = r ? o.target : e, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(v) {
    this._foldedDefaultProps = r ? function(P) {
      for (var p = [], l = 1; l < arguments.length; l++)
        p[l - 1] = arguments[l];
      for (var X = 0, q = p; X < q.length; X++)
        Ze(P, q[X], !0);
      return P;
    }({}, o.defaultProps, v) : v;
  } }), process.env.NODE_ENV !== "production" && (yn(d, g), E.warnTooManyClasses = /* @__PURE__ */ function(v, P) {
    var p = {}, l = !1;
    return function(X) {
      if (!l && (p[X] = !0, Object.keys(p).length >= 200)) {
        var q = P ? ' with the id of "'.concat(P, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(v).concat(q, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), l = !0, p = {};
      }
    };
  }(d, g)), tt(E, function() {
    return ".".concat(E.styledComponentId);
  }), s && Rt(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), E;
}
function wt(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var vt = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function er(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (ue(e) || fe(e)) {
    var r = e;
    return vt(ne(wt(ze, ae([r], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? ne(o) : vt(ne(wt(o, t)));
}
function Ve(e, t, n) {
  if (n === void 0 && (n = le), !t)
    throw de(1, t);
  var r = function(o) {
    for (var s = [], i = 1; i < arguments.length; i++)
      s[i - 1] = arguments[i];
    return e(t, n, er.apply(void 0, ae([o], s, !1)));
  };
  return r.attrs = function(o) {
    return Ve(e, t, x(x({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Ve(e, t, x(x({}, n), o));
  }, r;
}
var Lt = function(e) {
  return Ve($n, e);
}, He = Lt;
Ke.forEach(function(e) {
  He[e] = Lt(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ee = "__sc-".concat(re, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ee] || (window[Ee] = 0), window[Ee] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ee] += 1);
const tr = "data:image/png;base64,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", nr = He.div`
  width: ${(e) => e.width}px;
  height: ${(e) => e.height}px;
  overflow: hidden;
  position: relative;
`, rr = He.canvas.attrs((e) => ({
  style: {
    transform: `rotate(${e.$rotationAngle}deg)`,
    transformStyle: "preserve-3d",
    width: `${e.width}px`,
    height: `${e.height}px`
  }
}))``, or = He.div`
  position: absolute;
  top: 50%;
  right: 0px;
  width: 24px;
  height: 24px;
  margin-top: -12px;
  margin-right: 9px;
  background-image: url(${(e) => e.image || tr});
  background-size: cover;
`, ar = ({
  innerRadius: e,
  outerRadius: t,
  innerColor: n,
  innerBorderWidth: r,
  outerBorderWidth: o,
  dividerWidth: s,
  innerBorderColor: i,
  outerBorderColor: A,
  dividerColor: c,
  options: u,
  stopIndex: h,
  onSpinEnd: d,
  shouldSpin: g = !1,
  textColor: m = "#fff",
  textFontSize: b = 20,
  textDistanceFromCenter: S,
  centerText: H,
  centerImage: N,
  showCenterTextOverImage: B = !1,
  centerTextFontSize: E,
  pointerProps: v
}) => {
  const P = bt(null), p = 48, l = t * 2 + o * 2 + p, [X, q] = Kt(0), je = () => {
    const he = Date.now(), oe = 10, a = oe * 1e3, C = 360 / u.length, k = Math.random() * C, M = oe * 360 - C * h - k, U = (z) => z < 0.5 ? 4 * z * z * z : (z - 1) * (2 * z - 2) * (2 * z - 2) + 1, F = () => {
      const J = Date.now() - he;
      if (J < a) {
        const j = J / a, _ = U(j) * M;
        q(_), requestAnimationFrame(F);
      } else
        q(M), d && d(h);
    };
    F();
  };
  return rt(() => {
    if (P.current) {
      const a = P.current, C = a.getContext("2d");
      if (C) {
        const k = a.width / 2, M = a.height / 2;
        he(C, k, M), oe(C, k, M);
      }
    }
    function he(a, C, k) {
      a.save(), a.beginPath(), a.arc(C, k, t + o, 0, 2 * Math.PI), a.fillStyle = A, a.fill(), a.restore();
    }
    function oe(a, C, k) {
      const M = 2 * Math.PI / u.length, U = u.map((y, I) => new Promise((G, T) => {
        if (y.image) {
          const Q = new Image();
          Q.src = y.image, Q.onload = () => {
            J(I, Q), y.showTextOverImage && z(I), G();
          }, Q.onerror = T;
        } else
          F(I), z(I), G();
      }));
      Promise.all(U).then(() => {
        for (let y = 0; y < u.length; y++)
          j(y);
        se(), _();
      });
      function F(y) {
        a.save(), a.beginPath(), a.moveTo(C, k), a.arc(
          C,
          k,
          t,
          M * y,
          M * (y + 1),
          !1
        ), a.fillStyle = u[y].color, a.fill(), a.restore();
      }
      function z(y) {
        a.save(), a.translate(C, k), a.rotate(M * (y + 0.5)), a.textAlign = "center", a.fillStyle = u[y].textColor || m, a.font = `${u[y].textFontSize || b}px sans-serif`;
        const I = u[y].text, T = a.measureText(I).width, Q = e + r + T / 2 + (S ?? t / 3);
        a.fillText(I, Q, 4), a.restore();
      }
      function J(y, I) {
        a.save(), a.beginPath(), a.moveTo(C, k), a.arc(C, k, t, M * y, M * (y + 1)), a.closePath(), a.clip(), a.translate(
          C + Math.cos(M * y + M / 2) * t,
          k + Math.sin(M * y + M / 2) * t
        ), a.drawImage(
          I,
          -I.width / 2,
          -I.height / 2,
          I.width,
          I.height
        ), a.restore();
      }
      function j(y) {
        s > 0 && (a.save(), a.beginPath(), a.moveTo(C, k), a.lineTo(
          C + Math.cos(M * y) * t,
          k + Math.sin(M * y) * t
        ), a.strokeStyle = c, a.lineWidth = s, a.stroke(), a.restore());
      }
      function se() {
        r > 0 && (a.save(), a.beginPath(), a.arc(
          C,
          k,
          e + r,
          0,
          2 * Math.PI
        ), a.fillStyle = i, a.fill(), a.restore());
      }
      function _() {
        if (N) {
          const T = new Image();
          T.src = N, T.onload = () => {
            y(T), B && G();
          };
        } else
          I(), G();
        function y(T) {
          a.save(), a.beginPath(), a.arc(C, k, e, 0, 2 * Math.PI), a.closePath(), a.clip(), a.drawImage(
            T,
            C - e,
            k - e,
            e * 2,
            e * 2
          ), a.restore();
        }
        function I() {
          a.save(), a.beginPath(), a.arc(C, k, e, 0, 2 * Math.PI), a.fillStyle = n, a.fill(), a.restore();
        }
        function G() {
          H && (a.save(), a.textAlign = "center", a.fillStyle = m, a.font = `${E || b}px sans-serif`, a.fillText(H, C, k + 8), a.restore());
        }
      }
    }
  }, []), rt(() => {
    g && je();
  }, [g]), /* @__PURE__ */ Qe(Gt, { children: /* @__PURE__ */ Yt(
    nr,
    {
      width: l,
      height: l,
      $rotationAngle: X,
      children: [
        /* @__PURE__ */ Qe(
          rr,
          {
            ref: P,
            width: l,
            height: l,
            $rotationAngle: X
          }
        ),
        /* @__PURE__ */ Qe(or, { image: v == null ? void 0 : v.image })
      ]
    }
  ) });
};
export {
  ar as Wheel
};
