import useJsonFetch from '../hooks/useJsonFetch';

interface DataViewerProps {
    url: string;
    title: string;
}

export const DataViewer = ({ url, title }: DataViewerProps) => {
    const [data, loading, error] = useJsonFetch(url);

    return (
        <div className="viewer-card">
            <h3 className="viewer-title">{title}</h3>
            <div className="viewer-body">
                {loading && (
                    <div className="status loading">
                        <div className="spinner"></div>
                        <span>Идёт загрузка данных...</span>
                    </div>
                )}

                {error && (
                    <div className="status error">
                        <span className="error-icon">⚠️</span>
                        <span>{error.message}</span>
                    </div>
                )}

                {!loading && !error && Boolean(data) && (
                    <pre className="json-output">
                        {JSON.stringify(data, null, 2)}
                    </pre>
                )}
            </div>
        </div>
    );
};