"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/prompt/[id]/route";
exports.ids = ["app/api/prompt/[id]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprompt%2F%5Bid%5D%2Froute&page=%2Fapi%2Fprompt%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprompt%2F%5Bid%5D%2Froute.js&appDir=E%3A%5Cfull%20stack%20web%5Cfullstack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfull%20stack%20web%5Cfullstack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprompt%2F%5Bid%5D%2Froute&page=%2Fapi%2Fprompt%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprompt%2F%5Bid%5D%2Froute.js&appDir=E%3A%5Cfull%20stack%20web%5Cfullstack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfull%20stack%20web%5Cfullstack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_full_stack_web_fullstack_app_api_prompt_id_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/prompt/[id]/route.js */ \"(rsc)/./app/api/prompt/[id]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/prompt/[id]/route\",\n        pathname: \"/api/prompt/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/prompt/[id]/route\"\n    },\n    resolvedPagePath: \"E:\\\\full stack web\\\\fullstack\\\\app\\\\api\\\\prompt\\\\[id]\\\\route.js\",\n    nextConfigOutput,\n    userland: E_full_stack_web_fullstack_app_api_prompt_id_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/prompt/[id]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9tcHQlMkYlNUJpZCU1RCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcHJvbXB0JTJGJTVCaWQlNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwcm9tcHQlMkYlNUJpZCU1RCUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDZnVsbCUyMHN0YWNrJTIwd2ViJTVDZnVsbHN0YWNrJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1FJTNBJTVDZnVsbCUyMHN0YWNrJTIwd2ViJTVDZnVsbHN0YWNrJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2U7QUFDNUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdWxsc3RhY2svPzZlZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRTpcXFxcZnVsbCBzdGFjayB3ZWJcXFxcZnVsbHN0YWNrXFxcXGFwcFxcXFxhcGlcXFxccHJvbXB0XFxcXFtpZF1cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Byb21wdC9baWRdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJvbXB0L1tpZF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Byb21wdC9baWRdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRTpcXFxcZnVsbCBzdGFjayB3ZWJcXFxcZnVsbHN0YWNrXFxcXGFwcFxcXFxhcGlcXFxccHJvbXB0XFxcXFtpZF1cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcHJvbXB0L1tpZF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprompt%2F%5Bid%5D%2Froute&page=%2Fapi%2Fprompt%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprompt%2F%5Bid%5D%2Froute.js&appDir=E%3A%5Cfull%20stack%20web%5Cfullstack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfull%20stack%20web%5Cfullstack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/prompt/[id]/route.js":
/*!**************************************!*\
  !*** ./app/api/prompt/[id]/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PATCH: () => (/* binding */ PATCH)\n/* harmony export */ });\n/* harmony import */ var _models_prompt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/prompt */ \"(rsc)/./models/prompt.js\");\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/database */ \"(rsc)/./utils/database.js\");\n\n\nconst GET = async (request, { params })=>{\n    try {\n        await (0,_utils_database__WEBPACK_IMPORTED_MODULE_1__.connectToDB)();\n        const prompt = await _models_prompt__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(params.id).populate(\"creator\");\n        if (!prompt) return new Response(\"Prompt Not Found\", {\n            status: 404\n        });\n        return new Response(JSON.stringify(prompt), {\n            status: 200\n        });\n    } catch (error) {\n        return new Response(\"Internal Server Error\", {\n            status: 500\n        });\n    }\n};\nconst PATCH = async (request, { params })=>{\n    const { prompt, tag } = await request.json();\n    try {\n        await (0,_utils_database__WEBPACK_IMPORTED_MODULE_1__.connectToDB)();\n        // Find the existing prompt by ID\n        const existingPrompt = await _models_prompt__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(params.id);\n        if (!existingPrompt) {\n            return new Response(\"Prompt not found\", {\n                status: 404\n            });\n        }\n        // Update the prompt with new data\n        existingPrompt.prompt = prompt;\n        existingPrompt.tag = tag;\n        await existingPrompt.save();\n        return new Response(\"Successfully updated the Prompts\", {\n            status: 200\n        });\n    } catch (error) {\n        return new Response(\"Error Updating Prompt\", {\n            status: 500\n        });\n    }\n};\nconst DELETE = async (request, { params })=>{\n    try {\n        await (0,_utils_database__WEBPACK_IMPORTED_MODULE_1__.connectToDB)();\n        // Find the prompt by ID and remove it\n        await _models_prompt__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndDelete(params.id);\n        return new Response(\"Prompt deleted successfully\", {\n            status: 200\n        });\n    } catch (error) {\n        return new Response(\"Error deleting prompt\", {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb21wdC9baWRdL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9DO0FBQ1U7QUFFdkMsTUFBTUUsTUFBTSxPQUFPQyxTQUFTLEVBQUVDLE1BQU0sRUFBRTtJQUN6QyxJQUFJO1FBQ0EsTUFBTUgsNERBQVdBO1FBRWpCLE1BQU1JLFNBQVMsTUFBTUwsc0RBQU1BLENBQUNNLFFBQVEsQ0FBQ0YsT0FBT0csRUFBRSxFQUFFQyxRQUFRLENBQUM7UUFDekQsSUFBSSxDQUFDSCxRQUFRLE9BQU8sSUFBSUksU0FBUyxvQkFBb0I7WUFBRUMsUUFBUTtRQUFJO1FBRW5FLE9BQU8sSUFBSUQsU0FBU0UsS0FBS0MsU0FBUyxDQUFDUCxTQUFTO1lBQUVLLFFBQVE7UUFBSTtJQUU5RCxFQUFFLE9BQU9HLE9BQU87UUFDWixPQUFPLElBQUlKLFNBQVMseUJBQXlCO1lBQUVDLFFBQVE7UUFBSTtJQUMvRDtBQUNKLEVBQUM7QUFFTSxNQUFNSSxRQUFRLE9BQU9YLFNBQVMsRUFBRUMsTUFBTSxFQUFFO0lBQzNDLE1BQU0sRUFBRUMsTUFBTSxFQUFFVSxHQUFHLEVBQUUsR0FBRyxNQUFNWixRQUFRYSxJQUFJO0lBRTFDLElBQUk7UUFDQSxNQUFNZiw0REFBV0E7UUFFakIsaUNBQWlDO1FBQ2pDLE1BQU1nQixpQkFBaUIsTUFBTWpCLHNEQUFNQSxDQUFDTSxRQUFRLENBQUNGLE9BQU9HLEVBQUU7UUFFdEQsSUFBSSxDQUFDVSxnQkFBZ0I7WUFDakIsT0FBTyxJQUFJUixTQUFTLG9CQUFvQjtnQkFBRUMsUUFBUTtZQUFJO1FBQzFEO1FBRUEsa0NBQWtDO1FBQ2xDTyxlQUFlWixNQUFNLEdBQUdBO1FBQ3hCWSxlQUFlRixHQUFHLEdBQUdBO1FBRXJCLE1BQU1FLGVBQWVDLElBQUk7UUFFekIsT0FBTyxJQUFJVCxTQUFTLG9DQUFvQztZQUFFQyxRQUFRO1FBQUk7SUFDMUUsRUFBRSxPQUFPRyxPQUFPO1FBQ1osT0FBTyxJQUFJSixTQUFTLHlCQUF5QjtZQUFFQyxRQUFRO1FBQUk7SUFDL0Q7QUFDSixFQUFFO0FBRUssTUFBTVMsU0FBUyxPQUFPaEIsU0FBUyxFQUFFQyxNQUFNLEVBQUU7SUFDNUMsSUFBSTtRQUNBLE1BQU1ILDREQUFXQTtRQUVqQixzQ0FBc0M7UUFDdEMsTUFBTUQsc0RBQU1BLENBQUNvQixpQkFBaUIsQ0FBQ2hCLE9BQU9HLEVBQUU7UUFHeEMsT0FBTyxJQUFJRSxTQUFTLCtCQUErQjtZQUFFQyxRQUFRO1FBQUk7SUFDckUsRUFBRSxPQUFPRyxPQUFPO1FBQ1osT0FBTyxJQUFJSixTQUFTLHlCQUF5QjtZQUFFQyxRQUFRO1FBQUk7SUFDL0Q7QUFDSixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVsbHN0YWNrLy4vYXBwL2FwaS9wcm9tcHQvW2lkXS9yb3V0ZS5qcz81NWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9tcHQgZnJvbSBcIkBtb2RlbHMvcHJvbXB0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3RUb0RCIH0gZnJvbSBcIkB1dGlscy9kYXRhYmFzZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVCA9IGFzeW5jIChyZXF1ZXN0LCB7IHBhcmFtcyB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGNvbm5lY3RUb0RCKClcclxuXHJcbiAgICAgICAgY29uc3QgcHJvbXB0ID0gYXdhaXQgUHJvbXB0LmZpbmRCeUlkKHBhcmFtcy5pZCkucG9wdWxhdGUoXCJjcmVhdG9yXCIpXHJcbiAgICAgICAgaWYgKCFwcm9tcHQpIHJldHVybiBuZXcgUmVzcG9uc2UoXCJQcm9tcHQgTm90IEZvdW5kXCIsIHsgc3RhdHVzOiA0MDQgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkocHJvbXB0KSwgeyBzdGF0dXM6IDIwMCB9KVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIkludGVybmFsIFNlcnZlciBFcnJvclwiLCB7IHN0YXR1czogNTAwIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUEFUQ0ggPSBhc3luYyAocmVxdWVzdCwgeyBwYXJhbXMgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBwcm9tcHQsIHRhZyB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBjb25uZWN0VG9EQigpO1xyXG5cclxuICAgICAgICAvLyBGaW5kIHRoZSBleGlzdGluZyBwcm9tcHQgYnkgSURcclxuICAgICAgICBjb25zdCBleGlzdGluZ1Byb21wdCA9IGF3YWl0IFByb21wdC5maW5kQnlJZChwYXJhbXMuaWQpO1xyXG5cclxuICAgICAgICBpZiAoIWV4aXN0aW5nUHJvbXB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXCJQcm9tcHQgbm90IGZvdW5kXCIsIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdGhlIHByb21wdCB3aXRoIG5ldyBkYXRhXHJcbiAgICAgICAgZXhpc3RpbmdQcm9tcHQucHJvbXB0ID0gcHJvbXB0O1xyXG4gICAgICAgIGV4aXN0aW5nUHJvbXB0LnRhZyA9IHRhZztcclxuXHJcbiAgICAgICAgYXdhaXQgZXhpc3RpbmdQcm9tcHQuc2F2ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgdGhlIFByb21wdHNcIiwgeyBzdGF0dXM6IDIwMCB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIkVycm9yIFVwZGF0aW5nIFByb21wdFwiLCB7IHN0YXR1czogNTAwIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURSA9IGFzeW5jIChyZXF1ZXN0LCB7IHBhcmFtcyB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGNvbm5lY3RUb0RCKCk7XHJcblxyXG4gICAgICAgIC8vIEZpbmQgdGhlIHByb21wdCBieSBJRCBhbmQgcmVtb3ZlIGl0XHJcbiAgICAgICAgYXdhaXQgUHJvbXB0LmZpbmRCeUlkQW5kRGVsZXRlKHBhcmFtcy5pZCk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXCJQcm9tcHQgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIiwgeyBzdGF0dXM6IDIwMCB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIkVycm9yIGRlbGV0aW5nIHByb21wdFwiLCB7IHN0YXR1czogNTAwIH0pO1xyXG4gICAgfVxyXG59OyJdLCJuYW1lcyI6WyJQcm9tcHQiLCJjb25uZWN0VG9EQiIsIkdFVCIsInJlcXVlc3QiLCJwYXJhbXMiLCJwcm9tcHQiLCJmaW5kQnlJZCIsImlkIiwicG9wdWxhdGUiLCJSZXNwb25zZSIsInN0YXR1cyIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsIlBBVENIIiwidGFnIiwianNvbiIsImV4aXN0aW5nUHJvbXB0Iiwic2F2ZSIsIkRFTEVURSIsImZpbmRCeUlkQW5kRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/prompt/[id]/route.js\n");

