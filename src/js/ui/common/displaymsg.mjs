/**
 * Displays a message by creating an alert element and appending it to the specified target element.
 * @param {string} type - The type of the message (e.g., "success", "info", "warning", "danger").
 * @param {string} message - The content of the message.
 * @param {string} target - The target element to append the message.
 */

export default function displayMessage(type, message, target) {
	const container = document.querySelector(target);

	container.innerHTML = `
    <div class="alert alert-${type}">
      ${message}
    </div>
  `;
}