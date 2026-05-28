interface Test {
    getDecorationsInViewport(visibleRange: Range): ViewModelDecoration[];
    getViewportViewLineRenderingData(visibleRange: Range, mineNumber: number): ViewLineRenderingData;
    getViewLineRenderingData(lineNumber: number): ViewLineRenderingData;
    getViewLineData(lineNumber: number): ViewLineData;
}