/***/ }),

/***/ "(rsc)/./models/prompt.js":
/*!**************************!*\
  !*** ./models/prompt.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PromptSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    creator: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"User\"\n    },\n    prompt: {\n        type: String,\n        required: [\n            true,\n            \"Prompt is required.\"\n        ]\n    },\n    tag: {\n        type: String,\n        required: [\n            true,\n            \"Tag is required.\"\n        ]\n    }\n});\nconst Prompt = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Prompt || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Prompt\", PromptSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prompt);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvcHJvbXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUVqRCxNQUFNRyxlQUFlLElBQUlILDRDQUFNQSxDQUFDO0lBQzlCSSxTQUFTO1FBQ1BDLE1BQU1MLDRDQUFNQSxDQUFDTSxLQUFLLENBQUNDLFFBQVE7UUFDM0JDLEtBQUs7SUFDUDtJQUNBQyxRQUFRO1FBQ05KLE1BQU1LO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXNCO0lBQ3pDO0lBQ0FDLEtBQUs7UUFDSFAsTUFBTUs7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBbUI7SUFDdEM7QUFDRjtBQUVBLE1BQU1FLFNBQVNYLDRDQUFNQSxDQUFDVyxNQUFNLElBQUlaLCtDQUFLQSxDQUFDLFVBQVVFO0FBRWhELGlFQUFlVSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVsbHN0YWNrLy4vbW9kZWxzL3Byb21wdC5qcz80ZjkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IFByb21wdFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIGNyZWF0b3I6IHtcclxuICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgIHJlZjogJ1VzZXInLFxyXG4gIH0sXHJcbiAgcHJvbXB0OiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogW3RydWUsICdQcm9tcHQgaXMgcmVxdWlyZWQuJ10sXHJcbiAgfSxcclxuICB0YWc6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1RhZyBpcyByZXF1aXJlZC4nXSxcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgUHJvbXB0ID0gbW9kZWxzLlByb21wdCB8fCBtb2RlbCgnUHJvbXB0JywgUHJvbXB0U2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb21wdDsiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJQcm9tcHRTY2hlbWEiLCJjcmVhdG9yIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJwcm9tcHQiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRhZyIsIlByb21wdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/prompt.js\n");

/***/ }),

