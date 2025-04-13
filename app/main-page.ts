import { EventData } from '@nativescript/core/data/observable';
import { Page } from '@nativescript/core/ui/page';
import { Frame } from '@nativescript/core/ui/frame';
import { MainViewModel } from './main-view-model';
import { SwipeGestureEventData } from '@nativescript/core/ui/gestures';

let viewModel: MainViewModel;

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    
    if (!viewModel) {
        viewModel = new MainViewModel();
    }
    
    page.bindingContext = viewModel;
    viewModel.initializeContainer(page);

    // Add swipe gesture
    page.on('swipe', (args: SwipeGestureEventData) => {
        if (args.direction === 1 || args.direction === 2) { // 1 = right, 2 = left
            viewModel.openSettings();
        }
    });
}

export function navigatingFrom() {
    if (viewModel) {
        viewModel.dispose();
    }
}

export function onNavigatedTo(args: EventData) {
    if (viewModel) {
        // Update settings when returning from settings page
        viewModel.updateDateTime();
        viewModel.updateFontSettings();
    }
}