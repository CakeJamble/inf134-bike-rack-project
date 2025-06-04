export default function DiscussionPost({
  title = "",
  content = "",
  author = "",
  topic = "",
  timeAgo = "",
  upvotes = 0,
  commentCount = 0,
  isPreview = true,
}) {
  // Truncate content for preview
  const maxPreviewLength = 200;
  const previewContent =
    isPreview && content && content.length > maxPreviewLength
      ? content.substring(0, maxPreviewLength) + "..."
      : content;

  const formatNumber = (num:number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="flex">
        {/* Voting Section */}
        <div className="flex flex-col items-center bg-gray-50 px-2 sm:px-3 py-3 sm:py-4 border-r border-gray-200">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mb-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
          <span className="text-xs sm:text-sm font-medium text-gray-700">
            {formatNumber(upvotes)}
          </span>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-3 sm:p-4">
          {/* Topic and Author Info */}
          <div className="flex flex-col sm:flex-row sm:items-center text-xs text-gray-500 mb-2 space-y-1 sm:space-y-0">
            {topic && (
              <div className="flex items-center mr-2">
                <span className="font-medium text-gray-700">Discussion:</span>
                <span className="ml-1 text-gray-600">{topic}</span>
              </div>
            )}
            <div className="flex items-center">
              <span>Posted by {author}</span>
              <span className="mx-1">•</span>
              <span>{timeAgo}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">
            {title}
          </h2>

          {/* Content Preview */}
          {previewContent && (
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              {previewContent}
            </p>
          )}

          {/* Action Bar */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-4 text-gray-500">
            <div className="flex items-center space-x-1">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.418 8-9 8a9.013 9.013 0 01-5.314-1.658l-3.428 
                     1.428 1.428-3.428A9.013 9.013 0 013 12c0-4.971 4.029-9 9-9s9 4.029 9 9z"
                />
              </svg>
              <span className="text-xs font-medium">{formatNumber(commentCount)}</span>
              <span className="text-xs font-medium hidden sm:inline">Comments</span>
            </div>

            <div className="flex items-center space-x-1">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 
                     2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 
                     0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 
                     2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
              <span className="text-xs font-medium hidden sm:inline">Share</span>
            </div>

            <div className="flex items-center space-x-1">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
              <span className="text-xs font-medium hidden sm:inline">Bookmark</span>
            </div>

            {isPreview && content && content.length > maxPreviewLength && (
              <div className="text-xs text-gray-600 font-medium ml-auto">
                <span className="hidden sm:inline">Content truncated</span>
                <span className="sm:hidden">Truncated</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
