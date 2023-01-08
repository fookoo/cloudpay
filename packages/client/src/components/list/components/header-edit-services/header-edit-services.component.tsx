import React, { useCallback, useRef } from 'react'
import { useToggle } from 'react-use-toggle-hook'
import ClearIcon from '@mui/icons-material/Clear'
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography
} from '@mui/material'
import { useClickOutside } from '../../../../hooks/useClickOutside/useClickOutside.hook'
import { ServicesEnum } from '@cloudpay/types'

interface IHeaderEditServicesProps {
  value: ServicesEnum[]
  label: string
  onChange?: (query: ServicesEnum[]) => void
}

export const HeaderEditServices: React.FC<IHeaderEditServicesProps> = ({ value, label, onChange }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const { value: isEdit, open, close } = useToggle(false)

  const handleLabelClick = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation()
      open()
    },
    [open]
  )

  const handleCheckboxChange = useCallback(
    (item: ServicesEnum) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const checkbox = Boolean(event.target.checked)

      if (checkbox) {
        onChange?.([...value, item])
        return
      }

      onChange?.(value.filter((el) => el !== item))
    },
    [close, onChange, value]
  )

  useClickOutside(wrapperRef, close)

  return (
    <div ref={wrapperRef}>
      {isEdit ? (
        <Paper sx={{ position: 'absolute', top: 0 }}>
          <Grid container p={2}>
            <Grid item xs={12} onClick={close}>
              {label}
            </Grid>
            {Object.entries(ServicesEnum).map(([, item], index) => (
              <Grid item xs={12} key={`checkbox-${index}`}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value.some((checkbox) => checkbox === item)}
                      onChange={handleCheckboxChange(item)}
                    />
                  }
                  label={item}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
      ) : (
        <Grid container justifyContent="space-between" onClick={handleLabelClick}>
          <Grid item>
            <Typography variant="body1">{label}</Typography>
          </Grid>
          {value.length > 0 && (
            <Grid item>
              <Typography variant="body1">({value.length})</Typography>
            </Grid>
          )}
        </Grid>
      )}
    </div>
  )
}