/***/ "(rsc)/./utils/database.js":
/*!***************************!*\
  !*** ./utils/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDB: () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false; // track the connection\nconst connectToDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    if (isConnected) {\n        console.log(\"MongoDB is already connected\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n            dbName: \"share_prompt\",\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        isConnected = true;\n        console.log(\"MongoDB connected\");\n    } catch (error) {\n        console.log(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9kYXRhYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsSUFBSUMsY0FBYyxPQUFPLHVCQUF1QjtBQUV6QyxNQUFNQyxjQUFjO0lBQ3pCRixtREFBWSxDQUFDLGVBQWU7SUFFNUIsSUFBR0MsYUFBYTtRQUNkRyxRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNGO0lBRUEsSUFBSTtRQUNGLE1BQU1MLHVEQUFnQixDQUFDTyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtZQUM5Q0MsUUFBUTtZQUNSQyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN0QjtRQUVBWCxjQUFjO1FBRWRHLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUUsT0FBT1EsT0FBTztRQUNkVCxRQUFRQyxHQUFHLENBQUNRO0lBQ2Q7QUFDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVsbHN0YWNrLy4vdXRpbHMvZGF0YWJhc2UuanM/MmI5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxubGV0IGlzQ29ubmVjdGVkID0gZmFsc2U7IC8vIHRyYWNrIHRoZSBjb25uZWN0aW9uXHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdFRvREIgPSBhc3luYyAoKSA9PiB7XHJcbiAgbW9uZ29vc2Uuc2V0KCdzdHJpY3RRdWVyeScsIHRydWUpO1xyXG5cclxuICBpZihpc0Nvbm5lY3RlZCkge1xyXG4gICAgY29uc29sZS5sb2coJ01vbmdvREIgaXMgYWxyZWFkeSBjb25uZWN0ZWQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XHJcbiAgICAgIGRiTmFtZTogXCJzaGFyZV9wcm9tcHRcIixcclxuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICB9KVxyXG5cclxuICAgIGlzQ29ubmVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnTW9uZ29EQiBjb25uZWN0ZWQnKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0VG9EQiIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiZGJOYW1lIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/database.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprompt%2F%5Bid%5D%2Froute&page=%2Fapi%2Fprompt%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprompt%2F%5Bid%5D%2Froute.js&appDir=E%3A%5Cfull%20stack%20web%5Cfullstack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfull%20stack%20web%5Cfullstack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();