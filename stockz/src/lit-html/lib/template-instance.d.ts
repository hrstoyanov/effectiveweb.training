/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
import { Part } from './parts.js';
import { TemplateFactory } from './template-factory.js';
import { TemplateProcessor } from './template-processor.js';
import { Template } from './template.js';
/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
export declare class TemplateInstance {
    _parts: Array<Part | undefined>;
    processor: TemplateProcessor;
    _getTemplate: TemplateFactory;
    template: Template;
    constructor(template: Template, processor: TemplateProcessor, getTemplate: TemplateFactory);
    update(values: any[]): void;
    _clone(): DocumentFragment;
}
declare global {
    class CustomElementRegistry {
        upgrade(node: Node): void;
    }
}
