import { map } from 'lodash';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import App from '../../common/views/app';
import Snippet from '../../common/views/containers/snippet';
import getFields from '../fields';
import { define } from '../../common/formatters';

const formatters = {
  suitability: { format: define },
  holding: { format: define }
};

const fields = getFields(formatters);

const Place = ({
  item,
  ...props
}) => (
  <App { ...props }>
    <div className="grid-row">
      <div className="column-two-thirds">
        <header>
          <h2>{item.name}</h2>
          <h1><Snippet>pages.places</Snippet></h1>
          <dl>
            {
              map(fields, ({ label, format }, key) =>
                <Fragment key={key}>
                  <dt>{label}</dt>
                  <dd>{format ? format(item[key]) : item[key]}</dd>
                </Fragment>
              )
            }
          </dl>
        </header>
      </div>

      <div className="column-one-third sidebar">
        <aside>

        </aside>
      </div>
    </div>

  </App>
);

const mapStateToProps = ({ item }) => ({ item });

export default connect(mapStateToProps)(Place);
