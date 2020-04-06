import { ContainerModule } from 'inversify';
import { WysiwygWidget } from './wysiwyg-widget';
import { WysiwygContribution } from './wysiwyg-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, WysiwygContribution);
    bind(FrontendApplicationContribution).toService(WysiwygContribution);
    bind(WysiwygWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: WysiwygWidget.ID,
        createWidget: () => ctx.container.get<WysiwygWidget>(WysiwygWidget)
    })).inSingletonScope();
});
