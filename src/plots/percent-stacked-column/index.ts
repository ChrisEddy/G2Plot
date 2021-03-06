import { deepMix } from '@antv/util';
import BasePlot, { PlotConfig } from '../../base/plot';
import PercentStackedColumnLayer, { PercentStackedColumnLayerConfig } from './layer';

export interface PercentStackedColumnConfig extends PercentStackedColumnLayerConfig, PlotConfig {}

export default class PercentStackedColumn<
  T extends PercentStackedColumnConfig = PercentStackedColumnConfig
> extends BasePlot<T> {
  public static getDefaultOptions: typeof PercentStackedColumnLayer.getDefaultOptions =
    PercentStackedColumnLayer.getDefaultOptions;

  public createLayers(props) {
    const layerProps = deepMix({}, props);
    layerProps.type = 'percentStackedColumn';
    super.createLayers(layerProps);
  }
}
