import * as React from 'react';
import {inject, injectable, postConstruct} from 'inversify';
import {ReactWidget} from '@theia/core/lib/browser/widgets/react-widget';
import {MessageService} from '@theia/core';
import {Wysiwyg} from './wysiwyg/View/Wysiwyg';
import {Widget} from '@theia/core/lib/browser';

@injectable()
export class WysiwygWidget extends ReactWidget {

    static readonly ID = 'wysiwyg:widget';
    static readonly LABEL = 'Wysiwyg Widget';

    @inject(MessageService)
    protected readonly messageService!: MessageService;

    sizeMessage: any;
    resizeCallback: any;

    @postConstruct()
    protected async init(): Promise<void> {
        this.id = WysiwygWidget.ID;
        this.title.label = WysiwygWidget.LABEL;
        this.title.caption = WysiwygWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();
        this.sizeMessage = null;
        this.resizeCallback = null;
    }

    onResize(msg: Widget.ResizeMessage): void {
        if (!this.resizeCallback) {
            return;
        }
        this.resizeCallback(msg);
    }

    protected render(): React.ReactNode {
        return <div id='widget-container'>
            <Wysiwyg setCallback={(callback: any) => this.resizeCallback = callback}/>
        </div>
    }

    protected displayMessage(): void {
        this.messageService.info('Congratulations: Wysiwyg Widget Successfully Created!');
    }

}
