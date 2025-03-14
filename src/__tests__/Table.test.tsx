import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME, Table } from '@admiral-ds/react-ui';
import type { TableProps } from '@admiral-ds/react-ui';

import { render, fireEvent } from '@testing-library/react';

describe('Table', () => {
  const rowList = [
    {
      id: '0001',
      transfer_type: 'МНО',
      rate: 5,
    },
    {
      id: '0002',
      transfer_type: 'ПРО',
      rate: 27.2,
    },
  ];

  const columnList = [
    {
      name: 'transfer_type',
      title: 'Тип сделки',
    },
    {
      name: 'rate',
      title: 'Ставка',
    },
  ];

  const Comp = (props: Omit<TableProps, 'columnList' | 'rowList'>) => (
    <ThemeProvider theme={LIGHT_THEME}>
      <Table {...props} columnList={columnList} rowList={rowList} />
    </ThemeProvider>
  );

  beforeEach(() => {
    Object.defineProperty(global, 'ResizeObserver', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        observe: jest.fn(() => 'Mocking works'),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
      })),
    });
  });

  it('should set header checkbox to checked', () => {
    const { container } = render(<Comp displayRowSelectionColumn headerCheckboxChecked />);
    const checkboxCell = container.getElementsByClassName('th_checkbox')[0];
    const checkbox = checkboxCell.getElementsByTagName('INPUT')[0];
    expect((checkbox as HTMLInputElement).checked).toEqual(true);
  });

  it('should call onRowClick when user clicks on row content', () => {
    const onClick = jest.fn();
    const { container } = render(<Comp onRowClick={onClick} />);
    const cell = container.querySelector("[data-row='0001'][data-column='rate']");
    if (cell) {
      fireEvent.click(cell);
      expect(onClick).toBeCalledTimes(1);
    }
  });
});
