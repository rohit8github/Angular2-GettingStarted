// main entry point 
//JiT-Just in time
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

//AoT-Ahead of Time
//import { platformBrowser } from "@angular/platform-browser";
//import { AppModuleNgFactory } from "./app.module.ngfactory";

//platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);*/
