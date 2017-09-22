import React from 'react';

import { Msg } from './msg.jsx';

export function RulesTab({ rules, error }) {
  return (
    <div>
      <h3>SUPPORTED RULES</h3>
      {error ? <Msg type="error" title="ERROR" text={error} /> : null}
      <ul className="violations-content">
        {rules.map((rule, index) => {
          return <Rule key={index} rule={rule} />;
        })}
      </ul>
    </div>
  );
}

export function Rule(props) {
  const rule = props.rule;
  return (
    <li
      style={{
        marginBottom: '32px',
        paddingBottom: '32px',
        borderBottom: '1px solid #ccc',
      }}
    >
      <h4 className="dc-h4">
        <RuleType type={rule.type} />
        {rule.type} {'\u2013'} {rule.title}
      </h4>
      {rule.url ? <RuleLink url={rule.url} /> : null}
      <p className="dc--text-small">{rule.is_active ? 'Active' : 'Inactive'}</p>
    </li>
  );
}

export function RuleType(props) {
  if ('MUST' === props.type)
    return <span className="dc-status dc-status--error" />;
  else if ('SHOULD' === props.type)
    return <span className="dc-status dc-status--new" />;
  else return <span className="dc-status dc-status--inactive" />;
}

export function RuleLink(props) {
  return (
    <p>
      Reference:{' '}
      <a href={props.url} className="dc-link" target="_blank">
        {props.url}
      </a>
    </p>
  );
}
