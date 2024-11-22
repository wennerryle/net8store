import { css } from "lit";

export const buttonBase = css`
  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s;
  }
`

export const primaryButton = css`
  .primary-button {
    background-color: #2c5282;
    color: white;
  }

  .primary-button:hover {
    background-color: #2a4365;
  }
`

export const secondaryButton = css`
  .secondary-button {
    background-color: #e2e8f0;
    color: #2d3748;
  }

  .secondary-button:hover {
    background-color: #cbd5e0;
  }
`