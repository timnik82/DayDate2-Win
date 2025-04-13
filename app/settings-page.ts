import { NavigatedData } from '@nativescript/core/ui/page';
import { Page } from '@nativescript/core/ui/page';
import { SettingsViewModel } from './settings-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new SettingsViewModel();
}