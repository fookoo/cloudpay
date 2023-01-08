import React, { useCallback, useRef } from 'react'
import { useToggle } from 'react-use-toggle-hook'
import ClearIcon from '@mui/icons-material/Clear'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material'
import { useClickOutside } from '../../../../hooks/useClickOutside/useClickOutside.hook'

interface IHeaderEditLabelProps {
  value: string
  label: string
  onChange: (query: string) => void
  onClear?: () => void
}

export const HeaderEditLabel: React.FC<IHeaderEditLabelProps> = ({ value, label, onChange, onClear }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const { value: isEdit, open, close } = useToggle(false)

  const handleLabelClick = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation()
      open()
    },
    [open]
  )

  const handleInputClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()
  }, [])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value)
    },
    [onChange]
  )

  const handleClear = useCallback(() => {
    close()
    onClear?.()
  }, [close])

  useClickOutside(wrapperRef, close)

  return (
    <div ref={wrapperRef}>
      {isEdit || value ? (
        <FormControl size="small" variant="outlined">
          <InputLabel htmlFor="field">{label}</InputLabel>
          <OutlinedInput
            id="field"
            type="text"
            autoFocus
            value={value}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="clear filter" onClick={handleClear} edge="end">
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            }
            label={label}
            onClick={handleInputClick}
            onChange={handleChange}
          />
        </FormControl>
      ) : (
        <Typography variant="body1" onClick={handleLabelClick}>
          {label}
        </Typography>
      )}
    </div>
  )
}
