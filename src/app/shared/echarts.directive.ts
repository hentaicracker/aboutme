import { Directive, ElementRef, Input, HostListener, OnChanges, SimpleChange, OnDestroy } from '@angular/core';

const echarts = require('echarts/lib/echarts');

require('echarts/lib/chart/map');
require('echarts/lib/chart/scatter');
require('echarts/map/js/china');

@Directive({
    selector: '[echartsMap]'
})
export class EchartsMapDirective implements OnChanges, OnDestroy {

    @Input() options: any;
    @Input() dataset: any[];

    private chart: any = null;
    private currentWindowWidth: any = null;

    constructor(private el: ElementRef) {

    }

    @HostListener('window:resize', ['$event']) onWindowResize(e: any) {
        if (e.target.innerWidth !== this.currentWindowWidth) {
            this.currentWindowWidth = e.target.innerWidth;
            if (this.chart) {
                this.chart.resize();
            }
        }
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (changes['options']) {
            this.onOptionsChange(this.options);
        }

        if (changes['dataset']) {
            this.onDatasetChange(this.dataset);
        }
    }

    ngOnDestroy() {
        if (this.chart) {
            this.chart.dispose();
            this.chart = null;
        }
    }

    private onOptionsChange(opt: any) {
        if (opt) {
            if (!this.chart) {
                this.chart = echarts.init(this.el.nativeElement);
                this.currentWindowWidth = window.innerWidth;
            }
            if (this.hasData()) {
                this.updateChart();
            } else if (this.dataset && this.dataset.length) {
                this.mergeDataset(this.dataset);
                this.updateChart();
            }
        }
    }

    private onDatasetChange(dataset: any[]) {
        if (this.chart && this.options) {
            if (!this.options.series) {
                this.options.series = [];
            }

            this.mergeDataset(dataset);
            this.updateChart();
        }
    }

    private updateChart() {
        this.chart.setOption(this.options);
        this.chart.resize();
    }

    private mergeDataset(dataset: any[]) {
        for (let i = 0, len = dataset.length; i < len; i++) {
            if (!this.options.series[i]) {
                this.options.series[i] = { data: dataset[i] };
            } else {
                this.options.series[i].data = dataset[i];
            }
        }
    }

    private hasData(): boolean {
        if (!this.options.series || !this.options.series.length) {
            return false;
        }

        for (let serie of this.options.series) {
            if (serie.data && serie.data.length > 0) {
                return true;
            }
        }

        return false;
    }

}