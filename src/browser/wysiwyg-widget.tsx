import * as React from 'react';
import {injectable, postConstruct, inject} from 'inversify';
import {ReactWidget} from '@theia/core/lib/browser/widgets/react-widget';
import {MessageService} from '@theia/core';
import {Wysiwyg} from './wysiwyg/Wysiwyg';

@injectable()
export class WysiwygWidget extends ReactWidget {

    static readonly ID = 'wysiwyg:widget';
    static readonly LABEL = 'Wysiwyg Widget';

    @inject(MessageService)
    protected readonly messageService!: MessageService;

    @postConstruct()
    protected async init(): Promise<void> {
        this.id = WysiwygWidget.ID;
        this.title.label = WysiwygWidget.LABEL;
        this.title.caption = WysiwygWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();
    }

    protected render(): React.ReactNode {
        return <div id='widget-container'>
            <Wysiwyg/>
        </div>
    }

    protected displayMessage(): void {
        this.messageService.info('Congratulations: Wysiwyg Widget Successfully Created!');
    }

}
