function Fallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  resetErrorBoundary(); // This is a custom reset function that you can use to reset the error boundary state. This is useful for handling errors in your UI, such as displaying a "try again" button.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre className="text-error">{error.message}</pre>
    </div>
  );
}

export default Fallback;
