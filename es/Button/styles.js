import { colors, theme, fonts } from '../theme.js';
const _defaultExport = [`button.jsx-719125225{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:4px;font-weight:400;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;-webkit-transition:all 0.15s cubic-bezier(0.4,0,0.6,1);transition:all 0.15s cubic-bezier(0.4,0,0.6,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:${colors.grey900};height:36px;padding:0 16px;font-size:14px;line-height:16px;border:1px solid #c4c9cc;background-color:#f9fafb;}`, "button.jsx-719125225:disabled{cursor:not-allowed;}", "button.jsx-719125225:focus{outline:none;}", "button.jsx-719125225::after{content:' ';pointer-events:none;position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;z-index:1;border:2px solid transparent;border-radius:inherit;-webkit-transition:border-color 0.15s cubic-bezier(0.4,0,0.6,1);transition:border-color 0.15s cubic-bezier(0.4,0,0.6,1);}", "button.jsx-719125225:active.jsx-719125225:focus.jsx-719125225::after,button.jsx-719125225:disabled.jsx-719125225:focus.jsx-719125225::after{border-color:transparent;}", "button.jsx-719125225:hover{border:1px solid #c4c9cc;background-color:#f3f4f5;}", "button.jsx-719125225:active,button.jsx-719125225:active.jsx-719125225:focus{border:1px solid #c5c9cc;background-color:#f3f4f5;box-shadow:0 0 0 1px rgb(0,0,0,0.1) inset;}", "button.jsx-719125225:focus{background-color:#f9fafb;}", `button.jsx-719125225:focus.jsx-719125225::after{border-color:${theme.primary600};}`, `button.jsx-719125225:disabled{border:1px solid #c4c9cc;background-color:#f9fafb;box-shadow:none;color:${theme.disabled};fill:${theme.disabled};}`, "button.icon.jsx-719125225{padding-left:10px;}", ".small.jsx-719125225{height:28px;padding:0 16px;font-size:14px;line-height:16px;}", ".large.jsx-719125225{height:43px;padding:0 24px;font-size:16px;-webkit-letter-spacing:0.57px;-moz-letter-spacing:0.57px;-ms-letter-spacing:0.57px;letter-spacing:0.57px;line-height:19px;}", ".icon-only.jsx-719125225 i.jsx-719125225{margin-right:0;margin-left:0;}", `.primary.jsx-719125225{border:1px solid ${theme.primary800};background:linear-gradient(180deg,#1565c0 0%,#0650a3 100%);background-color:#2b61b3;color:${colors.white};fill:${colors.white};font-weight:500;}`, `.primary.jsx-719125225:hover{border:1px solid ${theme.primary800};background:linear-gradient(180deg,#054fa3 0%,#034793 100%);background-color:#21539f;}`, `.primary.jsx-719125225:active,.primary.jsx-719125225:active.jsx-719125225:focus{border:1px solid ${theme.primary800};background:linear-gradient(180deg,#054fa3 0%,#034793 100%);background-color:#1c4a90;box-shadow:0 0 0 1px rgba(0,0,0,0.18) inset;}`, ".primary.jsx-719125225:focus{background:linear-gradient(180deg,#1565c0 0%,#0650a3 100%);background-color:#285dac;}", `.primary.jsx-719125225:focus.jsx-719125225::after{border-color:${colors.yellow300};}`, `.primary.jsx-719125225:disabled{border:1px solid ${theme.primary800};background:linear-gradient(180deg,#1565c0 0%,#0650a3 100%);background-color:#b6c8e2;box-shadow:none;color:${colors.white};fill:${colors.white};opacity:0.33;}`, `.secondary.jsx-719125225{border:1px solid ${colors.grey400};background-color:transparent;}`, `.secondary.jsx-719125225:hover{border:1px solid ${colors.grey400};background-color:rgba(158,158,158,0.07);}`, `.secondary.jsx-719125225:active,.secondary.jsx-719125225:active.jsx-719125225:focus{border:1px solid ${colors.grey400};background-color:rgba(158,158,158,0.18);box-shadow:none;}`, ".secondary.jsx-719125225:focus{background-color:transparent;}", `.secondary.jsx-719125225:focus.jsx-719125225::after{border-color:${theme.primary600};}`, `.secondary.jsx-719125225:disabled{border:1px solid ${colors.grey400};background-color:transparent;box-shadow:none;color:${theme.disabled};fill:${theme.disabled};}`, `.destructive.jsx-719125225{border:1px solid #a10b0b;background:linear-gradient(180deg,#d32f2f 0%,#b71c1c 100%);background-color:#b9242b;color:${colors.white};fill:${colors.white};font-weight:500;}`, ".destructive.jsx-719125225:hover{border:1px solid #a10b0b;background:linear-gradient(180deg,#b81c1c 0%,#b80c0b 100%);background-color:#ac0f1a;}", ".destructive.jsx-719125225:active,.destructive.jsx-719125225:active.jsx-719125225:focus{border:1px solid #a10b0b;background:linear-gradient(180deg,#b81c1c 0%,#b80c0b 100%);background-color:#ac101b;box-shadow:0 0 0 1px rgba(0,0,0,0.18) inset;}", ".destructive.jsx-719125225:focus{background:linear-gradient(180deg,#d32f2f 0%,#b71c1c 100%);background-color:#b72229;}", ".destructive.jsx-719125225:focus.jsx-719125225:after{border-color:#5e0303;}", `.destructive.jsx-719125225:disabled{border:1px solid #a10b0b;background:linear-gradient(180deg,#d32f2f 0%,#b71c1c 100%);background-color:#e5b5b7;box-shadow:none;color:${colors.white};fill:${colors.white};opacity:0.33;}`, "@media all and (-ms-high-contrast:none){button.jsx-719125225{border-radius:0;}}", ".button-icon.jsx-719125225{margin-right:10px;color:inherit;fill:inherit;font-size:26px;vertical-align:middle;pointer-events:none;}"];
_defaultExport.__hash = "719125225";
export default _defaultExport;