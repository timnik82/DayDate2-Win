import { EventData } from '@nativescript/core/data/observable';
import { Page } from '@nativescript/core/ui/page';
import { Frame } from '@nativescript/core/ui/frame';
import { MainViewModel } from './main-view-model';
import { SwipeGestureEventData } from '@nativescript/core/ui/gestures';

let viewModel: MainViewModel;

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    
    if (!viewModel) {
        console.log('Creating new MainViewModel.');
        viewModel = new MainViewModel();
    } else {
        // If viewModel already exists, ensure settings are refreshed
        console.log('Reusing existing MainViewModel. Refreshing settings.');
        viewModel.updateDateTime(); // Keep date/time fresh
        viewModel.updateFontSettings(); // Refresh font settings
    }
    
    page.bindingContext = viewModel;
    viewModel.initializeContainer(page); // Re-initialize container specific things if needed

    // Add swipe gesture (ensure listener is not duplicated)
    page.off('swipe'); // Remove previous listener
    page.on('swipe', (args: SwipeGestureEventData) => {
        if (args.direction === 1 || args.direction === 2) { // 1 = right, 2 = left
            viewModel.openSettings();
        }
    });
}

export function navigatingFrom() {
    // Optional: Consider if dispose is needed here or handled elsewhere
    // if (viewModel) {
    //     viewModel.dispose();
    // }
}

/* // Remove the onNavigatedTo handler
export function onNavigatedTo(args: EventData) {
    console.log('Returned to main page (onNavigatedTo event).');
    if (viewModel) {
        console.log('ViewModel exists, calling updateFontSettings.');
        // Update settings when returning from settings page
        viewModel.updateDateTime();
        viewModel.updateFontSettings();
    } else {
        console.log('ViewModel does not exist on return.');
    }
}
*/